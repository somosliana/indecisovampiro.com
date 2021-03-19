const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./**/*.html"],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        sans: ["Barlow Condensed", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
