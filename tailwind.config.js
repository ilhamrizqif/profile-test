/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      primary:  ['Montserrat']
    },
    colors:{
      themeColor:{
        body :'#F8F8F8',
        white:'#FFFFFF'
      },
      rc :{
        DEFAULT :'#D2000F',
      },
      cb:{
        100:'#457B9D',
        60:'#8FAFC4',
        40:'#8FAFC4',
        20:'#DAE5EB'
      },
      sc:{
        100:'#1F2855',
        40:'#A6A9BC'
      },
      vg:{
        100:'#0093AD'
      },
      pb:{
        40:'#DCF0F1'
      }
      },

    extend: {
      dropShadow:{
        sidebar : "0px 4px 15px 0px rgba(0, 0, 0, 0.1)",
        active : "0px 0px 10px 0px #D2000F;"


      }
    },
  },
  plugins: [],
}