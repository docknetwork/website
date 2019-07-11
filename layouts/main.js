import Head from 'next/head';
import Footer from '../components/footer';

export default ({ children }) => (
  <>
    <Head>
      <link href="https://fonts.googleapis.com/css?family=Lato|Open+Sans:400,600,700|Poppins:400,600i,700&display=swap" rel="stylesheet" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="initial-scale=1, maximum-scale=1, user-scalable=no, width=device-width, minimal-ui"
      />
      <title>Dock</title>
      <script type="text/javascript">{`
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
      `}</script>
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
    { children }
    <Footer />
  </>
)
