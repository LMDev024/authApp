/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}",],
  theme: {
    extend: {
      dropShadow: {
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.5)',
        '4xl': [
          '0 35px 35px rgba(0, 0, 0, 0.5)',
          '0 45px 65px rgba(0, 0, 0, 0.3)'
        ]
      }
    },

  },
  plugins: [],
}

