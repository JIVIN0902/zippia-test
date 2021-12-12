module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "nav-dark": "#2c2c2c",
        "btn-blue": "#3174ee"
      },
      fontSize: {
        "para": "14px",
      },
      borderWidth: {
        "min": "0.2px",
      }
    },
  },
  plugins: [],
}
