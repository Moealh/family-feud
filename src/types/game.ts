export interface Team {
  id: string;
  name: string;
  score: number;
  avatar?: string;
}

export interface Answer {
  text: string;
  points: number;
  isRevealed: boolean;
}

export interface Question {
  id: string;
  text: string;
  category: string;
  difficulty: 'easy' | 'medium' | 'hard';
  answers: Answer[];
}

export type GameDifficulty = 'easy' | 'medium' | 'hard';
export type GameState = 'setup' | 'playing' | 'roundEnd' | 'gameOver';

export interface GameContext {
  teams: Team[];
  currentRound: number;
  totalRounds: number;
  currentTeamIndex: number;
  currentQuestion: Question | null;
  gameState: GameState;
  difficulty: GameDifficulty;
  timePerTurn: number;
} 