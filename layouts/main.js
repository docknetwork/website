import React from 'react';
import styled, { ServerStyleSheet } from 'styled-components';
import Safe from 'react-safe';
import Head from 'next/head';
import media from '../helpers/media';

import Footer from '../components/footer';

import favicon16 from '../assets/favicons/favicon-16x16.png';
import favicon32 from '../assets/favicons/favicon-32x32.png';
import favicon96 from '../assets/favicons/favicon-96x96.png';

const pageDesc = 'Dock is a decentralized network enabling organizations to produce digital credentials at scale.';
const pageTitle = 'Dock : High-performance blockchain credentials';


const Banner = styled.a`
  background-image: linear-gradient(to right, rgb(75, 107, 220), rgb(94, 77, 172));
  font-size: 18px;
  line-height: 1.56;
  text-align: center;
  color: rgb(255, 255, 255);
  width: 100%;
  display: flex;
  text-decoration: none;
  flex-direction: column;
  padding: 10px 0;
  align-items: center;

  @media ${media.medium} {
    flex-direction: row;
    justify-content: center;
    padding: 0;
    height: 52px;
  }
`;

const BannerButton = styled.span`
  display: flex;
  color: rgb(255, 255, 255);
  margin-left: 12px;
  text-decoration: none;

  > img {
    margin-left: 20px;
  }
`;

import arrowRightWhiteSVG from '../assets/images/icons/arrow-right-white.svg';











const ModalHeader = styled.div`
  width: 100%;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.06);
  background-color: rgb(239, 239, 245);
  display: flex;
  flex-direction: column;
  padding-top: 33px;
`;

const ModalContent = styled.div`
  padding: 35px 30px;
  font-size: 18px;
  line-height: 1.56;
  text-align: center;

  &, a {
    color: rgb(49, 42, 67);
  }

  @media ${media.medium} {
    max-width: 433px;
    width: 100%;
    margin: 0 auto;
    padding: 30px 0;
  }
`;

const ModalFooter = styled.div`
  padding: 0 0 47px 0;
  text-align: center;
`;

const ModalTitle = styled.h4`
  font-family: Poppins;
  font-size: 20px;
  line-height: 1.67;
  text-align: center;
  color: rgb(53, 188, 152);
  font-weight: normal;
  margin: 20px 0;

  @media ${media.medium} {
    font-size: 24px;
  }
`;

const ModalSubtitle = styled.h3`
  font-family: Poppins;
  font-size: 46px;
  font-weight: bold;
  line-height: 0.61;
  text-align: center;
  color: rgb(53, 188, 152);
  margin-bottom: 21px;

  @media ${media.medium} {
    font-size: 66px;
  }
`;

const ModalImage = styled.img`
  margin-top: auto;
`;

import modalImageSVG from '../assets/images/verifable-modal/image.svg';
import arrowSVG from '../assets/images/verifable-modal/arrow.svg';

import Modal from '../components/modal';
import { UnderlineLinkAligned } from '../components/underline-link';

// TODO: move to separate file

const VerifiableModal = ({onClose}) => (
  <Modal onClose={onClose}>
    <ModalHeader>
      <img src={arrowSVG}/>
      <ModalTitle>
        The Dock app has moved to
      </ModalTitle>
      <ModalSubtitle>
        Verifiable
      </ModalSubtitle>
      <ModalImage src={modalImageSVG}/>
    </ModalHeader>
    <ModalContent>
      The Dock wallet and data control apps have separated from the Dock blockchain project into a brand new home at Verifiable.com.
      &nbsp;
      <a href="https://blog.dock.io/frequently-asked-questions"
        target="_blank"
        rel="noopener noreferrer">
        Learn more
      </a>
      <br /><br />
      <strong>Your Dock account has automatically moved.</strong><br />
      Use your existing login to access your account.
    </ModalContent>
    <ModalFooter>
      <UnderlineLinkAligned href="https://verifiable.com">
        Go to Verifiable
      </UnderlineLinkAligned>
    </ModalFooter>
  </Modal>
);

export default class MainLayout extends React.Component {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage((App) => (props) =>
      sheet.collectStyles(<App {...props} />),
    );

    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
  }

  render() {
    return (
      <>
        <Head>
          <base href="/" />
          <link rel="icon" type="image/png" href={favicon32} sizes="32x32" />
          <link rel="icon" type="image/png" href={favicon96} sizes="96x96" />
          <link rel="icon" type="image/png" href={favicon16} sizes="16x16" />
          <link href="https://fonts.googleapis.com/css?family=Lato|Open+Sans:400,600,700|Poppins:400,600i,700&display=swap" rel="stylesheet" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1, maximum-scale=1, user-scalable=no, width=device-width, minimal-ui"
          />
          <title>{pageTitle}</title>
          <meta name="og:title" content={pageTitle} />
          <meta name="description" content={pageDesc} />
          <meta name="og:description" content={pageDesc} />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="wot-verification" content="69f8c3e17a9ca94cf076" />
          <meta name="fragment" content="!" />
          <Safe.script type="text/javascript" jsx="true" global="true">{`
            var _cio = _cio || [];
            (function() {
                var a,b,c;a=function(f){return function(){_cio.push([f].
                concat(Array.prototype.slice.call(arguments,0)))}};b=["load","identify",
                "sidentify","track","page"];for(c=0;c<b.length;c++){_cio[b[c]]=a(b[c])};
                var t = document.createElement('script'),
                    s = document.getElementsByTagName('script')[0];
                t.async = true;
                t.id    = 'cio-tracker';
                t.setAttribute('data-site-id', 'a33ce60086d6f9497cb1');
                t.src = 'https://assets.customer.io/assets/track.js';
                s.parentNode.insertBefore(t, s);
            })();
          `}</Safe.script>
          {this.props.styleTags}
        </Head>
        <style jsx="true" global="true">{`
          * {
            font-family: 'Open Sans', sans-serif;
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }

          body {
            width: 100%;
          }
        `}</style>

        <Banner href="https://verifiable.com" onClick={e => { e.preventDefault(); e.stopPropagation(); this.setState({ showModal: true }); }}>
          The Dock app has moved to Verifiable.
          <BannerButton>
            Learn more
            <img src={arrowRightWhiteSVG}/>
          </BannerButton>
        </Banner>

        { this.props.children }

        {this.state.showModal && (
          <VerifiableModal onClose={() => { this.setState({ showModal: false }); }} />
        )}
        <Footer />
      </>
    );
  }
}
