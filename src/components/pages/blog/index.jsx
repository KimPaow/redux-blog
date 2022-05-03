import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'next/router'

import { selectSearchQuery } from '@/features/search/searchSlice'
import { setSearchQuery } from '@/features/search/searchSlice'
import { useGetPostsQuery } from '@/features/api/apiSlice'

import PageWrapper from '@/components/_common/pagewrapper'
import Stack from '@/components/_common/flex/stack'
import Search from '@/components/_common/search'
import Text from '@/components/_common/text'
import Loader from '@/components/_common/loader'
import Card from '@/components/_common/card'
import Header from '@/components/_common/header'
import Pagination from '@/components/_common/pagination'

import PostListItem from '@/components/pages/blog/PostListItem'

const handleSubmitSearch = ({ page, router, dispatch, event }) => {
  event.preventDefault()
  dispatch(setSearchQuery(event?.target?.elements?.search?.value))

  if (page !== 1) {
    router.push('/', null, { shallow: true })
  }
}

const styles = {
  searchStyles: {
    flex: 1,
    marginLeft: 'auto',

    '@sm': {
      flexGrow: '0'
    }
  }
}

export const BlogPage = () => {
  const dispatch = useDispatch()
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
    <PageWrapper as="main">
      <Header>
        <Search
          onSubmit={(event) => handleSubmitSearch({ event, page, router, dispatch })}
          css={styles.searchStyles}
        />
      </Header>
      <Stack gap={[4, 4, 5]} column>
        {content}
      </Stack>
      <Pagination currentPage={page} query={searchQuery} />
    </PageWrapper>
  )
}

export default BlogPage
