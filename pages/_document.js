import Document, { Head, Main, NextScript } from "next/document";
import React from "react";

class CustomDocument extends Document {
  render() {
    return (
      <html lang="en">
        <script>
          if(ethereum) ethereum.autoRefreshOnNetworkChange = false;
        </script>
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />

          <script src="https://unpkg.com/share-api-polyfill/dist/share-min.js"></script>
        </body>
      </html>
    );
  }
}

export default CustomDocument;
