import Document, { Html, Head, Main, NextScript } from "next/document";
import React from "react";

class CustomDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <script>
          if(ethereum) ethereum.autoRefreshOnNetworkChange = false;
        </script>
        <Head />
        <body>
          <Main />
          <NextScript />

          <script src="https://unpkg.com/share-api-polyfill/dist/share-min.js"></script>
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
