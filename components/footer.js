import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import logoSVG from '../assets/images/dock-logo.svg';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  align-items: flex-start;
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
    </Wrapper>
  </Root>
);

export default Footer;
