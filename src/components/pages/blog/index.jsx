import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import { selectSearchQuery } from '@/features/search/searchSlice'
import { selectAllPosts, selectResultsCount, fetchPosts } from '@/features/posts/postsSlice'
import PageWrapper from '@/components/dom/pagewrapper'
import Stack from "@/components/dom/flex/stack"
import { PostListItem } from './PostListItem'
import { Pagination } from './Pagination'
import Search from '@/components/dom/search'
import Text from '@/components/dom/text'
import { Loader } from '@/components/dom/loader'
import Card from '@/components/dom/card'
import updateQuery from '@/utils/updateQuery'

export const BlogPage = ({ initialPosts, currentPage, totalPostCount }) => {
  const router = useRouter()
  const { query } = router
  const page = Number(query?.page) || currentPage || 1

  // search
  const searchQuery = useSelector(selectSearchQuery)

  // posts
  const dispatch = useDispatch()
  const posts = useSelector(selectAllPosts)
  const resultsCount = useSelector(selectResultsCount)
  const postStatus = useSelector(state => state.posts.status)
  const postError = useSelector(state => state.posts.error)

  // fetch for first mount
  useEffect(() => {
    if (postStatus === 'idle') {
      dispatch(fetchPosts({ page }))
    }
  }, [postStatus, dispatch, page])

  // fetch for when query changes
  useEffect(() => {
    if (searchQuery) {
      dispatch(fetchPosts({ page, query: searchQuery }))
    }
  }, [searchQuery, dispatch, page])

  // fetch for when page changes
  useEffect(() => {
    dispatch(fetchPosts({ page }))
  }, [dispatch, page])

  // reset page to 1 when query changes
  useEffect(() => {
    if (searchQuery && query.page != 1) {
      updateQuery({ router, key: 'page', value: '1' })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery])

  let content = initialPosts?.map(({ id, ...post }) => <PostListItem key={id} id={id} {...post} />)

  if (postStatus === 'loading') {
    content = <Loader />
  } else if (postStatus === 'succeeded') {
    content = posts?.map(({ id, ...post }) => <PostListItem key={id} id={id} {...post} />)
  } else if (postStatus === 'failed') {
    content = <Card status="error"><Text status="error">{postError}</Text></Card>
  }

  return (
    <PageWrapper as="main">
      <Stack css={{ paddingY: '$4', marginY: '$5', borderBottom: '1px solid $text_muted' }}>
        <Search css={{ marginLeft: 'auto' }} />
      </Stack>
      <Stack gap={[3, 4, 5]} column>
        {content}
      </Stack>
      <Pagination resultsCount={resultsCount || totalPostCount} currentPage={page} />
    </PageWrapper>
  )
}

export default BlogPage
