import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import Header from '../../components/header';

import logoSVG from '../../assets/images/dock-logo.svg';
import headerHeroSVG from '../../assets/images/home/header-hero.svg';
import headerHeroBGSVG from '../../assets/images/home/header-hero-bg.svg';

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
`;

const HeaderHeroImage = styled.img`
  position: absolute;
  right: 20px;
  bottom: -100px;
`;

const HeaderHeroBGImage = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
`;

const HeroTitle = styled.h1`
  font-family: Poppins;
  font-size: 68px;
  font-weight: bold;
  line-height: 1.07;
  letter-spacing: normal;
  color: rgb(255, 255, 255);
  margin: 120px 0 30px 0;
  width: 351px;
`;

const HeroSubtitle = styled.h2`
  font-size: 18px;
  font-weight: normal;
  line-height: 1.56;
  color: rgb(255, 255, 255);
  margin: 0 0 70px 0;
  width: 391px;
`;

const IssueButton = styled.a`
  display: block;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  color: rgb(255, 255, 255);
  width: 215px;
  height: 52px;
  line-height: 52px;
  border-radius: 5px;
  background-color: rgb(75, 107, 220);
  text-decoration: none;
`;

const UnderlineLink = styled.a`
  border-bottom: 3px solid rgb(75, 107, 220);
  font-size: 18px;
  font-weight: bold;
  line-height: 1.56;
  color: rgb(255, 255, 255);
  margin-left: 30px;
  padding: 4px 5px;
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
`;

const HeaderHero = () => (
  <Root>
    <Header />
    <Wrapper>
      <div>
        <HeroTitle>
          Verifiable credential technology
        </HeroTitle>
        <HeroSubtitle>
          High-performance distributed ledger technology to produce verifiable credentials.
        </HeroSubtitle>

        <Buttons>
          <IssueButton href="#">
            Build with Dock
          </IssueButton>
          <UnderlineLink>
            Subscribe to updates
          </UnderlineLink>
        </Buttons>
      </div>
      <HeaderHeroBGImage src={headerHeroBGSVG}/>
      <HeaderHeroImage src={headerHeroSVG}/>
    </Wrapper>
  </Root>
);


export default HeaderHero;
