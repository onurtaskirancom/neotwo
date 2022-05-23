import Document, { Html, Head, Main, NextScript } from 'next/document';
import getConfig from 'next/config';
// import Prism from "prismjs";
// import "prismjs/themes/prism-twilight.css"
const { publicRuntimeConfig } = getConfig();



class MyDocument extends Document {
  setGoogleTags() {
    if (publicRuntimeConfig.PRODUCTION) {
      return {
        __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-0FD3WEHDCR');
        `
      };
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link
            rel="stylesheet preload prefetch"
            as="style"
            href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css"
          />
          <link rel="stylesheet preload prefetch" href="/static/css/styles.css" as="style"/>
          <link rel="shortcut icon" href="#" />
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-0FD3WEHDCR"></script>
          <script dangerouslySetInnerHTML={this.setGoogleTags()} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument