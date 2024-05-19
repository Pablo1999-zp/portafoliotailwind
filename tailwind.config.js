/** @type {import('tailwindcss').Config} */
const dafaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#0f172a',
      },
      fontFamily:{
        roboto:['Roboto', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}

