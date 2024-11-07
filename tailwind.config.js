/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'game-blue': '#1d4ed8',
        'game-red': '#dc2626',
        'game-gold': '#fbbf24',
        'game-purple': '#7c3aed',
        'game-green': '#059669',
        'board-bg': '#1e293b',
      },
      animation: {
        'flip': 'flip 0.6s ease-in-out',
        'bounce-once': 'bounce 0.5s ease-in-out 1',
        'slide-in': 'slideIn 0.3s ease-out',
      },
      keyframes: {
        flip: {
          '0%': { transform: 'rotateX(0deg)' },
          '100%': { transform: 'rotateX(180deg)' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}
