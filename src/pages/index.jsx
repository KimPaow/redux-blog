import Head from 'next/head'
import { SWRConfig } from 'swr'

import { POSTS_ENDPOINT, PAGE_SIZE, fetcher, getPostsByPage, getCommentsByPostId } from '@/utils/api'
import BlogPage from '@/components/pages/blog'

export default function Home({ fallback = {}, currentPage, pageCount, comments }) {
  return (
    <SWRConfig value={{ fallback }}>
      <Head>
        <title>Attuned Blog</title>
        <meta name="description" content="The latest from us at Attuned" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BlogPage page={currentPage} pageCount={pageCount} comments={comments} />
    </SWRConfig>
  )
}

export const getStaticProps = async () => {
  const currentPage = 1
  const allPosts = await fetcher(POSTS_ENDPOINT)
  const { endpoint, postsByPage } = await getPostsByPage({ page: currentPage })
  const totalPostCount = allPosts.length
  const pageCount = totalPostCount / PAGE_SIZE

  const comments = {}
  const postIds = postsByPage.map(p => p.id)

  for (const id of postIds) {
    comments[id] = await getCommentsByPostId({ postId: id })
  }

  return {
    props: {
      comments,
      currentPage,
      pageCount,
      fallback: {
        [endpoint]: postsByPage
      }
    }
  }
}