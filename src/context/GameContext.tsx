import React, { createContext, useContext, useReducer } from 'react';
import type { GameContext as GameContextType } from '../types/game';
import { GameDifficulty, Question, Team } from '../types/game';

interface GameProviderContext {
  state: GameContextType;
  dispatch: React.Dispatch<GameAction>;
}

type GameAction =
  | { type: 'START_GAME'; payload: { teams: Team[]; difficulty: GameDifficulty } }
  | { type: 'SET_QUESTION'; payload: Question }
  | { type: 'REVEAL_ANSWER'; payload: { answerIndex: number } }
  | { type: 'UPDATE_SCORE'; payload: { teamId: string; points: number } }
  | { type: 'NEXT_TURN' }
  | { type: 'END_ROUND' }
  | { type: 'END_GAME' }
  | { type: 'SET_CURRENT_TEAM'; payload: { teamIndex: number } };

const initialState: GameContextType = {
  teams: [],
  currentRound: 0,
  totalRounds: 5,
  currentTeamIndex: 0,
  currentQuestion: null,
  gameState: 'setup',
  difficulty: 'easy',
  timePerTurn: 30,
};

const GameContext = createContext<GameProviderContext | undefined>(undefined);

function gameReducer(state: GameContextType, action: GameAction): GameContextType {
  switch (action.type) {
    case 'START_GAME':
      return {
        ...state,
        teams: action.payload.teams,
        difficulty: action.payload.difficulty,
        gameState: 'playing',
        currentRound: 1,
        currentTeamIndex: 0,
        currentQuestion: null,
      };
    case 'SET_QUESTION':
      return {
        ...state,
        currentQuestion: action.payload,
      };
    case 'REVEAL_ANSWER':
      if (!state.currentQuestion) return state;
      return {
        ...state,
        currentQuestion: {
          ...state.currentQuestion,
          answers: state.currentQuestion.answers.map((answer, index) =>
            index === action.payload.answerIndex
              ? { ...answer, isRevealed: true }
              : answer
          ),
        },
      };
    case 'UPDATE_SCORE':
      return {
        ...state,
        teams: state.teams.map((team) =>
          team.id === action.payload.teamId
            ? { ...team, score: team.score + action.payload.points }
            : team
        ),
      };
    case 'NEXT_TURN':
      return {
        ...state,
        currentTeamIndex: (state.currentTeamIndex + 1) % state.teams.length,
      };
    case 'SET_CURRENT_TEAM':
      return {
        ...state,
        currentTeamIndex: action.payload.teamIndex,
      };
    case 'END_ROUND':
      return {
        ...state,
        currentRound: state.currentRound + 1,
        currentQuestion: null,
        currentTeamIndex: 0,
      };
    case 'END_GAME':
      return {
        ...state,
        gameState: 'gameOver',
      };
    default:
      return state;
  }
}

export function GameProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(gameReducer, initialState);

  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  const context = useContext(GameContext);
  if (context === undefined) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
} 