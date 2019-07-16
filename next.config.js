const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

module.exports = withPlugins([
  optimizedImages, {
    inlineImageLimit: 256
  }], {
    async exportPathMap () {
      const postList = ['0xf5c57613806020a478e68df7b1ea186ef9206087'];

      const pages = postList.reduce(
        (pages, post) =>
          Object.assign({}, pages, {
            [`/proposal/${post}`]: {
              page: '/proposal',
              query: { id: post }
            }
          }),
        {}
      );

      return Object.assign({}, pages, {
        '/': { page: '/' },
        '/network': { page: '/network' },
        '/about': { page: '/about' },
        '/governance': { page: '/governance' },
      });
    },
    webpack: (config, {}) => {
      config.module.rules.push(
        {
          test: /.abi$/,
          use: [
            {
              loader: 'json-loader',
            },
          ],
        },
        {
          test: /.bin$/,
          use: [
            {
              loader: 'string-loader',
            },
          ],
        },
      );

      return config;
    }
  },
);
