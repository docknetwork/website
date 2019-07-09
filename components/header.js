import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import logoSVG from '../assets/images/dock-logo.svg';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
`;

const HeaderWrapper = styled(Wrapper)`
  padding-top: 30px;
  align-items: center;
`;

const Nav = styled.div`
  margin-left: auto;
  display: flex;
`;

const NavLink = styled.a`
  font-size: 16px;
  line-height: 1.63;
  text-align: center;
  color: rgb(255, 255, 255);
  transition: color 0.2s ease-in-out;
  border-bottom: solid 2px transparent;
  margin-left: 30px;
  padding: 4px;
  cursor: pointer;

  &:hover {
    color: rgb(75, 107, 220);
  }

  .active {
    border-color: rgb(75, 107, 220);
  }
`;

const Header = () => (
  <HeaderWrapper>
    <img src={logoSVG} />
    <Nav>
      <Link href="/">
        <NavLink>Home</NavLink>
      </Link>
      <Link href="/network">
        <NavLink>Network</NavLink>
      </Link>
      <Link href="/governanace">
        <NavLink>Governanace</NavLink>
      </Link>
      <NavLink>Communty</NavLink>
    </Nav>
  </HeaderWrapper>
);

export default Header;
