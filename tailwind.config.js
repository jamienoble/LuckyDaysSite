/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        primary: '#34503d',
        cream: '#fffbf3',
        dark: '#000000',
        warmgray: '#a37e58'
      }
    }
  },
  plugins: []
};