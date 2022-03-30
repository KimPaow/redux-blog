import Grid from '@/components/dom/grid'
import Stack from "@/components/dom/flex/stack"
import { Spacer } from '@/components/dom/flex'
import { Link } from '@/components/dom/links'
import { PAGE_SIZE } from '@/utils/api'

export const Pagination = ({ resultsCount, currentPage }) => {
  const pageCount = Math.ceil(resultsCount / PAGE_SIZE)
  const paginationArr = Array.from({ length: pageCount }, (_, i) => i)
  const isFirstPage = currentPage === 1
  const isLastPage = currentPage === pageCount

  if (!resultsCount) {
    return null
  }

  return <Grid.Row css={{ marginTop: '$4', justifyContent: 'space-between', alignItems: 'center', maxWidth: '100vw', '@sm': { marginTop: '$5' } }}>
    <Link pagination disabled={isFirstPage} to={`/?page=${currentPage - 1}`}>{"←"}</Link>
    <Spacer x={3} />
    <Stack gap={1} css={{ display: 'none', '@md': { display: 'flex' } }}>
      {paginationArr.map(p => (
        <Link pagination scroll={true} active={p + 1 == currentPage} key={p} to={p === 0 ? '/' : `/?page=${p + 1}`}>
          {p + 1}
        </Link>
      ))}
    </Stack>
    <Spacer x={3} />
    <Link pagination disabled={isLastPage} to={`/?page=${currentPage + 1}`}>{"→"}</Link>
  </Grid.Row>
}

export default Pagination
