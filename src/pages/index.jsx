import Head from 'next/head'
import Image from 'next/image'

import Box from '@/components/dom/box'
import Text from '@/components/dom/text'
import PageWrapper from '@/components/dom/pagewrapper'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Attuned Blog</title>
        <meta name="description" content="The latest from us at Attuned" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageWrapper as="main">
        <Box>
          <Text body>Hello World</Text>
        </Box>
      </PageWrapper>
    </div>
  )
}
