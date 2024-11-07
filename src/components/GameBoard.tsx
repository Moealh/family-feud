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
  const [allAnswersRevealed, setAllAnswersRevealed] = useState(false)
  const [allAnswersFound, setAllAnswersFound] = useState(false)

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
    
    if (state.currentQuestion) {
      state.currentQuestion.answers.forEach((_, index) => {
        dispatch({
          type: 'REVEAL_ANSWER',
          payload: { answerIndex: index }
        })
      })
      setAllAnswersRevealed(true)
      setAllAnswersFound(false)
    }
  }

  const resetTurnState = () => {
    setTimeLeft(state.timePerTurn)
    setShowPlayButton(true)
    setIsTimerRunning(false)
    setWrongAnswers(0)
    setHasStartedOnce(false)
    setUserAnswer('')
    setShowTransitionMessage(false)
    setAllAnswersRevealed(false)
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

      const updatedAnswers = [...state.currentQuestion.answers]
      updatedAnswers[state.currentQuestion.answers.indexOf(answer)].isRevealed = true
      if (updatedAnswers.every(a => a.isRevealed)) {
        setAllAnswersFound(true)
        setAllAnswersRevealed(true)
        setIsTimerRunning(false)
      }
    } else {
      setWrongAnswers(prev => {
        const newCount = prev + 1
        if (newCount >= 3 && state.currentQuestion) {
          // Reveal all answers when 3 wrong answers
          state.currentQuestion.answers.forEach((_, index) => {
            dispatch({
              type: 'REVEAL_ANSWER',
              payload: { answerIndex: index }
            })
          })
          endTurn()
          return 0
        }
        return newCount
      })
      setUserAnswer('')
    }
  }

  const handleNextRound = () => {
    // Switch to the other team and get new question
    const nextTeamIndex = (state.currentTeamIndex + 1) % state.teams.length
    dispatch({ 
      type: 'SET_CURRENT_TEAM', 
      payload: { teamIndex: nextTeamIndex } 
    })
    dispatch({ type: 'NEXT_QUESTION' })
    resetTurnState()
  }

  const handlePass = () => {
    // Only change the question without resetting other states
    dispatch({ type: 'NEXT_QUESTION' })
    // Reset only the answer input
    setUserAnswer('')
  }

  if (!state.currentQuestion) return null

  const currentTeam = state.teams[state.currentTeamIndex]
  const nextTeam = state.teams[(state.currentTeamIndex + 1) % state.teams.length]
  const shouldShowQuestion = isTimerRunning || (hasStartedOnce && state.currentQuestion.answers.some(a => a.isRevealed))

  return (
    <div className="w-full max-w-6xl space-y-6">
      {/* Score Board */}
      <div className="flex justify-between px-8">
        {state.teams.map((team, index) => (
          <div
            key={team.id}
            className={`text-2xl font-bold p-4 rounded-lg ${
              state.currentTeamIndex === index
                ? 'bg-game-gold text-black'
                : 'bg-blue-900 text-white'
            }`}
          >
            {team.name}: {team.score}
          </div>
        ))}
      </div>

      {/* Game Board */}
      <div className="relative rounded-lg bg-blue-900 p-8 text-white border-4 border-game-gold">
        {/* Question Display */}
        <div className="mb-8 text-center text-3xl font-bold bg-black/50 p-4 rounded-lg">
          {shouldShowQuestion ? state.currentQuestion.text : "Get Ready!"}
        </div>

        {shouldShowQuestion ? (
          <>
            {/* Answers Board - Updated to 2 columns */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {state.currentQuestion.answers.map((answer: Answer, index: number) => (
                <div
                  key={index}
                  className={`flex justify-between items-center rounded-md p-4 text-xl font-bold transition-all duration-300 ${
                    answer.isRevealed 
                      ? 'bg-game-gold text-black' 
                      : showTransitionMessage 
                        ? 'bg-game-red text-white'
                        : 'bg-blue-800 text-white border-2 border-game-gold'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className="w-8 h-8 flex items-center justify-center bg-black rounded-full text-white">
                      {index + 1}
                    </span>
                    <span className="truncate">{answer.isRevealed || showTransitionMessage ? answer.text : ''}</span>
                  </div>
                  <span className="bg-black/50 px-4 py-2 rounded-lg min-w-[60px] text-center">
                    {answer.isRevealed || showTransitionMessage ? answer.points : ''}
                  </span>
                </div>
              ))}
            </div>

            {/* Answer Input and Pass Button */}
            {allAnswersRevealed ? (
              <div className="mt-6 flex flex-col items-center gap-4">
                {allAnswersFound ? (
                  <div className="text-center space-y-2">
                    <div className="text-4xl font-bold text-game-gold animate-bounce">
                      🎉 Congratulations! 🎉
                    </div>
                    <div className="text-2xl text-white">
                      Perfect Round! All answers found!
                    </div>
                  </div>
                ) : (
                  <div className="text-xl text-white">
                    Round Complete
                  </div>
                )}
                <button
                  onClick={handleNextRound}
                  className={`px-8 py-3 rounded-md text-xl font-bold ${
                    allAnswersFound 
                      ? 'bg-game-gold hover:bg-yellow-500 text-black animate-pulse'
                      : 'bg-game-blue hover:bg-blue-700 text-white'
                  }`}
                >
                  Next Round
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <input
                    type="text"
                    value={userAnswer}
                    onChange={(e) => setUserAnswer(e.target.value)}
                    className="flex-1 rounded-md border-2 border-game-gold p-4 text-black text-xl"
                    placeholder={`${currentTeam.name}'s answer...`}
                    onKeyPress={(e) => e.key === 'Enter' && handleAnswerSubmit()}
                    disabled={!isTimerRunning}
                  />
                  <button
                    onClick={handleAnswerSubmit}
                    className={`rounded-md px-6 py-4 text-xl font-bold ${
                      isTimerRunning
                        ? 'bg-game-gold text-black hover:bg-yellow-500'
                        : 'bg-gray-500 cursor-not-allowed'
                    }`}
                    disabled={!isTimerRunning}
                  >
                    Submit
                  </button>
                </div>
                {/* Pass Button */}
                <div className="flex justify-center">
                  <button
                    onClick={handlePass}
                    className="bg-game-red hover:bg-red-700 px-6 py-2 rounded-md text-white font-bold"
                  >
                    Pass
                  </button>
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="text-center text-3xl font-bold py-12">
            {showTransitionMessage ? (
              <div className="space-y-4">
                <div className="text-game-red text-4xl">
                  {wrongAnswers >= 3 ? 'XXX Three Strikes! XXX' : 'Time\'s Up!'}
                </div>
                <div className="text-game-gold text-2xl">All Answers Revealed!</div>
                <div className="text-white mt-4 text-xl">{nextTeam.name}'s Turn Next...</div>
              </div>
            ) : (
              <div className="text-4xl text-game-gold">Get Ready {currentTeam.name}!</div>
            )}
          </div>
        )}

        {/* Timer and Controls */}
        <div className="mt-8 text-center space-y-4">
          <div className="text-2xl">
            {showPlayButton && !showTransitionMessage && !allAnswersRevealed ? (
              <button
                onClick={handleStartTimer}
                className="bg-game-gold hover:bg-yellow-500 px-8 py-3 rounded-md text-black font-bold"
              >
                Start Turn
              </button>
            ) : (
              isTimerRunning && (
                <div className="text-2xl font-bold bg-black/50 inline-block px-6 py-2 rounded-lg">
                  Time Left: {timeLeft}s
                </div>
              )
            )}
          </div>
          {hasStartedOnce && !showTransitionMessage && !allAnswersRevealed && (
            <div className="text-xl font-bold">
              <span className="text-game-red">X</span> Wrong Answers: {wrongAnswers}/3
            </div>
          )}
        </div>

        {/* Current Team Indicator */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-game-gold text-black px-6 py-2 rounded-full font-bold text-xl">
          {currentTeam.name}'s Turn
        </div>
      </div>
    </div>
  )
} 