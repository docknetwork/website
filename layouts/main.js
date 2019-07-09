import Head from 'next/head';
import Footer from '../components/footer';

export default ({ children }) => (
  <>
    <Head>
      <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,700|Poppins:400,700&display=swap" rel="stylesheet" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
    </Head>
    <style jsx global>{`
      * {
        font-family: 'Open Sans', sans-serif;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }
    `}</style>
    { children }
    <Footer />
  </>
)
