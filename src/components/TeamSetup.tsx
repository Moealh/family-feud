'use client'

import { useState } from 'react'
import { useGame } from '../context/GameContext'
import { GameDifficulty } from '../types/game'

export function TeamSetup() {
  const { dispatch } = useGame()
  const [team1Name, setTeam1Name] = useState('')
  const [team2Name, setTeam2Name] = useState('')
  const [difficulty, setDifficulty] = useState<GameDifficulty>('easy')
  const [error, setError] = useState('')

  const handleStartGame = () => {
    setError('')
    
    if (!team1Name.trim() || !team2Name.trim()) {
      setError('Both team names are required')
      return
    }

    try {
      dispatch({
        type: 'START_GAME',
        payload: {
          teams: [
            { id: '1', name: team1Name.trim(), score: 0 },
            { id: '2', name: team2Name.trim(), score: 0 },
          ],
          difficulty,
        },
      })
      console.log('Game started with teams:', team1Name, team2Name) // Add logging
    } catch (err) {
      console.error('Error starting game:', err)
      setError('Failed to start game')
    }
  }

  return (
    <div className="w-full max-w-md space-y-6 rounded-lg bg-[#1e2b66] p-8 shadow-lg border-2 border-game-gold">
      <h2 className="text-2xl font-bold text-game-gold">Team Setup</h2>
      {error && (
        <div className="text-game-red text-sm font-medium">{error}</div>
      )}
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-white">
            Team 1 Name
          </label>
          <input
            type="text"
            value={team1Name}
            onChange={(e) => setTeam1Name(e.target.value)}
            className="mt-1 w-full rounded-md border-2 border-game-gold p-2 bg-[#172352] text-white"
            placeholder="Enter team 1 name"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-white">
            Team 2 Name
          </label>
          <input
            type="text"
            value={team2Name}
            onChange={(e) => setTeam2Name(e.target.value)}
            className="mt-1 w-full rounded-md border-2 border-game-gold p-2 bg-[#172352] text-white"
            placeholder="Enter team 2 name"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-white">
            Difficulty
          </label>
          <select
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value as GameDifficulty)}
            className="mt-1 w-full rounded-md border-2 border-game-gold p-2 bg-[#172352] text-white"
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>
        <button
          onClick={handleStartGame}
          disabled={!team1Name || !team2Name}
          className="w-full rounded-md bg-game-gold px-4 py-2 text-black font-bold hover:bg-yellow-500 disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          Start Game
        </button>
      </div>
    </div>
  )
} 