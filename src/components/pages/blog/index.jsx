import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import { AnimatePresence } from "framer-motion"

import { selectSearchQuery } from '@/features/search/searchSlice'
import { selectAllPosts, selectResultsCount, fetchPosts, clearPosts } from '@/features/posts/postsSlice'
import { setSearchQuery } from '@/features/search/searchSlice'
import PageWrapper from '@/components/dom/pagewrapper'
import Stack from "@/components/dom/flex/stack"
import { PostListItem } from './PostListItem'
import { Pagination } from './Pagination'
import Search from '@/components/dom/search'
import Text from '@/components/dom/text'
import { Loader } from '@/components/dom/loader'
import Card from '@/components/dom/card'

// search
const handleSubmitSearch = ({ page, router, dispatch, event }) => {
  event.preventDefault()
  dispatch(clearPosts())
  dispatch(setSearchQuery(event?.target?.elements?.search?.value))

  // navigate to page 1 after searching
  if (page === 1) {
    // edge case: if you search for a term straight after searching for another term
    // it won't trigger a fetch in the useEffect for page changes below
    dispatch(fetchPosts({ page, query: event?.target?.elements?.search?.value }))
  } else {
    // proceed like normal if not on page 1
    router.push('/', null, { shallow: true })
  }
}

export const BlogPage = () => {
  const router = useRouter()
  const { query } = router
  const page = Number(query?.page) || 1
  const dispatch = useDispatch()

  const searchQuery = useSelector(selectSearchQuery)

  // posts
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

  // fetch for when page changes
  useEffect(() => {
    dispatch(fetchPosts({ page, query: searchQuery }))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, page])

  /**
   * TODO: append search query to router query so you can link to search results (probably won't do this for this assignment)
   */

  let content = null

  if (postStatus === 'loading') {
    content = <Loader css={{ minHeight: '75vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }} />
  } else if (postStatus === 'succeeded') {
    content = posts?.map(({ id, ...post }) => <PostListItem key={id} id={id} {...post} />)
  } else if (postStatus === 'failed') {
    content = <Card status="error"><Text status="error">{postError}</Text></Card>
  }

  return (
    <PageWrapper as="main">
      <Stack css={{
        paddingY: '$4',
        marginBottom: '$4',
        borderBottom: '1px solid $text_muted',

        '@sm': {
          marginBottom: '$5',
        }
      }}>
        <Search
          onSubmit={(event) => handleSubmitSearch({ event, page, router, dispatch })}
          css={{ flex: 1, marginLeft: 'auto', '@sm': { flexGrow: '0' } }}
        />
      </Stack>
      <Stack gap={[4, 4, 5]} column>
        <AnimatePresence>
          {content}
        </AnimatePresence>
      </Stack>
      <Pagination resultsCount={resultsCount} currentPage={page} />
    </PageWrapper>
  )
}

export default BlogPage
