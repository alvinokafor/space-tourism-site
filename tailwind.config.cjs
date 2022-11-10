/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home-bg': "url('/src/assets/home/background-home-desktop.jpg')",
        'home-bg-mobile': "url('/src/assets/home/background-home-mobile.jpg')",
        'home-bg-tablet': "url('/src/assets/home/background-home-tablet.jpg')",
      },
      colors: {
        secondary: '#D0D6F9',
      },
      fontFamily: {
        'body': ['Barlow Condensed', 'sans-serif'],
        'title': ['Bellefair', 'serif'],
      },
    },
    fontSize: {
      sm: '0.875rem',
      base: '1rem',
      md: '1.75rem',
      lg: '1.25rem',
      xl: '2rem',
      '2xl': '3.5rem',
      '3xl': '5rem',
      '4xl': '6.25rem',
      '5xl': '9.375rem',
    },
    letterSpacing: {
      tightest: '-.075em',
      tighter: '-.05em',
      tight: '-.025em',
      normal: '0',
      wide: '.14em',
      wider: '.16em',
      widest: '.29em',
    }
  },
  plugins: [],
}
