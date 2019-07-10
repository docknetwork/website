import React from 'react';
import styled from 'styled-components';
import media from '../helpers/media';

export const HeaderMarker = styled.div`
  width: 39px;
  height: 2px;
  background: rgb(32, 28, 60);
  margin: 0 0 10px 0;
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
`;

export const SectionTitle = styled.h4`
  font-weight: 600;
  color: rgb(32, 33, 46);
  max-width: 683px;
  line-height: 1.38;
  font-size: 32px;
  max-width: 311px;

  @media ${media.medium} {
    line-height: 1.25;
    font-size: 40px;
    max-width: 100%;
  }
`;

export const SectionSubtitle = styled.p`
  font-weight: normal;
  color: rgb(49, 42, 67);
  margin: 20px 0 0 0;
  max-width: 683px;
  font-size: 16px;
  line-height: 1.75;

  @media ${media.medium} {
    font-size: 18px;
    line-height: 1.56;
  }
`;

export const Section = styled(Wrapper)`
  padding: 40px 20px 0 20px;
  flex-direction: column-reverse;

  @media ${media.medium} {
    padding: 170px 0 0 0;
    flex-direction: row;
  }
`;

export const SectionColumn = styled(Section)`
  flex-direction: column;

  @media ${media.medium} {
    flex-direction: column;
    padding: 140px 0 0 0;
  }
`;
