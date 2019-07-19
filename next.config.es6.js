import EthService from './components/eth/eth.service';
import optimizedImages from 'next-optimized-images';
import withPlugins from 'next-compose-plugins';

const config = {
  exportPathMap: async function() {
    const eth = EthService.getInstance();
    await eth.init();
    const transactions = await eth.votingCenter.allPolls();
    const startIndex = transactions['0'].indexOf('0xf5c57613806020a478e68df7b1ea186ef9206087');
    const postList = transactions['0'].slice(startIndex);
    const pages = postList.reduce(
      (pages, post) =>
        Object.assign({}, pages, {
          [`/proposal/${post}`]: {
            page: '/proposal/[id]',
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
};

module.exports = withPlugins([
  optimizedImages, {
    inlineImageLimit: 256
  }],
  config,
);
