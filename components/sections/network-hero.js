import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import Header from '../../components/header';
import media from '../../helpers/media';

import logoSVG from '../../assets/images/dock-logo.svg';
import headerHeroSVG from '../../assets/images/network/hero.svg';
import headerHeroBGSVG from '../../assets/images/network/hero-bg.svg';
import headerHeroBGMblSVG from '../../assets/images/network/hero-bg-mbl.svg';
import arrowRightSVG from '../../assets/images/icons/arrow-right-white.svg';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
`;

const Root = styled.div`
  height: 640px;
  width: 100%;
  position: relative;
  background-color: rgb(8, 0, 34);
  padding: 0 20px 25px 20px;
  margin: 0 0 60px 0;

  @media ${media.medium} {
    height: 575px;
    padding: 0;
    margin: 0;
  }
`;

const HeaderHeroImage = styled.img`
  position: absolute;
  width: 100%;
  right: 0;
  bottom: -80px;

  @media ${media.medium} {
    width: auto;
    right: 20px;
    bottom: -100px;
  }
`;

const HeaderHeroBGImageMobile = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
  display: block;

  @media ${media.medium} {
    display: none;
  }
`;

const HeaderHeroBGImage = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
  display: none;

  @media ${media.medium} {
    display: block;
  }
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
  margin: 0 0 30px 0;
  max-width: 391px;
  font-size: 16px;

  @media ${media.medium} {
    margin: 0 0 50px 0;
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
  align-self: flex-start;
  width: 180px;
  text-decoration: none;
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

const NetworkHero = () => (
  <Root>
    <Header />
    <Wrapper>
      <div>
        <HeroTitle>
          Network
        </HeroTitle>
        <HeroSubtitle>
          An autonomous network with open participation and governance
        </HeroSubtitle>
        <UnderlineLink href="https://dock.io/litepaper.pdf">
          Read Litepaper
          <UnderlineLinkIcon src={arrowRightSVG}/>
        </UnderlineLink>
      </div>
      <HeaderHeroBGImageMobile src={headerHeroBGMblSVG}/>
      <HeaderHeroBGImage src={headerHeroBGSVG}/>
      <HeaderHeroImage src={headerHeroSVG}/>
    </Wrapper>
  </Root>
);


export default NetworkHero;
