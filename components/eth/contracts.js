import votingCenterABI from './contracts/voteDock.sol:VotingCenter.abi';
import votingCenterBIN from './contracts/voteDock.sol:VotingCenter.bin';

import pollABI from './contracts/voteDock.sol:Poll.abi';
import pollBIN from './contracts/voteDock.sol:Poll.bin';

import dockTokenABI from './contracts/voteDock.sol:DockToken.abi';
import dockTokenBIN from './contracts/voteDock.sol:DockToken.bin';

import Contract from './contract';

export const VotingCenter = new Contract(votingCenterABI, votingCenterBIN);
export const Poll = new Contract(pollABI, pollBIN);
export const DockToken = new Contract(dockTokenABI, dockTokenBIN);
