const path = require('path');
module.exports = {
  style: {
    postcssOptions: {
      plugins: [require('tailwindcss'), require('autoprefixer')],
    },
  },
  webpack: {
    alias: {
      '@': path.resolve(__dirname, './src/'),
    },
  },
};
