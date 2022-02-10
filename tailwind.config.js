module.exports = {
  mode: 'jit',
  content: [
    "./*.{html,js}"
  ],
  theme: {
    extend: {
      transitionDuration: {
        '350': '350ms',
      },
      margin: {
        '110': '30rem',
        '128': '40rem',
      }
    },
  },
  plugins: [],
}