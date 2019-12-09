import EthService from './components/eth/eth.service';
import optimizedImages from 'next-optimized-images';
import withPlugins from 'next-compose-plugins';

const config = {
  exportTrailingSlash: true,
  exportPathMap: async function() {
    const eth = EthService.getInstance();
    await eth.init();
    const transactions = await eth.votingCenter.allPolls();
    const startIndex = transactions['0'].indexOf('0xf5c57613806020a478e68df7b1ea186ef9206087');

    let pages = {};
    for (let i = startIndex; i < transactions['0'].length; i++) {
      const post = transactions['0'][i];
      pages = Object.assign(pages, {
        [`/proposal/${post}`]: {
          page: '/proposal/[id]',
          query: { id: post }
        }
      });
    }

    return Object.assign({}, pages, {
      '/': { page: '/' },
      '/network': { page: '/network' },
      '/about': { page: '/about' },
      '/governance': { page: '/governance' },
    });
  },
};

module.exports = withPlugins([
  optimizedImages, {
    inlineImageLimit: 256
  }],
  config,
);
