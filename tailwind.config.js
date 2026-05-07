/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Syne"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        body: ['"DM Sans"', 'sans-serif'],
      },
      colors: {
        accent: '#00ff87',
        'accent-dim': '#00cc6a',
        surface: '#0d0d0d',
        'surface-2': '#141414',
        'surface-3': '#1a1a1a',
        border: '#252525',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0,255,135,0.1)' },
          '50%': { boxShadow: '0 0 40px rgba(0,255,135,0.3)' },
        },
      },
    },
  },
  plugins: [],
}
