/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors:{
      primary:'#5f6FFF',
         secondary: 'oklch(30% 0.04 200)',      // example fallback
         highlight: 'oklch(90% 0.1 40)',        // example fallback
         textColor: 'oklch(55.1% 0.027 264.364)'
    },
    gridTemplateColumns:{
      'auto':'repeat(auto-fill, minmax(200px,1fr))'
    }, 

    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
      body: ['Open Sans', 'sans-serif'],
      cursive: ['Parisienne', 'cursive'],
      sriracha: ['Sriracha', 'cursive'],
    },
  },
  plugins: [],
}
}
