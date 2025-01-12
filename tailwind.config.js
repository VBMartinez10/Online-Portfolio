/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{html,vue,js}',
  ],
  theme: {
    extend: {
      fontFamily:{
        Jersey: ['"Jersey 15"', 'serif'],
        Poppins: ['Poppins', 'serif'],
        Electro: ['Electrolize', 'serif'],
        Bruno: ['"Bruno Ace SC"', 'serif'],
        Tourney: ['Tourney', 'serif'],
      },
    },
  },
  plugins: [],
}

