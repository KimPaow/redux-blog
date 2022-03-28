import { useGetPostsByPage } from '@/utils/api'
import PageWrapper from '@/components/dom/pagewrapper'
import Stack from "@/components/dom/flex/stack"
import { PostListItem } from './PostListItem'
import { Pagination } from './Pagination'

export const BlogPage = ({ page, pageCount, comments }) => {
  const { data, error } = useGetPostsByPage({ page })
  // console.log('comments: ', comments)

  if (error) {
    // eslint-disable-next-line no-console
    console.error('error: ', error)
    return null
  }

  return (
    <PageWrapper as="main">
      <Stack gap={[3, 4, 5]} column>
        {data?.map(({ id, ...post }) => <PostListItem key={id} id={id} comments={comments ? comments[id] : undefined} {...post} />)}
      </Stack>
      <Pagination currentPage={Number(page)} pageCount={pageCount} />
    </PageWrapper>
  )
}

export default BlogPage
