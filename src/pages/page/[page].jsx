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
export const getStaticProps = async ({ params: { page } }) => {
  // posts
  const currentPage = page
  const allPosts = await getAllPosts({ comments: false })
  const { endpoint, postsByPage } = await getPostsByPage({ page: currentPage })
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

// what pages (paths) to generate - one for each page of 5 posts
export const getStaticPaths = async () => {
  const allPosts = await getAllPosts({ comments: false })
  const totalPostCount = allPosts.length
  const pageCount = totalPostCount / PAGE_SIZE
  const paths = Array.from(
    { length: pageCount - 1 },
    (_, i) => ({ params: { page: (i + 2).toString() } })
  )

  return {
    paths,
    fallback: false
  }
}