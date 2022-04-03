import Grid from '@/components/dom/grid'
import Stack from "@/components/dom/flex/stack"
import { Spacer } from '@/components/dom/flex'
import { Link } from '@/components/dom/links'
import Text from '@/components/dom/text'
import Card from '@/components/dom/card'
import Box from '@/components/dom/box'
import { PAGE_SIZE } from '@/utils/api'
import { useGetPostsQuery } from '@/features/api/apiSlice'
import { styled } from '@/theme'

const ScrollCover = styled('div', {
  position: 'absolute',
  top: 0,
  bottom: 0,
  width: '$4',
  zIndex: 100,

  variants: {
    side: {
      left: {
        left: 0,
        linearGradient: 'to right, $colors$bg_body, rgba(0, 0, 0, 0)',
      },
      right: {
        right: 0,
        linearGradient: 'to left, $colors$bg_body, rgba(0, 0, 0, 0)',
      }
    }
  }
})

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
    <Spacer basis={3} />
    {content && (
      <Box css={{ position: 'relative', flexGrow: 0, flexShrink: 1, maxWidth: '60vw', '@md': { maxWidth: 'none' } }}>
        <ScrollCover side="left" />
        <ScrollCover side="right" />
        <Stack gap={1} css={{
          overflowX: 'scroll',
          paddingY: '$2',
          position: 'relative',
          paddingX: '$4',
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',

          '&::-webkit-scrollbar': {
            display: 'none'
          }
        }}>
          {content}
        </Stack>
      </Box>
    )}
    <Spacer basis={3} />
    <Link pagination disabled={isLastPage} to={`/?page=${currentPage + 1}`}>{"→"}</Link>
  </Grid.Row>
}

export default Pagination
