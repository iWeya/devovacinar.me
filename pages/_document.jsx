import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <title>Devo Vacinar-me?</title>

          <meta name="title" content="Devo Vacinar-me?"/>
          <meta name="description" content="Verifique se você deve se vacinar."/>
          <meta property="og:type" content="website"/>
          <meta property="og:url" content="https://devovacinar.me/"/>
          <meta property="og:title" content="Devo Vacinar-me?"/>
          <meta property="og:description" content="Verifique se você deve se vacinar."/>
          <meta property="og:image" content="/og-image.png"/>
          <meta property="twitter:card" content="summary_large_image"/>
          <meta property="twitter:url" content="https://devovacinar.me/"/>
          <meta property="twitter:title" content="Devo Vacinar-me?"/>
          <meta property="twitter:description" content="Verifique se você deve se vacinar."/>
          <meta property="twitter:image" content="/og-image.png"/>

          <link
            href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>💉</text></svg>"
            rel="icon"
          />
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
