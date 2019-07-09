const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
const isProd = (process.env.NODE_ENV || 'production') === 'production';

module.exports = withPlugins(
  [
    optimizedImages
  ], {
    exportPathMap: function() {
      return {
        '/': { page: '/' }
      };
    },
    assetPrefix: isProd ? '/website' : '',
  },
);
