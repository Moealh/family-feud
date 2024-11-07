'use client'

import { useEffect, useState } from 'react'
import { useGame } from '../context/GameContext'
import { questions } from '../data/questions'
import { Answer } from '../types/game'

export function GameBoard() {
  const { state, dispatch } = useGame()
  const [timeLeft, setTimeLeft] = useState(state.timePerTurn)
  const [wrongAnswers, setWrongAnswers] = useState(0)
  const [userAnswer, setUserAnswer] = useState('')
  const [isTimerRunning, setIsTimerRunning] = useState(false)
  const [showPlayButton, setShowPlayButton] = useState(true)
  const [hasStartedOnce, setHasStartedOnce] = useState(false)
  const [showTransitionMessage, setShowTransitionMessage] = useState(false)

  useEffect(() => {
    if (!state.currentQuestion && questions.length > 0) {
      dispatch({ 
        type: 'SET_QUESTION', 
        payload: questions[state.currentRound - 1] 
      })
    }
  }, [state.currentRound, state.currentQuestion, dispatch])

  useEffect(() => {
    if (timeLeft > 0 && isTimerRunning && state.gameState === 'playing') {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000)
      return () => clearTimeout(timer)
    } else if (timeLeft === 0 && isTimerRunning) {
      endTurn()
    }
  }, [timeLeft, isTimerRunning, state.gameState])

  const handleStartTimer = () => {
    setTimeLeft(state.timePerTurn)
    setIsTimerRunning(true)
    setShowPlayButton(false)
    setWrongAnswers(0)
    setHasStartedOnce(true)
    setShowTransitionMessage(false)
  }

  const endTurn = () => {
    setIsTimerRunning(false)
    setShowPlayButton(true)
    setShowTransitionMessage(true)
    
    // Switch to the other team
    const nextTeamIndex = (state.currentTeamIndex + 1) % state.teams.length
    setTimeout(() => {
      dispatch({ 
        type: 'SET_CURRENT_TEAM', 
        payload: { teamIndex: nextTeamIndex } 
      })
      resetTurnState()
    }, 2000)
  }

  const resetTurnState = () => {
    setTimeLeft(state.timePerTurn)
    setShowPlayButton(true)
    setIsTimerRunning(false)
    setWrongAnswers(0)
    setHasStartedOnce(false)
    setUserAnswer('')
    setShowTransitionMessage(false)
  }

  const handleAnswerSubmit = () => {
    if (!state.currentQuestion || !isTimerRunning) return

    const answer = state.currentQuestion.answers.find(
      (a: Answer) => 
        a.text.toLowerCase() === userAnswer.toLowerCase() && 
        !a.isRevealed
    )

    if (answer) {
      dispatch({ 
        type: 'REVEAL_ANSWER', 
        payload: { 
          answerIndex: state.currentQuestion.answers.indexOf(answer) 
        } 
      })
      dispatch({ 
        type: 'UPDATE_SCORE', 
        payload: { 
          teamId: state.teams[state.currentTeamIndex].id, 
          points: answer.points 
        } 
      })
      setUserAnswer('')
    } else {
      setWrongAnswers(prev => {
        const newCount = prev + 1
        if (newCount >= 3) {
          endTurn()
          return 0
        }
        return newCount
      })
      setUserAnswer('')
    }
  }

  if (!state.currentQuestion) return null

  const currentTeam = state.teams[state.currentTeamIndex]
  const nextTeam = state.teams[(state.currentTeamIndex + 1) % state.teams.length]
  const shouldShowQuestion = isTimerRunning || (hasStartedOnce && state.currentQuestion.answers.some(a => a.isRevealed))

  return (
    <div className="w-full max-w-4xl space-y-6">
      <div className="flex justify-between">
        {state.teams.map((team, index) => (
          <div
            key={team.id}
            className={`text-xl font-bold p-4 rounded-lg ${
              state.currentTeamIndex === index
                ? 'bg-game-blue text-white'
                : 'bg-gray-100'
            }`}
          >
            {team.name}: {team.score}
          </div>
        ))}
      </div>

      <div className="rounded-lg bg-board-bg p-8 text-white">
        {shouldShowQuestion ? (
          <>
            <div className="mb-6 text-center text-2xl font-bold">
              {state.currentQuestion.text}
            </div>

            <div className="grid grid-cols-2 gap-4">
              {state.currentQuestion.answers.map((answer: Answer, index: number) => (
                <div
                  key={index}
                  className={`flex justify-between rounded-md bg-gray-700 p-4 ${
                    answer.isRevealed ? 'bg-game-gold text-black' : ''
                  }`}
                >
                  <span>{answer.isRevealed ? answer.text : index + 1}</span>
                  <span>{answer.isRevealed ? answer.points : ''}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 flex items-center gap-4">
              <input
                type="text"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                className="flex-1 rounded-md border p-2 text-black"
                placeholder={`${currentTeam.name}'s answer...`}
                onKeyPress={(e) => e.key === 'Enter' && handleAnswerSubmit()}
                disabled={!isTimerRunning}
              />
              <button
                onClick={handleAnswerSubmit}
                className={`rounded-md px-4 py-2 ${
                  isTimerRunning
                    ? 'bg-game-blue hover:bg-blue-700'
                    : 'bg-gray-500 cursor-not-allowed'
                }`}
                disabled={!isTimerRunning}
              >
                Submit
              </button>
            </div>
          </>
        ) : (
          <div className="text-center text-2xl font-bold py-12">
            {showTransitionMessage ? (
              <div className="space-y-4">
                <div className="text-game-red">Three Wrong Answers!</div>
                <div className="text-game-gold">{nextTeam.name}'s Turn to Steal!</div>
              </div>
            ) : (
              <div>Get Ready {currentTeam.name}!</div>
            )}
          </div>
        )}

        <div className="mt-4 text-center space-y-4">
          <div className="text-xl">
            {showPlayButton && !showTransitionMessage ? (
              <button
                onClick={handleStartTimer}
                className="bg-game-green hover:bg-green-700 px-6 py-2 rounded-md"
              >
                Start Turn
              </button>
            ) : (
              isTimerRunning && <div className="text-xl">Time Left: {timeLeft}s</div>
            )}
          </div>
          {hasStartedOnce && !showTransitionMessage && (
            <div className="text-lg text-game-red">
              Wrong Answers: {wrongAnswers}/3
            </div>
          )}
        </div>

        <div className="mt-4 text-center text-xl font-bold">
          Current Team: {currentTeam.name}
        </div>
      </div>
    </div>
  )
} 