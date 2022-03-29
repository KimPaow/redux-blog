import Head from 'next/head'
import BlogPage from '@/components/pages/blog'

export default function Home() {
  return (
    // Pass the pre-fetched data as the initial value of all SWR hooks
    <>
      <Head>
        <title>Attuned Blog</title>
        <meta name="description" content="The latest from us at Attuned" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BlogPage />
    </>
  )
}