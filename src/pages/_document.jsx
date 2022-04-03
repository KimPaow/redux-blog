import Document, { Html, Head, Main, NextScript } from 'next/document'
import { getCssText } from '@/theme/stitches.config';

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
            rel="stylesheet"
          />
          <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
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