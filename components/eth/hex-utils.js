import { fromHexString, toB58String, fromB58String } from 'multihashes';
import { stripHexPrefix, bufferToHex } from 'ethereumjs-util';

class HexUtils {
  toHex(string) {
    return bufferToHex(fromB58String(string));
  }

  fromHex(string) {
    return toB58String(fromHexString(stripHexPrefix(string)));
  }
}

export default new HexUtils();
