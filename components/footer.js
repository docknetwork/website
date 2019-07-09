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

const Root = styled.div`
  background-color: rgb(8, 0, 34);
  padding: 50px 0;
  width: 100%;
  height: 238px;
`;

const Footer = () => (
  <Root>
    <Wrapper>
      <img src={logoSVG} />
      hello world
    </Wrapper>
  </Root>
);

export default Footer;
