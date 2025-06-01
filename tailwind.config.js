module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#6C3B9F',
        secondary: '#D1C4E9',
        accent: '#00C48C',
        darkbg: '#1E1E2F',
        textmain: '#333333',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
