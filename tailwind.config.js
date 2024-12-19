/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ["./src/**/*.{html,jsx}"],
  safelist: ["bg-dark"],
  theme: {
    extend: {
      colors: {
        dark: "#141414",
      },
    },
  },
  plugins: [],
};
