import Head from 'next/head'
import { SWRConfig } from 'swr'

import { PAGE_SIZE, getAllPosts, getPostsByPage } from '@/utils/api'
import BlogPage from '@/components/pages/blog'

export default function Home({ fallback = {}, currentPage, pageCount }) {
  return (
    // Pass the pre-fetched data as the initial value of all SWR hooks
    <SWRConfig value={{ fallback }}>
      <Head>
        <title>Page {currentPage} | Attuned</title>
        <meta name="description" content="The latest from us at Attuned" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BlogPage page={currentPage} pageCount={pageCount} />
    </SWRConfig>
  )
}

// prerendering
export const getStaticProps = async () => {
  // posts
  const currentPage = 1
  const allPosts = await getAllPosts({ comments: false })
  const { endpoint, postsByPage } = await getPostsByPage({ page: currentPage, comments: true })
  const totalPostCount = allPosts.length
  const pageCount = totalPostCount / PAGE_SIZE

  return {
    props: {
      currentPage,
      pageCount,
      fallback: {
        [endpoint]: postsByPage
      }
    }
  }
}