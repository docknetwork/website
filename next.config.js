const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

module.exports = withPlugins([
  optimizedImages, {
    inlineImageLimit: 256
  }], {
    exportPathMap: function() {
      return {
        '/': { page: '/' },
        '/network': { page: '/network' },
        '/about': { page: '/about' },
      };
    },
  },
);
