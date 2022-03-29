import Head from 'next/head'

import { client } from '@/utils/api/client'
import { buildEndpoint } from '@/utils/api'
import BlogPage from '@/components/pages/blog'

export default function Home({ initialPosts = {}, currentPage, totalPostCount }) {
  return (
    // Pass the pre-fetched data as the initial value of all SWR hooks
    <>
      <Head>
        <title>Page {currentPage} | Attuned</title>
        <meta name="description" content="The latest from us at Attuned" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BlogPage initialPosts={initialPosts} currentPage={currentPage} totalPostCount={totalPostCount} />
    </>
  )
}

// prerendering
export const getStaticProps = async () => {
  const currentPage = 1

  // get the length for all posts (for prerendering pagination)
  const lengthEndpoint = buildEndpoint({ page: false, comments: false, size: false })
  const allPosts = await client.get(lengthEndpoint)

  // get the posts for the first page (for prerendering list)
  const endpoint = buildEndpoint({ page: currentPage })
  const { data } = await client.get(endpoint)

  return {
    props: {
      totalPostCount: allPosts?.length || 0,
      currentPage,
      initialPosts: data
    }
  }
}