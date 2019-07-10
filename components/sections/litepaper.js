import React from 'react';
import styled from 'styled-components';
import media from '../../helpers/media';

import {
  SectionTitle,
  SectionSubtitle,
} from '../../components/sections';
import { UnderlineLink } from '../underline-link';

import arrowRightSVG from '../../assets/images/icons/arrow-right-dark.svg';
import litepaperPNG from '../../assets/images/home/litepaper.png';

const Root = styled.div`
  display: flex;
  justify-content: center;
  background-color: rgb(239, 239, 245);
  flex-direction: column-reverse;
  padding: 50px 20px 10px 20px;

  @media ${media.medium} {
    padding: 67px 0 63px 0;
    flex-direction: row;
  }
`;

const LitepaperContent = styled.div`
  display: flex;
  flex-direction: column;

  @media ${media.medium} {
    margin: 90px 0 0 0;
  }
`;

const LitepaperImage = styled.img`
  width: 228px;
  margin: 65px auto 0 auto;

  @media ${media.medium} {
    width: 213px;
    margin: 65px 40px 0 0;
  }
`;

const LitepaperSection = () => (
  <Root>
      <LitepaperImage src={litepaperPNG}/>
      <LitepaperContent>
        <SectionTitle>
          Read the Litepaper
        </SectionTitle>
        <SectionSubtitle>
          Overview of the Dock blockchain and network.
        </SectionSubtitle>
        <UnderlineLink>
          Read Litepaper
        </UnderlineLink>
      </LitepaperContent>
  </Root>
);


export default LitepaperSection;
