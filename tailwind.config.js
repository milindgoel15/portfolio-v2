module.exports = {
  mode: 'jit',
  content: [
    "./*.html"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('postcss-import'),
    require('postcss-nesting'),
    require('tailwindcss'),
    require('autoprefixer'),
    require('postcss'),
    require('postcss-scss')
  ],
}
