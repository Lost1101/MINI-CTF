/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/**/*.html"],
  theme: {
    extend: {
      colors: {
        indigo : '#2A2F4F',
      },
      fontFamily : {
        DMserif : ['DM Serif Display', 'serif'],
        worksans : ['Work Sans', 'sans-serif'],
      },
      animation :{
        'animStar' : 'animStar 50s linear infinite',
        'bounce' : 'bounce 2s ease infinite'
      },
      keyframes : {
        animStar : {
          'from': {transform: 'translateY(0px)'},
          'to': {transform: 'translateY(-2000px)'},
      },
        bounce : {
            '0%, 20%, 50%, 80%, 100%' : {transform: 'translateY(0)'},
            '40%' : {transform: 'translateY(-30px)'},
            '60%' : {transform: 'translateY(-15px)'}
        }
    },
  },
  plugins: [],
}
}
