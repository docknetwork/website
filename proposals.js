import EthService from './components/eth/eth.service';
import fs from 'fs';

async function load() {
  const eth = EthService.getInstance();
  await eth.init();
  const transactions = await eth.votingCenter.allPolls();
  const startIndex = transactions['0'].indexOf('0xf5c57613806020a478e68df7b1ea186ef9206087');

  let result = [];
  for (let i = startIndex; i < transactions['0'].length; i++) {
    const transaction = transactions['0'][i];
    const proposal = await eth.loadProposal(transaction);
    if (proposal) {
      result.push(proposal);
    }
  }

  fs.writeFile('./out/proposals.json', JSON.stringify(result, true, 2), error => {
    if (error) {
      return console.log(err);
    }
  });
}

load();
