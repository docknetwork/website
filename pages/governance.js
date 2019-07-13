import React, {useState} from 'react';
import Link from 'next/link';
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

const Governance = () => {
  return (
    <Page>
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
          Coming soon
        </CustomWrapper>
      </ProposalsSection>
    </Page>
  );
}

export default Governance;
