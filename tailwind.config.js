module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: (theme) => ({
        ...theme('colors'),
        primary: '#eae2b7',
        secondary: '#fcbf49',
        tertiary: '#f77f00',
        fourth: '#d62828',
        fifth: '#003049',
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
