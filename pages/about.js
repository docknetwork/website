import React, {useState} from 'react';
import styled from 'styled-components';
import media from '../helpers/media';

import Page from '../layouts/main';
import AboutHero from '../components/sections/about-hero';
import { UnderlineLink } from '../components/underline-link';
import InquiryModal from '../components/modals/inquiry-modal';

import {
  HeaderMarker,
  SectionTitle,
  SectionColumn
} from '../components/sections';

import docklabsPNG from '../assets/images/about/docklabs.png';
import verifiablePNG from '../assets/images/about/verifiable.png';

import kxPNG from '../assets/images/about/partners/1-kx-logo.png';
import alphabitPNG from '../assets/images/about/partners/alphabit-logo.png';
import blocktechPNG from '../assets/images/about/partners/blocktech-logo.png';
import blockwaterPNG from '../assets/images/about/partners/blockwater-logo.png';
import connectCapitalPNG from '../assets/images/about/partners/connect-capital-logo.png';
import dafPNG from '../assets/images/about/partners/daf-logo.png';
import dchPNG from '../assets/images/about/partners/dch-logo.png';
import lTwoVenturesPNG from '../assets/images/about/partners/l-2-ventures.png';
import passportPNG from '../assets/images/about/partners/passport-logo.png';

const HeadlineSection = styled.div`
  background-color: rgb(246, 246, 249);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 40px;

  @media ${media.medium} {
    height: 228px;
    padding: 0;
  }
`;

const Headline = styled.h2`
  font-family: Lato;
  font-weight: normal;
  font-size: 18px;
  line-height: 1.38;
  text-align: center;
  color: rgb(31, 31, 44);
  max-width: 892px;
  width: 100%;

  @media ${media.medium} {
    font-size: 32px;
    line-height: 1.38;
  }
`;

const Text = styled.p`
  font-family: Lato;
  font-size: 18px;
  line-height: 1.56;
  color: rgb(49, 42, 67);
  margin: 20px 0 0 0;
  max-width: 681px;
  width: 100%;
`;

const Contributors = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 70px;
`;

const Contributor = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 3px;
  box-shadow: 0 19px 56px -20px rgba(0, 0, 0, 0.2);
  background-color: rgb(255, 255, 255);
  margin-bottom: 15px;

  @media ${media.medium} {
    margin-right: 15px;
    margin-bottom: 0;
    max-width: 331px;
    height: 332px;
  }
`;

const ContributorLogo = styled.div`
  height: 159px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #201C3C;

  &.green {
    background: #35BC98;
  }
`;

const ContributorText = styled.div`
  font-family: Lato;
  font-size: 18px;
  line-height: 1.56;
  color: rgb(49, 42, 67);
  padding: 15px;

  @media ${media.medium} {
    padding: 24px 33px 37px 33px;
  }
`;

const SectionColumnCentered = styled(SectionColumn)`
  align-items: center;
  justify-content: center;
`;

const Investors = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  margin: 70px 0 100px 0;
  width: 100%;

  @media ${media.medium} {
    flex-direction: row;
  }
`;

const Investor = styled.div`
  margin: 0 129px;
  width: 100%;
  margin: 0 0 40px 0;

  @media ${media.medium} {
    max-width: 256px;
    margin: 0 0 80px 0;
  }
`;

const InvestorsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 256px;
  width: 100%;

  img {
    margin: 0 auto;
    display: block;
  }
`;

const SectionTitleCentered = styled(SectionTitle)`
  text-align: center;
  display: flex;
  align-items: Center;
  justify-content: center;
  flex-direction: column;
`;

const About = () => {
  const [showInquiryModal, setShowInquiryModal] = useState(false);

  return (
    <Page>
      <AboutHero />

      <HeadlineSection>
        <Headline>
          Our mission is to enable an internet of trust - by producing verifiable data and returning control to owners.
        </Headline>
      </HeadlineSection>

      <SectionColumn>
        <SectionTitle>
          <HeaderMarker />
          Our approach
        </SectionTitle>
        <Text>
          The internet today is a world of misinformation, unnecessary intermediaries, and non-compatible systems that reward the abuse of our personal information.
          <br /><br />
          Dock is changing this by promoting collaboration and efficiency, enabling organizations to seamlessly produce interoperable and universally verifiable data while returning control to users and data owners.
        </Text>
      </SectionColumn>

      <SectionColumn>
        <SectionTitle>
          <HeaderMarker />
          Contributors
        </SectionTitle>
        <Text>
          Dock is built by an open source collaborative effort from multiple teams. Interested in contributing to our cutting edge distributed ledger project?
        </Text>

        <UnderlineLink onClick={() => setShowInquiryModal(true)}>
          Work with us
        </UnderlineLink>

        <Contributors>
          <Contributor>
            <ContributorLogo>
              <img src={docklabsPNG}/>
            </ContributorLogo>
            <ContributorText>
              An innovative team of developers passionate about open-sourced software and Web3 systems.
            </ContributorText>
          </Contributor>

          <Contributor>
            <ContributorLogo className="green">
              <img src={verifiablePNG}/>
            </ContributorLogo>
            <ContributorText>
              A team driving innovation in credentialing and enabling process transformation for universites and enterprise.
            </ContributorText>
          </Contributor>
        </Contributors>
      </SectionColumn>

      <SectionColumnCentered>
        <SectionTitleCentered>
          <HeaderMarker />
          Investors
        </SectionTitleCentered>

        <Investors>
          <InvestorsWrapper>
            <Investor>
              <img src={passportPNG}/>
            </Investor>
            <Investor>
              <img src={connectCapitalPNG}/>
            </Investor>
            <Investor>
              <img src={lTwoVenturesPNG}/>
            </Investor>
          </InvestorsWrapper>

          <InvestorsWrapper>
            <Investor>
              <img src={dafPNG}/>
            </Investor>
            <Investor>
              <img src={kxPNG}/>
            </Investor>
            <Investor>
              <img src={blockwaterPNG}/>
            </Investor>
          </InvestorsWrapper>

          <InvestorsWrapper>
            <Investor>
              <img src={dchPNG}/>
            </Investor>
            <Investor>
              <img src={alphabitPNG}/>
            </Investor>
            <Investor>
              <img src={blocktechPNG}/>
            </Investor>
          </InvestorsWrapper>
        </Investors>
      </SectionColumnCentered>

      {showInquiryModal && (
        <InquiryModal onClose={() => setShowInquiryModal(false)} />
      )}
    </Page>
  );
};

export default About;
