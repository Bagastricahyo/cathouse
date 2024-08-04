/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./dist/**/*.{html,js}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'quicksand': ['Quicksand', 'sans-serif'],
        'grotesk': ['Space Grotesk', 'sans-serif'],
        'playwrite': ['Playwrite DE Grund', 'cursive'],
        'poppins': ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}

