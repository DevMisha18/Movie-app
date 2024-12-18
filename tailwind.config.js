/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ["./src/**/*.{html,jsx}", "./*.{html}"],
  theme: {
    extend: {
      colors: {
        'dark': '#141414',
      }
    },
  },
  plugins: [],
}