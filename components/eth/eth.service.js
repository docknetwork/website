import Eth from 'ethjs';

// const rpcURL = 'https://rinkeby.infura.io/'; // Rinkeby Test Net
const rpcURL = 'https://mainnet.infura.io/Ij97ilgQwoAhbHk38cyq'; // Main Ethereum Net

let instance;

export default class EthWrapper {
  constructor() {
    const provider = this.hasMetaMask()
      ? window.web3.currentProvider
      : new Eth.HttpProvider(rpcURL);
    this.eth = new Eth(provider);
    this.getAccounts = this.eth.accounts;
    this.contract = this.eth.contract;

    instance = this;
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
    console.log('instance', instance)
    return instance;
  }
}
