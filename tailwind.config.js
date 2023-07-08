/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx,css}",],
  theme: {
    extend: {
      colors: {
        hero : '#E8E8E8',
        line : '#B5B5B5',
      },
    },
  },
  plugins: [],
}

