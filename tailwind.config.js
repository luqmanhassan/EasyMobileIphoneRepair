module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        'yellow-300': '#fffb00',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
