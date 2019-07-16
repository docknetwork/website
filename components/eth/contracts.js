import votingCenterABI from './contracts/voteDock.sol:VotingCenter.json';
import votingCenterBIN from './contracts/voteDock.sol:VotingCenter.bin.js';

import pollABI from './contracts/voteDock.sol:Poll.json';
import pollBIN from './contracts/voteDock.sol:Poll.bin.js';

import dockTokenABI from './contracts/voteDock.sol:DockToken.json';
import dockTokenBIN from './contracts/voteDock.sol:DockToken.bin.js';

import Contract from './contract';

export const VotingCenter = new Contract(votingCenterABI, votingCenterBIN);
export const Poll = new Contract(pollABI, pollBIN);
export const DockToken = new Contract(dockTokenABI, dockTokenBIN);
