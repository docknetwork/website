import React, {useState} from 'react';
import fetch from 'isomorphic-unfetch';
import Link from 'next/link';
import Head from 'next/head';
import styled from 'styled-components';
import media from '../helpers/media';

import Page from '../layouts/main';
import GovernanceHero from '../components/sections/governance-hero';
import { UnderlineLink } from '../components/underline-link';
import InquiryModal from '../components/modals/inquiry-modal';

import {
  HeaderMarker,
  Wrapper,
  SectionTitle,
  SectionSubtitle,
  Section,
  SectionColumn
} from '../components/sections';


import {VotingCenter, Poll} from '../components/eth/contracts';
import EthWrapper from '../components/eth/eth.service';
import HexUtils from '../components/eth/hex-utils';
import IPFS from '../components/eth/ipfs';

const pageDesc = 'Dock believes the community should help guide the direction of the project and help with governance. An overview of governance and the Dock token.';
const pageTitle = 'Dock | Governance and Voting';

// const votingCenterAddress = '0xdc71eF432328E36cAb08382bDa2597192DC0c7Db'; // Rinkeby Test Net
const votingCenterAddress = '0x712ed83fAAB76499FA1D3FB51F870FAed61d3C51'; // Main Ethereum Net


import timeLeftSVG from '../assets/images/icons/time-left.svg';

const TokensLinkWrapper = styled.div`
  margin: 5px 0 139px 0;
`;

const ProposalsSection = styled.div`
  padding: 80px 20px 100px 20px;
  background-color: rgb(246, 246, 249);

  @media ${media.medium} {
    padding: 80px 0 220px 0;
  }
`;

const ProposalsSectionTitle = styled.h2`
  margin: 0 0 40px 0;
  font-family: 'Open Sans';
  font-size: 24px;
  font-weight: normal;
  color: rgb(32, 33, 46);
`;

const CustomWrapper = styled(Wrapper)`
  flex-direction: column;
`;

const ProposalsList = styled.div`
  display: flex;
  flex-direction: column;
`;

const Proposal = styled.a`
  border-radius: 3px;
  box-shadow: 0 19px 56px -20px rgba(0, 0, 0, 0.2);
  background-color: rgb(255, 255, 255);
  margin: 0 0 30px 0;
  padding: 34px 40px 48px 40px;
  text-decoration: none;
  display: flex;
  flex-direction: column;
`;

const ProposalTitle = styled.h2`
  font-family: 'Open Sans';
  font-size: 22px;
  font-weight: bold;
  line-height: 1.55;
  color: rgb(32, 33, 46);
  margin: 0 0 20px 0;
`;

const ProposalDescription = styled.p`
  font-family: 'Open Sans';
  font-size: 18px;
  line-height: 1.56;
  color: rgb(31, 31, 44);
`;

const ProposalFooter = styled.div`
  margin: 40px 0 0 0;
  display: flex;
`;

const ProposalDockStacked = styled.span`
  font-family: 'Open Sans';
  line-height: 1.56;
  letter-spacing: normal;
  color: rgb(72, 72, 88);
  font-size: 18px;
`;

const ProposalDate = styled.span`
  font-family: 'Open Sans';
  font-size: 18px;
  line-height: 1.56;
  text-align: right;
  color: rgb(255, 87, 109);
  margin-left: auto;
  display: flex;
  align-items: center;

  > img {
    margin-right: 8px;
  }
`;



const Governance = ({from, proposals}) => {
  console.log('proposals', proposals.length, proposals)
  console.log('from', from)
  return (
    <Page>
      <Head>
        <title>{pageTitle}</title>
        <meta name="og:title" content={pageTitle} />
        <meta name="description" content={pageDesc} />
        <meta name="og:description" content={pageDesc} />
      </Head>
      <GovernanceHero />
      <SectionColumn>
        <SectionTitle>
          <HeaderMarker />
          Voting center
        </SectionTitle>
        <SectionSubtitle>
          We believe that our community should guide the direction and development of Dock.
          This voting center is setup to facilitate community-wide voting proposals.
          We will regularly post polls here about decisions we are making at Dock and ask you to vote on your preferred option.
          <br /><br />
          Note: DOCK tokens are required to vote
        </SectionSubtitle>
        <TokensLinkWrapper>
          <UnderlineLink
            href="https://www.binance.com/en/trade/DOCK_BTC"
            target="_blank"
            rel="noopener noreferrer">
            Get DOCK tokens
          </UnderlineLink>
        </TokensLinkWrapper>
      </SectionColumn>

      <ProposalsSection>
        <CustomWrapper>
          <ProposalsSectionTitle>
            Open Proposals
          </ProposalsSectionTitle>

          <ProposalsList>
            {proposals.map(proposal => (
              <Link
                key={proposal.txId}
                href={'/proposal/' + proposal.txId}
                passHref>
                <Proposal>
                  <ProposalTitle>
                    {proposal.title}
                  </ProposalTitle>
                  <ProposalDescription>
                    {proposal.description}
                  </ProposalDescription>

                  <ProposalFooter>
                    <ProposalDockStacked>
                      123,000 DOCK Voted
                    </ProposalDockStacked>
                    <ProposalDate>
                      <img src={timeLeftSVG}/>
                      12 days left
                    </ProposalDate>
                  </ProposalFooter>
                </Proposal>
              </Link>
            ))}
          </ProposalsList>
        </CustomWrapper>
      </ProposalsSection>
    </Page>
  );
};

import moment from 'moment';

Governance.getInitialProps = async function() {
  const eth = new EthWrapper();
  const from = await eth.getAccount();
  const contractParams = {
    gas: 100000,
  };

  if (from) {
    contractParams.from = from;
  }

  const votingCenter = VotingCenter.at(
    votingCenterAddress,
    contractParams
  );

  const proposals = [];
  const transactions = await votingCenter.allPolls();

  // Hack for Dock: dont proposals before DGP-1
  const startIndex = transactions['0'].indexOf('0xf5c57613806020a478e68df7b1ea186ef9206087');
  for (let i = startIndex; i < transactions['0'].length; i++) {
    const transaction = transactions['0'][i];
    console.log('transaction', transaction);
    const contract = Poll.at(transaction, contractParams);
    try {
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
        proposals.push(proposal);
      }
    } catch (e) {
      // noop
    }
  }

  return {
    proposals,
    from,
  };
};

export default Governance;
