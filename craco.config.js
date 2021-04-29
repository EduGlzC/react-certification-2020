// craco.config.js
const autoPref = require('autoprefixer');
const tailWind = require('tailwindcss');

module.exports = {
  style: {
    postcss: {
      plugins: [tailWind, autoPref],
    },
  },
};
