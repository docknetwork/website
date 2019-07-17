import React, {useState} from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styled from 'styled-components';
import media from '../../helpers/media';

import EthService from '../../components/eth/eth.service';
import BlankHero from '../../components/sections/blank-hero';
import Page from '../../layouts/main';

import arrowLeftSVG from '../../assets/images/icons/arrow-left-header.svg';
import metamaskLogo from '../../assets/images/proposal/metamask.png';

const metamaskInstallUrl = 'https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en';

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

const MetamaskBanner = styled.div`
  display: flex;
  flex-wrap: initial;
  align-items: center;
  width: 100%;
  padding: 20px 15px;
  background-color: #f1f4f5;
  box-shadow: 0 0.2rem 0 0 #e5e5e5;
  border-left: 0.2rem #f7c279 solid;
  font-size: 14px;
  margin-bottom: 40px;
`;

const MetamaskLogo = styled.img`
  width: 49px;
  height: 49px;
  margin-right: 1.5rem;
`;

const MetamaskBannerContent = styled.p`
  margin: 0;
  color: #70707a;
  line-height: 1.43;
  font-family: Lato;

  strong {
    font-family: Lato;
  }

  a {
    color: #569dc0;
    text-decoration: none;
  }
`;

const ProposalSubtitle = styled.div`
  width: 100%;
  font-size: 14px;
  line-height: 1.86;
  color: #bababa;
  display: flex;
  margin: 20px 0 40px 0;

  > span {
    margin-right: 30px;
  }

  a {
    text-decoration: none;
    color: #6fbbe1;
  }
`;

const Proposal = (props) => {
  const router = useRouter();
  const eth = EthService.getInstance();
  const [account, setAccount] = useState();
  const [tokens, setTokens] = useState();

  if (!account && typeof window !== 'undefined') {
    eth.getAccount()
      .then(account => {
        if (account) {
          eth.getTokens(account)
            .then(balance => {
              console.log('balancebalance', balance)
              setAccount(account);
              setTokens(balance);
            });
        }
      });
  }

  console.log('props', props)

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
          {eth.hasMetaMask() ? (account ? (tokens ? (
            <MetamaskBanner>
              <MetamaskLogo src={metamaskLogo} />
              <MetamaskBannerContent>
                <strong>You can vote!</strong><br />
                Your wallet {account} has {tokens} DOCK tokens to use.
              </MetamaskBannerContent>
            </MetamaskBanner>
          ) : ((
            <MetamaskBanner>
              <MetamaskLogo src={metamaskLogo} />
              <MetamaskBannerContent>
                <strong>You do not have DOCK tokens in your wallet on MetaMask</strong><br />
                If you have DOCK tokens in another wallet, you can use MyCrypto to vote.&nbsp;
                <a href="https://help.dock.io/voting-center/vote-with-mycrypto" target="_blank">Learn more.</a><br />
                MetaMask wallet address: {account}
              </MetamaskBannerContent>
            </MetamaskBanner>
          ))) : (
            <MetamaskBanner>
              <MetamaskLogo src={metamaskLogo} />
              <MetamaskBannerContent>
                <strong>Unlock MetaMask to Vote</strong><br />
                To vote, you will need to unlock your MetaMask browser exension and refresh the page.&nbsp;
                <a href="https://help.dock.io/dock-io-app/how-does-voting-work" target="_blank">
                  Learn more.
                </a>
              </MetamaskBannerContent>
            </MetamaskBanner>
          )) : (
            <MetamaskBanner>
              <MetamaskLogo src={metamaskLogo} />
              <MetamaskBannerContent>
                <strong>Install MetaMask to Vote</strong><br />
                To vote, you will need to install MetaMask. It’s a free browser extension to manage your Ethereum identity.&nbsp;
                <a href={metamaskInstallUrl} target="_blank">
                  <span class="no-mobile">Install MetaMask</span> <span svg-sprite="arrow-right-large"></span>
                </a>
                or&nbsp;
                <a href="https://help.dock.io/voting-center/vote-with-mycrypto"
                  class="proposal-details-modal-content-etherwallet-info"
                  target="_blank">
                  Vote with MyCrypto
                </a>
              </MetamaskBannerContent>
            </MetamaskBanner>
          )}
          <Description>
            {props.description}
          </Description>
          <ProposalSubtitle>
            <span>
              1,779,357 DOCK Voted
            </span>
            <span>
              Contract:&nbsp;
              <a href={`https://etherscan.io/address/${props.txId}`} target="_blank">
                {props.txId}
              </a>
            </span>
          </ProposalSubtitle>

          {props.options.map(option => (
            <div>
              {option}
            </div>
          ))}
        </Content>
      </Wrapper>
    </Page>
  );
};


Proposal.getInitialProps = async function({ query }) {
  console.log('getInitialProps')
  const eth = EthService.getInstance();
  await eth.init();
  const proposal = await eth.loadProposal(query.id);
  return {
    ...proposal
  };
};

export default Proposal;
