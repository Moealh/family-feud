'use client'

import { GameBoard } from '../components/GameBoard'
import { TeamSetup } from '../components/TeamSetup'
import { GameProvider, useGame } from '../context/GameContext'

function GameContent() {
  const { state } = useGame()

  return (
    <main className="min-h-screen flex flex-col items-center justify-between p-8 bg-[#172352]">
      <h1 className="mb-8 text-4xl font-bold text-game-gold">Family Feud</h1>
      {state.gameState === 'setup' ? <TeamSetup /> : <GameBoard />}
    </main>
  )
}

export default function Home() {
  return (
    <div className="bg-[#172352] min-h-screen">
      <GameProvider>
        <GameContent />
      </GameProvider>
    </div>
  )
}
