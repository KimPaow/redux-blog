import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'

import { selectSearchQuery } from '@/redux/slices/searchSlice'
import { useGetPostsQuery } from '@/redux/api/blogApi'

import Layout from '@/components/_common/layout'
import Stack from '@/components/_common/flex/stack'
import Text from '@/components/_common/text'
import Loader from '@/components/_common/loader'
import Card from '@/components/_common/card'

import PostListItem from '@/components/pages/blog/PostListItem'
import Pagination from '@/components/pages/blog/Pagination'

export const BlogPage = () => {
  const searchQuery = useSelector(selectSearchQuery)
  const router = useRouter()
  const page = Number(router?.query?.page) || 1

  const {
    data: posts,
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetPostsQuery({ page, query: searchQuery })

  /**
   * TODO: append search query to router query so you can link 
   * to search results (probably won't do this for this assignment)
   */

  let content = null

  if (isLoading) {
    // TODO: We should probably make a skeleton for results while loading to avoid CLS (layout shift), minHeight is a temp fix
    content = <Loader css={{ minHeight: '75vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }} />
  } else if (isSuccess) {
    content = posts?.map(({ id, ...post }) => <PostListItem data-id={id} key={id} id={id} {...post} />)
  } else if (isError) {
    content = <Card status="error"><Text status="error">{JSON.stringify(error, null, 2)}</Text></Card>
  }

  return (
    <Layout as="main">
      <Stack gap={[4, 4, 5]} column>
        {content}
      </Stack>
      <Pagination currentPage={page} query={searchQuery} />
    </Layout>
  )
}

export default BlogPage
