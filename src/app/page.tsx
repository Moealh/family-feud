'use client'

import { GameBoard } from '../components/GameBoard'
import { TeamSetup } from '../components/TeamSetup'
import { GameProvider, useGame } from '../context/GameContext'

function GameContent() {
  const { state } = useGame()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8">
      <h1 className="mb-8 text-4xl font-bold text-game-blue">Family Feud</h1>
      {state.gameState === 'setup' ? <TeamSetup /> : <GameBoard />}
    </main>
  )
}

export default function Home() {
  return (
    <GameProvider>
      <GameContent />
    </GameProvider>
  )
}
