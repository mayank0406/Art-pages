/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: { minWidth: {
      '300': '20rem',
      
    },
    width : {
      '720' : '45rem',
      '960' : '60rem'
    }
    
  },
  },
  plugins: [],
}