/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: { g: '#16A34A', dg: '#14532D', mint: '#D1FAE5', bg: '#F8FAFC', ink: '#0F172A', mu: '#64748B', bd: '#E2E8F0' },
      fontFamily: { display: ['"Bricolage Grotesque"', 'Figtree', 'sans-serif'], sans: ['Figtree', 'system-ui', 'sans-serif'] },
      keyframes: { bob: { '50%': { transform: 'translateY(-10px)' } } },
      animation: { bob: 'bob 5s ease-in-out infinite' },
    },
  },
  plugins: [],
}
