import Document, { Main, NextScript } from 'next/document';
import React from 'react';

class CustomDocument extends Document {
  render() {
    return (
      <html lang="en">
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