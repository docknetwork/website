import React from 'react';
import styled from 'styled-components';
import media from '../helpers/media';
import arrowRightSVG from '../assets/images/icons/arrow-right-dark.svg';

const Root = styled.a`
  border-bottom: 3px solid rgb(75, 107, 220);
  font-size: 16px;
  font-weight: bold;
  line-height: 1.56;
  padding: 4px 5px;
  color: rgb(60, 60, 72);
  align-self: flex-start;
  margin-top: 13px;
  text-decoration: none;

  @media ${media.medium} {
    margin-top: 30px;
    font-size: 18px;
  }
`;

const UnderlineLinkIcon = styled.img`
  margin-left: 15px;
`;

export const UnderlineLink = ({href, children}) => (
  <Root href={href}>
    {children}
    <UnderlineLinkIcon src={arrowRightSVG}/>
  </Root>
);


export const UnderlineLinkAligned = styled(UnderlineLink)`
  margin-top: auto;
`;
