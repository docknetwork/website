const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

module.exports = Object.assign(withPlugins([
  [optimizedImages, {}],
]), {
  exportPathMap: function() {
    return {
      '/': { page: '/' }
    };
  }
});
