import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import styled from 'styled-components';
import media from '../helpers/media';

import Page from '../layouts/main';
import NetworkHero from '../components/sections/network-hero';
import LitepaperSection from '../components/sections/litepaper';
import { UnderlineLinkAligned } from '../components/underline-link';

import {
  HeaderMarker,
  SectionTitle,
  SectionSubtitle,
  Section,
  SectionColumn
} from '../components/sections';

import gridOneSVG from '../assets/images/network/grid-1.svg';
import gridTwoSVG from '../assets/images/network/grid-2.svg';
import gridThreeSVG from '../assets/images/network/grid-3.svg';
import gridFourSVG from '../assets/images/network/grid-4.svg';

import tokenOneSVG from '../assets/images/network/token-1.svg';
import tokenTwoSVG from '../assets/images/network/token-2.svg';
import tokenThreeSVG from '../assets/images/network/token-3.svg';

import recordsPNG from '../assets/images/network/records.png';

const pageDesc = 'An overview of Dock’s decentralized blockchain and cryptocurrency enabling the production of digital claims for organizations at scale.';
const pageTitle = 'Dock Network | Dock Token';

const ParticipantsGrid = styled.div`
  display: flex;
  margin: 60px 0 10px 0;
  flex-direction: column;
  align-items: center;

  @media ${media.medium} {
    margin: 60px 0 100px 0;
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

const ParticipantsGridItem = styled.div`
  display: flex;
  margin-bottom: 60px;
  flex-direction: column;
  align-items: center;

  @media ${media.medium} {
    margin-bottom: 80px;
    flex-direction: row;
    max-width: 500px;
    width: 50%;
  }
`;

const ParticipantsGridItemContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: auto;

  @media ${media.medium} {
    max-width: 281px;
  }
`;

const ParticipantsGridItemTitle = styled.h4`
  font-size: 22px;
  line-height: 1.36;
  font-weight: bold;
  color: rgb(32, 33, 46);
  text-align: center;

  @media ${media.medium} {
    line-height: 2;
    text-align: left;
  }
`;

const ParticipantsGridItemText = styled.p`
  font-size: 16px;
  line-height: 1.75;
  color: rgb(49, 42, 67);
  text-align: center;
  margin: 10px 0 0 0;
  max-width: 288px;

  @media ${media.medium} {
    max-width: auto;
    text-align: left;
    font-size: 18px;
    line-height: 1.56;
    margin: 0;
  }
`;

const TokenGrid = styled.div`
  display: flex;
  flex-direction: column;
  margin: 60px 0 67px 0;

  @media ${media.medium} {
    flex-direction: row;
    margin: 60px 0 140px 0;
  }
`;

const TokenGridItem = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 50px 0;

  @media ${media.medium} {
    margin: 0;
  }
`;

const TokenGridItemTitle = styled.h4`
  font-size: 20px;
  font-weight: bold;
  line-height: 1.5;
  color: rgb(49, 42, 67);
  margin: 20px 0 10px 0;

  @media ${media.medium} {
    margin: 35px 0 10px 0;
  }
`;

const TokenGridItemText = styled.p`
  font-size: 18px;
  line-height: 1.56;
  color: rgb(49, 42, 67);
`;

const TokenGridItemImage = styled.img`
  display: block;
  margin-right: auto;
`;

const CustomSectionSubtitle = styled(SectionSubtitle)`
  max-width: 493px;
`;

const WideSection = styled(Section)`
  max-width: 100%;
  padding: 0;

  @media ${media.medium} {
    padding: 0;
  }
`;

const DarkSection = styled.div`
  width: 100%;
  display: flex;
  background-color: rgb(8, 0, 34);
`;

const DarkSectionWrapper = styled.div`
  padding: 70px 20px 87px 20px;
  margin-left: auto;
  width: 100%;
  max-width: 447px;
  flex-shrink: 0;

  @media ${media.medium} {
    padding: 100px 80px 100px 0;
  }
`;

const DarkSectionTitle = styled(SectionTitle)`
  color: rgb(255, 255, 255);
`;

const DarkHeaderMarker = styled(HeaderMarker)`
  background: rgb(255, 255, 255);
`;

const DarkRightSection = styled.div`
  width: 100%;
  padding: 40px 15px;
  background-color: rgb(26, 22, 55);

  @media ${media.medium} {
    padding: 100px;
  }
`;

const RecordsImage = styled.img`
  width: 100%;
  max-width: 468px;
  margin-right: auto;
`;

const DarkSectionText = styled.p`
  color: rgb(255, 255, 255);
  margin: 25px 0 0 0;
  max-width: 347px;
  font-size: 16px;
  line-height: 1.75;

  @media ${media.medium} {
    font-size: 18px;
    line-height: 1.56;
  }
`;

const Network = () => (
  <Page>
    <Head>
      <title>{pageTitle}</title>
      <meta name="og:title" content={pageTitle} />
      <meta name="description" content={pageDesc} />
      <meta name="og:description" content={pageDesc} />
    </Head>
    <NetworkHero />

    <SectionColumn>
      <SectionTitle>
        <HeaderMarker />
        Participant roles
      </SectionTitle>

      <ParticipantsGrid>
        <ParticipantsGridItem>
          <img src={gridOneSVG}/>
          <ParticipantsGridItemContent>
            <ParticipantsGridItemTitle>
              Issuer
            </ParticipantsGridItemTitle>
            <ParticipantsGridItemText>
              Places order for records to be issued.
            </ParticipantsGridItemText>
          </ParticipantsGridItemContent>
        </ParticipantsGridItem>

        <ParticipantsGridItem>
          <img src={gridTwoSVG}/>
          <ParticipantsGridItemContent>
            <ParticipantsGridItemTitle>
              Issuing Operator
            </ParticipantsGridItemTitle>
            <ParticipantsGridItemText>
              Executes order as they are placed by Issuers.
            </ParticipantsGridItemText>
          </ParticipantsGridItemContent>
        </ParticipantsGridItem>

        <ParticipantsGridItem>
          <img src={gridThreeSVG}/>
          <ParticipantsGridItemContent>
            <ParticipantsGridItemTitle>
              Validator
            </ParticipantsGridItemTitle>
            <ParticipantsGridItemText>
              Validates transactions in the network and participates in consensus.
            </ParticipantsGridItemText>
          </ParticipantsGridItemContent>
        </ParticipantsGridItem>

        <ParticipantsGridItem>
          <img src={gridFourSVG}/>
          <ParticipantsGridItemContent>
            <ParticipantsGridItemTitle>
              Voter
            </ParticipantsGridItemTitle>
            <ParticipantsGridItemText>
              Any Dock token holder has the ability to vote on proposals and participate in consensus.
            </ParticipantsGridItemText>
          </ParticipantsGridItemContent>
        </ParticipantsGridItem>
      </ParticipantsGrid>
    </SectionColumn>

    <WideSection>
      <DarkSection>
        <DarkSectionWrapper>
          <DarkSectionTitle>
            <DarkHeaderMarker />
            Production workflow
          </DarkSectionTitle>
          <DarkSectionText>
            Credential issuing is the bloodline of the network and feeds demand.
            As Issuers request claims, operators process and issue claims.
            The Dock token is used to deter malicous attacks in the network.
          </DarkSectionText>
        </DarkSectionWrapper>
      </DarkSection>
      <DarkRightSection>
        <RecordsImage src={recordsPNG}/>
      </DarkRightSection>
    </WideSection>

    <SectionColumn>
      <SectionTitle>
        <HeaderMarker />
        DOCK token
      </SectionTitle>
      <CustomSectionSubtitle>
        The DOCK token enables a decentralized network with open participation and governance.
      </CustomSectionSubtitle>
      <TokenGrid>
        <TokenGridItem>
          <TokenGridItemImage src={tokenOneSVG}/>
          <TokenGridItemTitle>
            Governance
          </TokenGridItemTitle>
          <TokenGridItemText>
            Token holders are able to submit proposals and vote on decisions contributing to network governance.
          </TokenGridItemText>

          <Link href="/governance" passHref>
            <UnderlineLinkAligned>
              Learn more
            </UnderlineLinkAligned>
          </Link>
        </TokenGridItem>

        <TokenGridItem>
          <TokenGridItemImage src={tokenTwoSVG}/>
          <TokenGridItemTitle>
            Operations
          </TokenGridItemTitle>
          <TokenGridItemText>
            Good actors are rewarded for contributing to the network and bad actors are published by losing stake.
          </TokenGridItemText>
        </TokenGridItem>

        <TokenGridItem>
          <TokenGridItemImage src={tokenThreeSVG}/>
          <TokenGridItemTitle>
            Transactions
          </TokenGridItemTitle>
          <TokenGridItemText>
            Network participants use tokens to bond and for payments to place requests for issuing and executing those requests.
          </TokenGridItemText>
        </TokenGridItem>
      </TokenGrid>
    </SectionColumn>

    <LitepaperSection />
  </Page>
);

export default Network;
