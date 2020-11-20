module.exports = {
  purge: ['./**/*.html'],
  darkMode: false,
  theme: {
    aspectRatio: {
      'none': 0,
      'square': [1, 1],
      '16/9': [16, 9],
      '4/3': [4, 3],
      '21/9': [21, 9],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-debug-screens'),
    require("tailwindcss-responsive-embed"),
    require("tailwindcss-aspect-ratio"),
  ]
}
