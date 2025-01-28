/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      screens:{
       'xs': {max:'540px'},
        'sm': {min:'320px',max:'640px'},
        // 'sm': {min:'540px',max:'640px'},
        'md': {min:'640px',max:'768px'},
        'tab': {min:'768px',max:'1024px'},
        'lg': {min:'1024px',max:'1280px'},
        'xl': {min:'1280px'},
      },
      
    },
  },
  plugins: [],
}

