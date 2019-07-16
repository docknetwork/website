import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styled from 'styled-components';
import media from '../../helpers/media';

import EthService from '../../components/eth/eth.service';
import BlankHero from '../../components/sections/blank-hero';
import Page from '../../layouts/main';

import arrowLeftSVG from '../../assets/images/icons/arrow-left-header.svg';

const Wrapper = styled.div`
  max-width: 764px;
  width: 100%;
  margin: 0 auto;
  transform: translate(0, -250px);
`;

const Title = styled.h1`
  font-family: Poppins;
  font-size: 30px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.33;
  letter-spacing: normal;
  color: rgb(255, 255, 255);
`;

const Description = styled.p`

`;

const Content = styled.div`
  width: 100%;
  height: 592px;
  border-radius: 3px;
  box-shadow: 0 19px 56px -20px rgba(0, 0, 0, 0.2);
  background-color: rgb(255, 255, 255);
  margin: 55px auto 0 auto;
  padding: 36px 36px 30px 36px;
`;

const BackButton = styled.a`
  margin: 0 0 40px 0;
  cursor: pointer;
  display: block;
`;

const Proposal = (props) => {
  const router = useRouter();
  // console.log('props', props)

  return (
    <Page>
      <BlankHero />
      <Wrapper>
        <Link to="/governance" passHref>
          <BackButton>
            <img src={arrowLeftSVG}/>
          </BackButton>
        </Link>
        <Title>{props.title}</Title>

        <Content>
          <Description>
            {props.description}
          </Description>
        </Content>
      </Wrapper>
    </Page>
  );
};

Proposal.getInitialProps = async function({ query }) {
  const eth = EthService.getInstance();
  await eth.init();
  const proposal = await eth.loadProposal(query.id);
  return {
    ...proposal
  };
};

export default Proposal;
