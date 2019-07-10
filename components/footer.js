import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import media from '../helpers/media';

import logoSVG from '../assets/images/dock-logo.svg';
import binanceSVG from '../assets/images/icons/icn-b.svg';
import facebookSVG from '../assets/images/icons/icn-facebook.svg';
import githubSVG from '../assets/images/icons/icn-github.svg';
import mediumSVG from '../assets/images/icons/icn-medium.svg';
import redditSVG from '../assets/images/icons/icn-reddit.svg';
import twitterSVG from '../assets/images/icons/icn-twitter.svg';
import telegramSVG from '../assets/images/icons/icn-telegram.svg';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  flex-direction: column;
  align-items: flex-start;

  @media ${media.medium} {
    flex-direction: row;
  }
`;

const Root = styled.div`
  background-color: rgb(8, 0, 34);
  padding: 50px 0;
  width: 100%;
  height: 238px;
`;

const Nav = styled.div`
  display: flex;
  margin-left: 13px;
`;

const NavColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 50px;
`;

const NavLink = styled.a`
  opacity: 0.8;
  font-size: 14px;
  line-height: 2;
  font-weight: bold;
  color: rgb(255, 255, 255);
`;

const Socials = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  @media ${media.medium} {
    margin-left: auto;
  }
`;

const SocialLink = styled.a`
  margin-left: 25px;
`;

const Footer = () => (
  <Root>
    <Wrapper>
      <img src={logoSVG} />
      <Nav>
        <NavColumn>
          <Link href="/">
            <NavLink>Home</NavLink>
          </Link>
          <Link href="/network">
            <NavLink>Network</NavLink>
          </Link>
          <Link href="/governance">
            <NavLink>Governance</NavLink>
          </Link>
          <Link href="/about">
            <NavLink>About</NavLink>
          </Link>
        </NavColumn>
        <NavColumn>
          <Link href="/about">
            <NavLink>Blog</NavLink>
          </Link>
          <Link href="/about">
            <NavLink>Forum</NavLink>
          </Link>
          <Link href="/about">
            <NavLink>Litepaper</NavLink>
          </Link>
        </NavColumn>
      </Nav>
      <Socials>
        <SocialLink href="#">
          <img src={telegramSVG}/>
        </SocialLink>

        <SocialLink href="#">
          <img src={mediumSVG}/>
        </SocialLink>

        <SocialLink href="#">
          <img src={twitterSVG}/>
        </SocialLink>

        <SocialLink href="#">
          <img src={redditSVG}/>
        </SocialLink>

        <SocialLink href="#">
          <img src={githubSVG}/>
        </SocialLink>

        <SocialLink href="#">
          <img src={facebookSVG}/>
        </SocialLink>

        <SocialLink href="#">
          <img src={binanceSVG}/>
        </SocialLink>
      </Socials>
    </Wrapper>
  </Root>
);

export default Footer;
