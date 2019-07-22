import EthService from './eth.service';

export default class Contract {
  constructor(abi, bin) {
    this.abi = abi;
    this.bin = bin;
  }

  at(hash, options = {}) {
    return this.get(options).at(hash);
  }

  new(options = {}) {
    return new Promise((resolve, reject) => {
      const instance = this.get(options);
      const eth = EthService.getInstance();
      instance.new(options, (error, hash) => {
        if (error) {
          return reject(error);
        }
        eth
          .getTransactionReceipt(hash)
          .then((receipt) => {
            resolve(instance.at(receipt.contractAddress));
          })
          .catch((error) => {
            reject(error);
          });
      });
    });
  }

  get(options = {}) {
    if (!this.instance) {
      const eth = EthService.getInstance();
      this.instance = eth.contract(this.abi, this.bin, options);
    }
    return this.instance;
  }
}
