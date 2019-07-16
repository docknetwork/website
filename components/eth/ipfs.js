import IPFS from 'ipfs-mini';

const host = 'ipfs.dock.io';

class IPFSWrapper {
  constructor() {
    this.cache = {};
  }

  initialize() {
    this.initialized = true;
    this.ipfs = new IPFS({
      host,
      port: 443,
      protocol: 'https',
    });
  }

  addJSON(data) {
    if (!this.initialized) {
      this.initialize();
    }
    return new Promise((resolve, reject) => {
      this.ipfs.addJSON(data, (error, multihash) => {
        if (error) {
          reject(error);
        } else {
          resolve(multihash);
        }
      });
    });
  }

  getJSON(address) {
    if (!this.initialized) {
      this.initialize();
    }
    return new Promise((resolve, reject) => {
      if (this.cache[address]) {
        return resolve(this.cache[address]);
      } else {
        this.ipfs.catJSON(address, (error, result) => {
          this.cache[address] = result;
          if (error) {
            reject(error);
          } else {
            resolve(result);
          }
        });
      }
    });
  }
}

export default new IPFSWrapper();
