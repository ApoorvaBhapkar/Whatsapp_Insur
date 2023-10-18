/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js"
  ],
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        'logo-color-dark-green': '#15494D',
        'logo-color-light-green': '#2CB179',
        'logo-color-dark-blue': '#1A212A',
        'grey': '#545454',
        'white': '#FFFFFF',
        'blue': '#1C97DD',
      },
      fontFamily: {
        cardo: 'Cardo, sans sarif',
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: ["light", "dark",],
  },

}
