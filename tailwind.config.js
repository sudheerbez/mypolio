/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#070D26',
          900: '#0B1437',
          800: '#111C48',
          700: '#1A2760',
        },
        ink: '#E6EAF5',
        muted: '#94A3C7',
        teal: '#2DD4BF',
        violet: '#8B5CF6',
      },
      fontFamily: {
        display: ['Sora', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        site: '1200px',
      },
      boxShadow: {
        'glow-teal': '0 0 40px -8px rgba(45, 212, 191, 0.55)',
        'glow-violet': '0 0 40px -8px rgba(139, 92, 246, 0.55)',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        marquee: 'marquee 45s linear infinite',
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
