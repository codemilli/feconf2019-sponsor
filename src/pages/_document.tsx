import Document, { Head, Main, NextDocumentContext, NextScript } from 'next/document';
import React from 'react';

export default class MyDocument extends Document {
  public static async getInitialProps(ctx: NextDocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  public render() {
    return (
      <html>
        <Head>
          <meta charSet="UTF-8" />
          <style dangerouslySetInnerHTML={{__html: `
            @font-face {
              font-family: 'Spoqa Han Sans';
              font-weight: 700;
              src: local('Spoqa Han Sans Bold'),
              url('static/fonts/SpoqaHanSans/SpoqaHanSansBold.woff2') format('woff2'),
              url('static/fonts/SpoqaHanSans/SpoqaHanSansBold.woff') format('woff'),
              url('static/fonts/SpoqaHanSans/SpoqaHanSansBold.ttf') format('truetype');
            }
            @font-face {
              font-family: 'Spoqa Han Sans';
              font-weight: 400;
              src: local('Spoqa Han Sans Regular'),
              url('static/fonts/SpoqaHanSans/SpoqaHanSansRegular.woff2') format('woff2'),
              url('static/fonts/SpoqaHanSans/SpoqaHanSansRegular.woff') format('woff'),
              url('static/fonts/SpoqaHanSans/SpoqaHanSansRegular.ttf') format('truetype');
            }
          `}}/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
