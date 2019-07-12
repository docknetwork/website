const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
const isProd = (process.env.NODE_ENV || 'production') === 'production';

module.exports = withPlugins([
  optimizedImages, {
    inlineImageLimit: 256
  }], {
    exportPathMap: function() {
      return {
        '/': { page: '/' }
      };
    },
    assetPrefix: isProd ? '/website' : '', // TODO: remove when we use custom domain
  },
);
