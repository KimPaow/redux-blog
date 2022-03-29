import { useGetPostsByPage } from '@/utils/api'
import PageWrapper from '@/components/dom/pagewrapper'
import Stack from "@/components/dom/flex/stack"
import { PostListItem } from './PostListItem'
import { Pagination } from './Pagination'
import Search from '@/components/dom/search'

export const BlogPage = ({ page, pageCount }) => {
  const { data, error } = useGetPostsByPage({ page, comments: true })
  // console.log('comments: ', comments)

  if (error) {
    // eslint-disable-next-line no-console
    console.error('error: ', error)
    return null
  }

  return (
    <PageWrapper as="main">
      <Search />
      <Stack gap={[3, 4, 5]} column>
        {data?.map(({ id, ...post }) => <PostListItem key={id} id={id} {...post} />)}
      </Stack>
      <Pagination currentPage={Number(page)} pageCount={pageCount} />
    </PageWrapper>
  )
}

export default BlogPage
