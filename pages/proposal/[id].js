import React, {useState} from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styled from 'styled-components';
import media from '../../helpers/media';

import EthService from '../../components/eth/eth.service';
import {Poll} from '../../components/eth/contracts';
import BlankHero from '../../components/sections/blank-hero';
import Page from '../../layouts/main';

import checkSVG from '../../assets/images/icons/check.svg';
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
  margin: 20px 0 20px 0;

  > span {
    margin-right: 30px;
  }

  a {
    text-decoration: none;
    color: #6fbbe1;
  }
`;

const ProposalOption = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    width: 100%;
    margin-bottom: 20px;
    cursor: pointer;
`;

const ProposalCheckmark = styled.div`
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 22px;
    height: 22px;
    background-color: #f7f7f7;
    color: #ffffff;
`;

const ProposalCheckmarkImage = styled.img`
  width: 12px;
`;

const ProposalOptionTitle = styled.h2`
    margin: 18px 15px;
    font-size: 18px;
    font-weight: 600;
    word-wrap: break-word;
    max-width: 90%;
`;

const ProposalOptionStats = styled.span`
    margin-left: auto;
    color: #95959f;
    transition: 1s all cubic-bezier(0.08, 0.825, 0.135, 1.005);
`;

const ProposalOptionBar = styled.div`
    order: 4;
    display: flex;
    position: relative;
    width: 100%;
    height: 3px;
    background-color: #efeff0;
`;

const ProposalOptionBarInner = styled.div`
    display: flex;
    height: 100%;
    background-color: #7c47ab;
    transition: 0.75s all cubic-bezier(0.08, 0.825, 0.135, 1.005);
`;

const VoteButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 40px 0 0 auto;
  width: 186px;
  height: 52px;
  border-radius: 5px;
  border: solid 2px rgb(75, 107, 220);
  font-family: Lato;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  color: rgb(75, 107, 220);
  text-decoration: none;
  cursor: pointer;
`;

const Proposal = (props) => {
  const router = useRouter();
  const eth = EthService.getInstance();
  const [account, setAccount] = useState();
  const [tokens, setTokens] = useState();
  const [isVoting, setIsVoting] = useState();
  const [selectedOption, setSelectedOption] = useState();

  console.log('props', props);

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

  function vote() {
    if (!isVoting) {
      setIsVoting(true);

      const params = {
        from: account,
        gas: 150000
      };

      const contract = Poll.at(props.txId, params);
      return contract.vote(props.options.indexOf(selectedOption) + 1, params)
      .then(txHash => eth.getTransactionReceipt(txHash))
      .then(receipt => {
        if (receipt.status !== '0x0') {
            // this.resultsShown = true;
            // if (!this.proposal.voted) {
            //   this.proposal.voted = true;
            //   this.proposal.dockStaked[
            //     this.proposal.options.indexOf(this.selectedVote)
            //   ] += this.tokens;
            //   this.proposal.staked += this.tokens;
            // }
            // this.proposal.votedOn = this.selectedVote;
            setSelectedOption(null);
            setIsVoting(false);
            console.log('Successfully Submitted');
        } else {
          setIsVoting(false);
          console.log('failed to vote, invalid status')
        }
      })
      .catch(error => {
        setIsVoting(false);
        if (error.toString().indexOf('denied') === -1) {
          console.log('failed to vote, gas maybe?', error)
        }
      });
    }
  }

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
                  <span>Install MetaMask</span> <span svg-sprite="arrow-right-large"></span>
                </a>
                or&nbsp;
                <a href="https://help.dock.io/voting-center/vote-with-mycrypto"
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
              {props.totalDockStaked} DOCK Voted
            </span>
            <span>
              Contract:&nbsp;
              <a href={`https://etherscan.io/address/${props.txId}`} target="_blank">
                {props.txId}
              </a>
            </span>
          </ProposalSubtitle>

          {props.options.map((option, index) => {
            const dockStaked = props.dockStaked[index];
            const percentage = Math.floor(dockStaked / props.totalDockStaked) * 100;
            const isWinningOption = props.highestStakeIndex === index;
            return (
              <ProposalOption onClick={() => {
                if (!props.isClosed && account && tokens > 0) {
                  setSelectedOption(option);
                }
              }}>
                <ProposalCheckmark>
                  {((selectedOption === option) || (props.isClosed && isWinningOption)) && (
                    <ProposalCheckmarkImage src={checkSVG}/>
                  )}
                </ProposalCheckmark>
                <ProposalOptionTitle>
                  {option}
                </ProposalOptionTitle>
                <ProposalOptionStats>
                  {percentage}% - {dockStaked} DOCK
                </ProposalOptionStats>
                <ProposalOptionBar>
                  <ProposalOptionBarInner style={{
                    width: percentage + '%'
                  }}></ProposalOptionBarInner>
                </ProposalOptionBar>
              </ProposalOption>
            );
          })}

          {selectedOption && (
            <VoteButton onClick={vote}>
              {isVoting ? 'Submitting vote...' : 'Vote'}
            </VoteButton>
          )}
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
