module.exports = {
  mode: 'jit',
  content: [
    "./*.{html,js}"
  ],
  theme: {
    extend: {
      transitionDuration: {
        '350': '350ms',
      }
    },
  },
  plugins: [],
}