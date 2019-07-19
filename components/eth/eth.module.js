import EthService from './eth.service';
import TokenService from './token.service';

export default angular
  .module('dock-eth', [])
  .service('ethService', EthService)
  .service('tokenService', TokenService).name;
