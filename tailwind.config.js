/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.{html,js}", 
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'honk': ["Honk", 'sans-serif'],
      }
    },
  },
  plugins: [],
}

