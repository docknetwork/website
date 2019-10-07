import React, { useState } from 'react';
import styled from 'styled-components';

import Header from '../header';
import media from '../../helpers/media';

import SubscribeModal from '../modals/subscribe-modal';
import InquiryModal from '../modals/inquiry-modal';

import headerHeroPNG from '../../assets/images/home/header-hero.png';
import headerHeroBGSVG from '../../assets/images/home/header-hero-bg.svg';
import arrowRightSVG from '../../assets/images/icons/arrow-right-white.svg';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
`;

const Root = styled.div`
  height: 831px;
  width: 100%;
  position: relative;
  background-color: rgb(8, 0, 34);
  padding: 0 20px 25px 20px;

  @media ${media.medium} {
    padding: 0px;
  }
`;

const HeaderHeroImage = styled.img`
  position: absolute;
  right: 0;
  bottom: -80px;
  width: 100%;
  max-width: 383px;

  @media ${media.medium} {
    display: block;
    width: auto;
    max-width: 100%;
    right: 20px;
    bottom: -100px;
  }
`;

const HeaderHeroBGImage = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
`;

const HeroTitle = styled.h1`
  font-family: Poppins;
  font-weight: bold;
  letter-spacing: normal;
  color: rgb(255, 255, 255);
  max-width: 351px;
  font-size: 48px;
  line-height: 1.19;
  margin: 40px 0 30px 0;

  @media ${media.medium} {
    font-size: 68px;
    line-height: 1.07;
    margin: 120px 0 30px 0;
  }
`;

const HeroSubtitle = styled.h2`
  font-weight: normal;
  line-height: 1.56;
  color: rgb(255, 255, 255);
  margin: 0 0 50px 0;
  max-width: 491px;
  font-size: 16px;

  @media ${media.medium} {
    margin: 0 0 70px 0;
    font-size: 18px;
  }
`;

const IssueButton = styled.a`
  display: block;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  color: rgb(255, 255, 255);
  height: 52px;
  line-height: 52px;
  border-radius: 5px;
  background-color: rgb(75, 107, 220);
  text-decoration: none;
  width: 100%;
  cursor: pointer;

  @media ${media.medium} {
    width: 215px;
  }
`;

const UnderlineLink = styled.a`
  border-bottom: 3px solid rgb(75, 107, 220);
  font-size: 18px;
  font-weight: bold;
  line-height: 1.56;
  color: rgb(255, 255, 255);
  padding: 4px 5px;
  display: flex;
  margin-top: 30px;
  align-self: flex-start;
  cursor: pointer;

  @media ${media.medium} {
    margin-left: 25px;
    margin-top: 0;
  }
`;

const UnderlineLinkIcon = styled.img`
  margin-left: 15px;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;

  @media ${media.medium} {
    flex-direction: row;
    align-items: center;
  }
`;

const HeaderHero = () => {
  const [showSubscribeModal, setShowSubscribeModal] = useState(false);
  const [showInquiryModal, setShowInquiryModal] = useState(false);

  return (
    <>
      <Root>
        <Header />
        <Wrapper>
          <div>
            <HeroTitle>
              Verifiable Claims
            </HeroTitle>
            <HeroSubtitle>
              High-performance distributed ledger technology to produce verifiable claims at scale.
            </HeroSubtitle>

            <Buttons>
              <IssueButton onClick={() => setShowInquiryModal(true)}>
                Contact Us
              </IssueButton>
              <UnderlineLink onClick={() => setShowSubscribeModal(true)}>
                Subscribe to updates
                <UnderlineLinkIcon src={arrowRightSVG} />
              </UnderlineLink>
            </Buttons>
          </div>
          <HeaderHeroBGImage src={headerHeroBGSVG} />
          <HeaderHeroImage src={headerHeroPNG} />
        </Wrapper>
      </Root>

      {showSubscribeModal && (
        <SubscribeModal onClose={() => setShowSubscribeModal(false)} />
      )}

      {showInquiryModal && (
        <InquiryModal onClose={() => setShowInquiryModal(false)} />
      )}
    </>
  );
};


export default HeaderHero;
