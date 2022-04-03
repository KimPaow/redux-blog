import Grid from '@/components/dom/grid'
import Stack from "@/components/dom/flex/stack"
import { Spacer } from '@/components/dom/flex'
import { Link } from '@/components/dom/links'
import Text from '@/components/dom/text'
import Card from '@/components/dom/card'
import { PAGE_SIZE } from '@/utils/api'
import { useGetPostsQuery } from '@/features/api/apiSlice'

export const Pagination = ({ query, currentPage }) => {
  const {
    data: posts,
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetPostsQuery({ size: false, query })

  const pageCount = Math.ceil(posts?.length / PAGE_SIZE)
  const paginationArr = Array.from({ length: pageCount }, (_, i) => i)
  const isFirstPage = currentPage === 1
  const isLastPage = currentPage === pageCount
  let content = null

  if (isLoading) {
    content = null
  } else if (isSuccess) {
    content = paginationArr?.map((p) => <Link pagination scroll={true} active={p + 1 == currentPage} key={p} to={p === 0 ? '/' : `/?page=${p + 1}`}>
      {p + 1}
    </Link>)
  } else if (isError) {
    return <Card status="error"><Text status="error">{JSON.stringify(error, null, 2)}</Text></Card>
  }

  return <Grid.Row css={{ marginTop: '$4', justifyContent: 'space-between', alignItems: 'center', maxWidth: '100vw', '@sm': { marginTop: '$5' } }}>
    <Link pagination disabled={isFirstPage} to={`/?page=${currentPage - 1}`}>{"←"}</Link>
    {content && (
      <>
        <Spacer x={3} />
        <Stack gap={1} css={{ display: 'none', '@md': { display: 'flex' } }}>
          {content}
        </Stack>
        <Spacer x={3} />
      </>
    )}
    <Link pagination disabled={isLastPage} to={`/?page=${currentPage + 1}`}>{"→"}</Link>
  </Grid.Row>
}

export default Pagination
