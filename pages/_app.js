import React from 'react';
import withGA from 'next-ga';
import Router from 'next/router';
import App from 'next/app';

class MyApp extends App {
  static async getInitialProps({Component, ctx}) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return {pageProps};
  }

  render() {
    const {Component, pageProps} = this.props;
    return (
      <Component {...pageProps} />
    );
  }
}

export default withGA('UA-110316080-1', Router)(MyApp);
