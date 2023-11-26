/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Zen Maru Gothic','sans serif'],
        'mono': ['Zen Maru Gothic', 'sans-serif'],
      },
      spacing: {
        '3px': '60px',
        '4px': '80px',
        '5px': '100px',
      },
    },
  },
  plugins: [],
}

