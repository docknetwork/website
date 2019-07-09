import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import Page from '../layouts/main';
import HeaderHero from '../components/sections/header-hero';

import imageOneSVG from '../assets/images/home/image-one.svg';

import participationBGSVG from '../assets/images/home/participation-bg.svg';
import webstandardsBGSVG from '../assets/images/home/web-standards-bg.svg';
import governanceBGSVG from '../assets/images/home/governance-bg.svg';

import webstandardsIconSVG from '../assets/images/home/webstandards-icon.svg';
import governanceIconSVG from '../assets/images/home/governance-bg-icon.svg';
import networkIconSVG from '../assets/images/home/network-icon.svg';
import litepaperPNG from '../assets/images/home/litepaper.png';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
`;

const IntroSectionRight = styled.div`
  margin-left: auto;
  display: flex;
  flex-direction: column;
  width: 425px;
  margin: 96px 0 0 0;
`;

const SectionTitle = styled.h4`
  font-size: 40px;
  font-weight: 600;
  line-height: 1.25;
  color: rgb(32, 33, 46);
  max-width: 683px;
`;

const SectionSubtitle = styled.p`
  font-size: 18px;
  font-weight: normal;
  line-height: 1.56;
  color: rgb(49, 42, 67);
  margin: 20px 0 0 0;
  max-width: 683px;
`;

const Section = styled(Wrapper)`
  padding: 170px 0 0 0;
`;

const SectionColumn = styled(Section)`
  flex-direction: column;
  padding: 140px 0 0 0;
`;

const ImageOne = styled.img`
  transform: translate(-36px, 0);
`;

const HeaderMarker = styled.div`
  width: 39px;
  height: 2px;
  background: rgb(32, 28, 60);
  margin: 0 0 10px 0;
`;

const NetworkSection = styled.div`
  display: flex;
  margin: 60px 0 0 0;
  justify-content: space-between;
`;

const RowItem = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 331px;
  min-height: 370px;
  border-radius: 3px;
  box-shadow: 0 19px 56px -20px rgba(0, 0, 0, 0.2);
  background-color: rgb(255, 255, 255);
  position: relative;
`;

const RowItemTitle = styled.div`
  font-size: 22px;
  font-weight: bold;
  line-height: 1.36;
  color: rgb(255, 255, 255);
`;

const RowItemIcon = styled.img`
  margin: 39px 0 14px 0;
`;

const RowItemHeader = styled.div`
  width: 100%;
  height: 159px;
  padding: 0 33px;
  flex-shrink: none;
  background: url(${governanceBGSVG});

  &.participation {
    background: url(${participationBGSVG});
  }

  &.webstandards {
    background: url(${webstandardsBGSVG});
  }
`;

const RowItemContent = styled.div`
  padding: 25px 33px 46px 33px;
  box-sizing: border-box;
  flex: auto;
`;

const RowItemContentText = styled.p`
  font-size: 18px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.56;
  letter-spacing: normal;
  color: rgb(49, 42, 67);
`;

const Partner = styled.div`
  display: flex;
  height: 383px;
  box-shadow: 0 19px 56px -20px rgba(0, 0, 0, 0.2);
  background-color: rgb(255, 255, 255);
  margin-top: 60px;
  margin-bottom: 140px;
`;

const PartnerImage = styled.div`
  width: 371px;
  height: 383px;
  background-color: rgb(53, 188, 152);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

const PartnerImageTitle = styled.h4`
  margin: 23px auto 0 auto;
  font-size: 35px;
  font-weight: bold;
  line-height: 1.26;
  text-align: center;
  color: rgb(255, 255, 255);
`;

const VerifiableImage = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 100%;
  border: solid 4px rgb(255, 255, 255);
`;

const PartnerContent = styled.div`
  padding: 46px 50px;
  display: flex;
  flex-direction: column;
`;

const PartnerTitle = styled.h4`
  font-size: 22px;
  font-weight: bold;
  line-height: 2;
  color: rgb(32, 33, 46);
`;

const PartnerDescription = styled.p`
  font-size: 18px;
  line-height: 1.56;
  color: rgb(49, 42, 67);
  margin: 10px 0 0 0;
`;

const LitepaperSection = styled.div`
  display: flex;
  justify-content: center;
  background-color: rgb(239, 239, 245);
  padding: 67px 0 63px 0;
`;

const LitepaperContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: 25px 0 0 0;
`;

const LitepaperImage = styled.img`
  width: 213px;
  margin-right: 40px;
`;

const UnderlineLink = styled.a`
  border-bottom: 3px solid rgb(75, 107, 220);
  font-size: 18px;
  font-weight: bold;
  line-height: 1.56;
  padding: 4px 5px;
  color: rgb(60, 60, 72);
  margin-top: 30px;
  align-self: flex-start;
`;

const UnderlineLinkAligned = styled(UnderlineLink)`
  margin-top: auto;
`;

const AltSectionWrapper = styled.div`
  background-color: rgb(246, 246, 249);
  margin-top: 200px;
`;

const PartnersSection = styled(SectionColumn)`
  padding-top: 66px;
`;

const SectionHeaderControls = styled.div`
  display: flex;
`;

const BuildButton = styled.a`
  width: 235px;
  height: 52px;
  line-height: 52px;
  border-radius: 5px;
  background-color: rgb(75, 107, 220);
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  color: rgb(255, 255, 255);
  margin-left: auto;
  margin-top: auto;
`;



const Index = () => (
  <Page>
    <HeaderHero />
    <Section>
      <ImageOne src={imageOneSVG}/>
      <IntroSectionRight>
        <HeaderMarker />
        <SectionTitle>
          Reducing cost and complexity, enabling transformation
        </SectionTitle>
        <SectionSubtitle>
          Dock reduces the cost barriers to seamlessly issue immutable, universally verifiable data at scale.
          This allows organizations to seamlessly issue high-value data, with a low-cost and always on high performant system.
        </SectionSubtitle>
      </IntroSectionRight>
    </Section>
    <SectionColumn>
      <HeaderMarker />
      <SectionTitle>
        An open and collaborative network
      </SectionTitle>
      <SectionSubtitle>
        We believe in the efficiencies of collaboration and open standards and are
        building the trustless infrastructure to realize the vision of the internet.
      </SectionSubtitle>

      <NetworkSection>
        <RowItem>
          <RowItemHeader>
            <RowItemIcon src={governanceIconSVG}/>
            <RowItemTitle>
              Governance
            </RowItemTitle>
          </RowItemHeader>
          <RowItemContent>
            <RowItemContentText>
              Open and collaborative governance driven by the DOCK token.
            </RowItemContentText>
            <UnderlineLinkAligned>
              Learn more
            </UnderlineLinkAligned>
          </RowItemContent>
        </RowItem>

        <RowItem>
          <RowItemHeader className="participation">
            <RowItemIcon src={networkIconSVG}/>
            <RowItemTitle>
              Participation
            </RowItemTitle>
          </RowItemHeader>
          <RowItemContent>
            <RowItemContentText>
              Contribute as an issuer or operator in the network.
            </RowItemContentText>
            <UnderlineLinkAligned>
              Learn more
            </UnderlineLinkAligned>
          </RowItemContent>
        </RowItem>

        <RowItem>
          <RowItemHeader className="webstandards">
            <RowItemIcon src={webstandardsIconSVG}/>
            <RowItemTitle>
              Web standards
            </RowItemTitle>
          </RowItemHeader>
          <RowItemContent>
            <RowItemContentText>
              Promoting an open and interoperable web through issuing standards.
            </RowItemContentText>
          </RowItemContent>
        </RowItem>
      </NetworkSection>
    </SectionColumn>

    <AltSectionWrapper>
      <PartnersSection>
        <HeaderMarker />
        <SectionHeaderControls>
          <SectionTitle>
            Partners
          </SectionTitle>
          <BuildButton>
            Build with Dock
          </BuildButton>
        </SectionHeaderControls>
        <Partner>
          <PartnerImage>
            <VerifiableImage/>
            <PartnerImageTitle>
              Verifiable.com
            </PartnerImageTitle>
          </PartnerImage>
          <PartnerContent>
            <PartnerTitle>
              Verifiable.com
            </PartnerTitle>
            <PartnerDescription>
              Verifiable works with universities, trade associations and enterprise companies,
              providing a turn-key platform to issue verifiable credentials.

              The platform provides the ability to design credential templates,
              manage recipients and track business goals with analytics.
            </PartnerDescription>
            <UnderlineLinkAligned>
              Read case study
            </UnderlineLinkAligned>
          </PartnerContent>
        </Partner>
      </PartnersSection>
    </AltSectionWrapper>

    <LitepaperSection>
        <LitepaperImage src={litepaperPNG}/>
        <LitepaperContent>
          <SectionTitle>
            Read the Litepaper
          </SectionTitle>
          <SectionSubtitle>
            Overview of the Dock blockchain and network.
          </SectionSubtitle>
          <UnderlineLink>
            Read Litepaper
          </UnderlineLink>
        </LitepaperContent>
    </LitepaperSection>
  </Page>
);

export default Index;
