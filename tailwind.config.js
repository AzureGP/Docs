/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    fontFamily: {
      'sanfrancisco': ["Sf pro display", "-apple-system", "sans-serif"]
    }
  },
  plugins: [
    require('tailwind-typewriter')({
      wordsets: {
        loading: {
            words: ['click to enter...'],
            delay: .5,
            writeSpeed: .05,
            eraseSpeed: 0,
            repeat: 0,
        }
    }
    })
  ]
}