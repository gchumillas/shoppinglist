const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // TODO: (all) text-primary is not being applied
        'primary': colors.gray[800],
        'primary-light': colors.white
      },
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
