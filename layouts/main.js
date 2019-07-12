import { ServerStyleSheet } from 'styled-components';
import Safe from 'react-safe';
import Head from 'next/head';

import Footer from '../components/footer';

import favicon16 from '../assets/favicons/favicon-16x16.png';
import favicon32 from '../assets/favicons/favicon-32x32.png';
import favicon96 from '../assets/favicons/favicon-96x96.png';

const defaultDescription =
  'Dock makes it easy for organizations to issue verifiable digital credentials using blockchain and empowers individuals to own and control their digital records.';
const defaultTitle = 'Micro Credentials & Digital Badges on Blockchain';

export default class MainLayout extends React.Component {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage((App) => (props) =>
      sheet.collectStyles(<App {...props} />),
    );

    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
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
          <meta name="og:title" content={defaultTitle} />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="wot-verification" content="69f8c3e17a9ca94cf076" />
          <meta name="fragment" content="!" />
          <meta name="description" content={defaultDescription} />
          <meta name="og:description" content={defaultDescription} />

          <title>Dock</title>
          <Safe.script type="text/javascript" jsx global>{`
            var _cio = _cio || [];
            (function() {
                var a,b,c;a=function(f){return function(){_cio.push([f].
                concat(Array.prototype.slice.call(arguments,0)))}};b=["load","identify",
                "sidentify","track","page"];for(c=0;c<b.length;c++){_cio[b[c]]=a(b[c])};
                var t = document.createElement('script'),
                    s = document.getElementsByTagName('script')[0];
                t.async = true;
                t.id    = 'cio-tracker';
                t.setAttribute('data-site-id', 'b9ec817a56741a057290');
                t.src = 'https://assets.customer.io/assets/track.js';
                s.parentNode.insertBefore(t, s);
            })();
          `}</Safe.script>
          {this.props.styleTags}
        </Head>
        <style jsx global>{`
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
        { this.props.children }
        <Footer />
      </>
    );
  }
}
