import React, { useState } from 'react';
import styled from 'styled-components';
import Link from './active-link';

import media from '../helpers/media';

import logoSVG from '../assets/images/dock-logo.svg';

import redditIcon from '../assets/images/menu-icons/reddit.svg';
import facebookIcon from '../assets/images/menu-icons/facebook.svg';
import githubIcon from '../assets/images/menu-icons/github.svg';
import telegramIcon from '../assets/images/menu-icons/telegram.svg';
import twitterIcon from '../assets/images/menu-icons/twitter.svg';
import chevronDown from '../assets/images/icons/chevron-down.svg';

const Wrapper = styled.div`
  display: flex;
  max-width: 1024px;
  margin: 0 auto;
  width: 100%;
`;

const HeaderWrapper = styled(Wrapper)`
  padding-top: 20px;
  align-items: center;

  @media ${media.medium} {
    padding-top: 30px;
  }
`;

const Nav = styled.div`
  margin-left: auto;
  display: none;

  &.active {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    max-height: 500px;
    left: 0;
    top: 0;
    position: fixed;
    z-index: 100;
    background: #ffffff;
    padding: 20px 0;
    margin: 0 auto;
    box-shadow: 0 15px 30px -10px rgba(0,0,0,.3);
    border: 1px solid #e5e5e5;
  }

  @media ${media.medium} {
    display: flex;
  }
`;

const CommunityMenuWrapper = styled.div`
  position: relative;
  margin-top: 3px;
  display: none;

  @media ${media.medium} {
    display: block;
  }
`;

const NavLink = styled.a`
  text-align: center;
  transition: color 0.2s ease-in-out;
  cursor: pointer;
  text-decoration: none;
  color: rgb(49, 42, 67);
  line-height: 1.63;
  font-size: 28px;
  padding: 0 0 10px 0;

  @media ${media.medium} {
    color: rgb(255, 255, 255);
    line-height: 1.63;
    font-size: 16px;
    margin-left: 30px;
    border-bottom: solid 2px transparent;
    padding: 4px;

    &:hover {
      color: rgb(75, 107, 220);
    }

    &.active {
      border-color: rgb(75, 107, 220);
    }
  }
`;

const LogoImg = styled.img`
  width: 62px;
  cursor: pointer;

  @media ${media.medium} {
    padding-top: 20px;
    width: 82px;
  }
`;

const NavLinkCommunity = styled(NavLink)`
  border-bottom: none;
  padding: 0;
`;

const CommunityMenu = styled.div`
  width: 184px;
  border-radius: 3px;
  box-shadow: 0 15px 30px -10px rgba(0, 0, 0, 0.3);
  border: solid 1px rgb(229, 229, 229);
  background-color: rgb(255, 255, 255);
  position: absolute;
  right: -50px;
  top: 32px;
  display: flex;
  flex-direction: column;
  padding: 15px 20px 10px 20px;
  box-sizing: border-box;
  z-index: 100;
  text-align: left;
`;

const CommunityMenuLink = styled.a`
  font-size: 14px;
  line-height: 2;
  color: rgb(112, 112, 122);
  text-decoration: none;
`;

const CommunityMenuSpan = styled.span`
  font-size: 14px;
  line-height: 1.43;
  letter-spacing: normal;
  color: rgb(184, 184, 184);
  margin-top: 8px;
  display: block;
`;

const CommunityMenuIcons = styled.div`
  display: flex;
  margin: 4px 0 0 0;
`;

const CommunityMenuIcon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto!important;

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }
`;

const NavLinkCommunityIcon = styled.img`
  transform: translate(3px, 3px);
  width: 17px;
  opacity: 0.8;
`;

const HamburgerIcon = styled.div`
  width: 19px;
  height: 22px;
  position: relative;
  transform: rotate(0deg);
  transition: .5s ease-in-out;
  margin: 10px 0 0 auto;
  display: block;
  z-index: 1001;

  @media ${media.medium} {
    display: none;
  }

  span {
    display: block;
    position: absolute;
    height: 2px;
    width: inherit;
    background: #ffffff;
    border-radius: 8px;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: .25s ease-in-out;

    &:nth-child(1) {
      top: 0;
    }

    &:nth-child(2),
    &:nth-child(3) {
      top: 6px;
    }

    &:nth-child(4) {
      top: 12px;
      left: auto;
      right: 0;
      width: 13px;
    }
  }

  &.active {
    position: fixed;
    right: 20px;
    top: 15px;

    span {
      background: rgb(49, 42, 67);

      &:nth-child(1) {
        top: 18px;
        width: 0%;
        left: 50%;
      }

      &:nth-child(2) {
        transform: rotate(45deg);
      }

      &:nth-child(3) {
        transform: rotate(-45deg);
      }

      &:nth-child(4) {
        top: 18px;
        width: 0%;
        left: 50%;
      }
    }
  }
}
`;

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [navEnabled, setNavEnabled] = useState(false);

  return (
    <HeaderWrapper>
      <Link href="/">
        <LogoImg src={logoSVG} />
      </Link>
      <Nav className={navEnabled && 'active'}>
        <Link href="/" passHref>
          <NavLink>Home</NavLink>
        </Link>
        <Link href="/network" passHref>
          <NavLink>Network</NavLink>
        </Link>
        <Link href="/governance" passHref>
          <NavLink>Governance</NavLink>
        </Link>
        <CommunityMenuWrapper
          onMouseEnter={() => setShowMenu(true)}
          onMouseLeave={() => setShowMenu(false)}
          onClick={() => setShowMenu(!showMenu)}
        >
          <NavLinkCommunity>
            Community
            {' '}
            <NavLinkCommunityIcon src={chevronDown} />
          </NavLinkCommunity>
          {showMenu && (
            <CommunityMenu>
              <CommunityMenuLink href="https://blog.dock.io">
                Blog
              </CommunityMenuLink>
              <CommunityMenuLink href="https://community.dock.io">
                Forum
              </CommunityMenuLink>
              <CommunityMenuSpan>Connect with us</CommunityMenuSpan>
              <CommunityMenuIcons>
                <CommunityMenuIcon
                  href="https://t.me/dockio"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={telegramIcon} />
                </CommunityMenuIcon>
                <CommunityMenuIcon
                  href="https://twitter.com/docknetwork"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={twitterIcon} />
                </CommunityMenuIcon>
                <CommunityMenuIcon
                  href="https://www.reddit.com/r/dockio"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={redditIcon} />
                </CommunityMenuIcon>
                <CommunityMenuIcon
                  href="https://www.facebook.com/docknetwork/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={facebookIcon} />
                </CommunityMenuIcon>
                <CommunityMenuIcon
                  href="https://github.com/getdock"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={githubIcon} />
                </CommunityMenuIcon>
              </CommunityMenuIcons>
            </CommunityMenu>
          )}
        </CommunityMenuWrapper>
      </Nav>
      <HamburgerIcon
        onClick={() => setNavEnabled(!navEnabled)}
        className={navEnabled && 'active'}
      >
        <span />
        <span />
        <span />
        <span />
      </HamburgerIcon>
    </HeaderWrapper>
  );
};

export default Header;
