/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx,css}",],
  theme: {
    screens:{
      'phone':'260px',
      'tablet': '640px',
      'laptop':'1024px',
      'desktop':'1280px'
    },
    fontFamily:{
      primary:'Roboto'
    },
    extend: {
      colors: {
        hero : '#E8E8E8',
        line : '#B5B5B5',
        hand: 'linear-gradient(122deg, #FF9F43 1.62%, #FECA57 100%)',
        txtHover: '#44719D'
      },
      backgroundImage: {
        site: "./src/assets/site.png",
      },
    },
  },
  plugins: [],
}

