import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import Header from '../header';
import media from '../../helpers/media';

import logoSVG from '../../assets/images/dock-logo.svg';
import headerHeroBGSVG from '../../assets/images/about/hero-bg.svg';
import headerHeroBGMblSVG from '../../assets/images/about/hero-bg-mbl.svg';
import arrowRightSVG from '../../assets/images/icons/arrow-right-white.svg';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
`;

const Root = styled.div`
  height: 500px;
  width: 100%;
  position: relative;
  background-color: rgb(8, 0, 34);
  padding: 0 20px 25px 20px;

  @media ${media.medium} {
    height: 500px;
    padding: 0;
    margin: 0;
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


const AboutHero = () => (
  <Root>
    <Header />
    <Wrapper>
      <HeroTitle>
        About
      </HeroTitle>
      <HeaderHeroBGImageMobile src={headerHeroBGMblSVG} />
      <HeaderHeroBGImage src={headerHeroBGSVG} />
    </Wrapper>
  </Root>
);


export default AboutHero;
