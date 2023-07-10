/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx,css}",],
  theme: {
    fontFamily:{
      primary:'Roboto'
    },
    extend: {
      colors: {
        hero : '#E8E8E8',
        line : '#B5B5B5',
        hand: 'linear-gradient(122deg, #FF9F43 1.62%, #FECA57 100%)',
      },
      backgroundImage: {
        site: "./src/assets/site.png",
      },
    },
  },
  plugins: [],
}

