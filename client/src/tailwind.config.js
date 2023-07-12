module.exports = {
  purge: [],
  darkMode: false,
  theme: {
    extend: {
      textShadow: {
        'default': '0 2px 5px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  variants: {},
  plugins: [
    require('daisyui'),
  ],
};