import React, {useState} from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import media from '../helpers/media';

import Page from '../layouts/main';
import HeaderHero from '../components/sections/header-hero';
import LitepaperSection from '../components/sections/litepaper';
import { UnderlineLinkAligned } from '../components/underline-link';
import Modal from '../components/modal';

import {
  HeaderMarker,
  Wrapper,
  SectionTitle,
  SectionSubtitle,
  Section,
  SectionColumn
} from '../components/sections';

import imageOneSVG from '../assets/images/home/image-one.svg';
import participationBGSVG from '../assets/images/home/participation-bg.svg';
import webstandardsBGSVG from '../assets/images/home/web-standards-bg.svg';
import governanceBGSVG from '../assets/images/home/governance-bg.svg';

import arrowRightSVG from '../assets/images/icons/arrow-right-dark.svg';
import webstandardsIconSVG from '../assets/images/home/webstandards-icon.svg';
import governanceIconSVG from '../assets/images/home/governance-bg-icon.svg';
import networkIconSVG from '../assets/images/home/network-icon.svg';
import litepaperPNG from '../assets/images/home/litepaper.png';

const IntroSectionRight = styled.div`
  margin-left: auto;
  display: flex;
  flex-direction: column;
  margin: 40px 0 0 0;

  @media ${media.medium} {
    margin: 96px 0 0 0;
    width: 425px;
  }
`;

const ImageOne = styled.img`
  width: 355px;
  height: 355px;
  transform: translate(-10px, 0);

  @media ${media.medium} {
    width: auto;
    height: auto;
    transform: translate(-36px, 0);
  }
`;

const NetworkSection = styled.div`
  display: flex;
  margin: 35px 0 0 0;
  justify-content: space-between;
  flex-direction: column;

  @media ${media.medium} {
    margin: 60px 0 0 0;
    flex-direction: row;
  }
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
  margin-bottom: 35px;

  @media ${media.medium} {
    margin-bottom: 0;
  }
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
  display: flex;
  flex-direction: column;
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
  box-shadow: 0 19px 56px -20px rgba(0, 0, 0, 0.2);
  background-color: rgb(255, 255, 255);
  flex-direction: column;
  display: flex;
  margin-top: 44px;

  @media ${media.medium} {
    flex-direction: row;
    margin-bottom: 140px;
    margin-top: 60px;
    height: 383px;
  }
`;

const PartnerImage = styled.div`
  width: 333px;
  height: 334px;
  background-color: rgb(53, 188, 152);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  @media ${media.medium} {
    width: 371px;
    height: 383px;
  }
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
  display: flex;
  flex-direction: column;
  padding: 40px 53px 42px 16px;

  @media ${media.medium} {
    padding: 46px 50px;
  }
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
  margin: 10px 0 15px 0;

  @media ${media.medium} {
    margin: 10px 0 0 0;
  }
`;

const AltSectionWrapper = styled.div`
  background-color: rgb(246, 246, 249);
  margin-top: 20px;

  @media ${media.medium} {
    margin-top: 200px;
  }
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
  display: none;

  @media ${media.medium} {
    display: block;
  }
`;

const BuildButtonMobile = styled(BuildButton)`
  margin: 45px 0 50px 0;
  display: block;
  width: 100%;

  @media ${media.medium} {
    display: none;
  }
`;

const Banner = styled.a`
  background-image: linear-gradient(to right, rgb(75, 107, 220), rgb(94, 77, 172));
  font-size: 18px;
  line-height: 1.56;
  text-align: center;
  color: rgb(255, 255, 255);
  width: 100%;
  display: flex;
  text-decoration: none;
  flex-direction: column;
  padding: 10px 0;
  align-items: center;

  @media ${media.medium} {
    flex-direction: row;
    justify-content: center;
    padding: 0;
    height: 52px;
  }
`;

const BannerButton = styled.span`
  display: flex;
  color: rgb(255, 255, 255);
  margin-left: 12px;
  text-decoration: none;

  > img {
    margin-left: 20px;
  }
`;

import arrowRightWhiteSVG from '../assets/images/icons/arrow-right-white.svg';


const ModalHeader = styled.div`
  width: 100%;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.06);
  background-color: rgb(239, 239, 245);
  display: flex;
  flex-direction: column;
  padding-top: 33px;
`;

const ModalContent = styled.div`
  padding: 35px 30px;
  font-size: 18px;
  line-height: 1.56;
  text-align: center;

  &, a {
    color: rgb(49, 42, 67);
  }
`;

const ModalFooter = styled.div`
  padding: 0 0 47px 0;
  text-align: center;
`;

const ModalTitle = styled.h4`
  font-family: Poppins;
  font-size: 24px;
  line-height: 1.67;
  text-align: center;
  color: rgb(53, 188, 152);
  font-weight: normal;
  margin: 20px 0;
`;

const ModalSubtitle = styled.h3`
  font-family: Poppins;
  font-size: 66px;
  font-weight: bold;
  line-height: 0.61;
  text-align: center;
  color: rgb(53, 188, 152);
  margin-bottom: 21px;
`;

const ModalImage = styled.img`
  margin-top: auto;
`;

import modalImageSVG from '../assets/images/verifable-modal/image.svg';
import arrowSVG from '../assets/images/verifable-modal/arrow.svg';

const VerifiableModal = ({onClose}) => (
  <Modal onClose={onClose}>
    <ModalHeader>
      <img src={arrowSVG}/>
      <ModalTitle>
        The Dock app has moved to
      </ModalTitle>
      <ModalSubtitle>
        Verifiable
      </ModalSubtitle>
      <ModalImage src={modalImageSVG}/>
    </ModalHeader>
    <ModalContent>
        The Dock wallet and credential issuing platform are now Verifiable — A place for organizations to issue digital credentials
        and a digital wallet for individuals to securely store and share credentials.

        &nbsp;
        <a href="#">Learn more</a>

        <br /><br />
        <strong>Your Dock account has automatically moved.</strong><br />
        Just login with your existing credentials to get started.
    </ModalContent>
    <ModalFooter>
      <UnderlineLinkAligned href="https://verifiable.com">
        Go to Verifiable
      </UnderlineLinkAligned>
    </ModalFooter>
  </Modal>
);


const Index = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Page>
        <Banner href="https://verifiable.com" onClick={e => { e.preventDefault(); e.stopPropagation(); setShowModal(true); }}>
          The Dock app has moved to Verifiable.
          <BannerButton>
            Learn more
            <img src={arrowRightWhiteSVG}/>
          </BannerButton>
        </Banner>

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

            <BuildButtonMobile>
              Become a partner
            </BuildButtonMobile>
          </PartnersSection>
        </AltSectionWrapper>

        <LitepaperSection />
      </Page>

      {showModal && (
        <VerifiableModal onClose={() => setShowModal(false)} />
      )}
    </>
  );
};

export default Index;
