import Eth from 'ethjs';
import {DockToken, VotingCenter, Poll} from './contracts';
import HexUtils from './hex-utils';
import IPFS from './ipfs';

// const rpcURL = 'https://rinkeby.infura.io/'; // Rinkeby Test Net
const rpcURL = 'https://mainnet.infura.io/Ij97ilgQwoAhbHk38cyq'; // Main Ethereum Net

// const votingCenterAddress = '0xdc71eF432328E36cAb08382bDa2597192DC0c7Db'; // Rinkeby Test Net
const votingCenterAddress = '0x712ed83fAAB76499FA1D3FB51F870FAed61d3C51'; // Main Ethereum Net

// const dockTokenAddress = '0x2cfb8ee40662e19da372f4969d22327a99fda8f8'; // Rinkeby Test Net
const dockTokenAddress = '0xe5dada80aa6477e85d09747f2842f7993d0df71c'; // Main Ethereum Net

const DOCK_PASS_AMOUNT = 250000;

let instance;

import moment from 'moment';

export default class EthWrapper {
  constructor() {
    const provider = this.hasMetaMask()
      ? window.web3.currentProvider
      : new Eth.HttpProvider(rpcURL);
    this.eth = new Eth(provider);
    this.getAccounts = this.eth.accounts;
    this.contract = this.eth.contract;
  }

  async init() {
    const from = await this.getAccount();
    this.contractParams = {
      gas: 100000,
    };

    if (from) {
      this.contractParams.from = from;
    }

    if (!this.votingCenter) {
      this.votingCenter = VotingCenter.at(
        votingCenterAddress,
        this.contractParams
      );
    }
  }

  async loadProposal(transaction) {
    const contract = Poll.at(transaction, this.contractParams);
    const startTimeData = await contract.startTime();
    const startTime = moment.unix(startTimeData[0].toNumber());
    const isOpen = moment().diff(startTime) > 0;
    if (isOpen) {
      const endTimeData = await contract.endTime();
      const endTime = moment.unix(endTimeData[0].toNumber());
      const isClosed = moment().diff(endTime) > 0;
      const ipfsHashData = await contract.pollDataMultihash();
      const ipfsHash = HexUtils.fromHex(ipfsHashData[0]);
      const proposal = await IPFS.getJSON(ipfsHash);
      proposal.startTime = startTime;
      proposal.endTime = endTime;
      proposal.isClosed = isClosed;
      proposal.ipfsHash = ipfsHash;
      proposal.txId = transaction;
      proposal.dockStaked = [];
      proposal.totalDockStaked = 0;
      proposal.highestStakeIndex = -1;
      let highestStake = 0;
      for (let i = 0; i < proposal.options.length; i++) {
        const stakeVal = await contract.totalVotes(i + 1);
        console.log('stakeVal', stakeVal[0])
        const stake = Math.floor(Eth.fromWei(stakeVal[0], 'ether'));
        if (stake > highestStake) {
          highestStake = stake;
          proposal.highestStakeIndex = i;
        }
        proposal.totalDockStaked += stake;
        proposal.dockStaked.push(stake);
      }

      proposal.passed = proposal.isClosed && proposal.totalDockStaked >= DOCK_PASS_AMOUNT;

      return proposal;
    }
  }

  hasMetaMask() {
    return typeof window !== 'undefined' ? (
      typeof window.web3 !== 'undefined' &&
      typeof window.web3.currentProvider !== 'undefined'
    ) : false;
  }

  getNetworkID() {
    return new Promise((resolve, reject) => {
      window.web3.version.getNetwork((error, network) => {
        if (error) {
          reject(error);
        } else {
          resolve(network);
        }
      });
    });
  }

  getAccount() {
    if (typeof window === 'undefined') {
      return null;
    }
    return this.getAccounts().then(accounts => {
      this.account = accounts.length ? accounts[0] : null;
      return this.account;
    });
  }
  fromWei(amount, unit = 'ether') {
    return Eth.fromWei(amount, unit);
  }

  getTransactionReceipt(hash) {
    return new Promise((resolve, reject) => {
      const receiptInterval = setInterval(() => {
        this.eth
          .getTransactionReceipt(hash)
          .then(receipt => {
            if (receipt) {
              clearInterval(receiptInterval);
              resolve(receipt);
            }
          })
          .catch(error => reject(error));
      }, 1000);
    });
  }

  getTokens(account) {
    if (!this.dockToken) {
      this.dockToken = DockToken.at(dockTokenAddress, {
        from: account,
        gas: 100000
      });
    }

    return this.dockToken.balanceOf(account)
      .then(result => {
        return this.fromWei(result[0], 'ether');
      });
  }

  getBalance(account) {
    return new Promise((resolve, reject) => {
      if (!account) {
        return reject();
      }
      this.eth.getBalance(account, (balanceError, balance) => {
        if (balanceError) {
          reject(balanceError);
        } else {
          resolve(Eth.fromWei(balance, 'ether'));
        }
      });
    });
  }

  static getInstance() {
    if (!instance) {
      instance = new EthWrapper();
    }
    return instance;
  }
}
