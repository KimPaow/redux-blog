import Grid from '@/components/dom/grid'
import Stack from "@/components/dom/flex/stack"
import { Spacer } from '@/components/dom/flex'
import { Link } from '@/components/dom/links'

export const Pagination = ({ currentPage, pageCount }) => {

  const paginationArr = Array.from({ length: pageCount }, (_, i) => i)
  const isFirstPage = currentPage === 1
  const isLastPage = currentPage === pageCount

  return <Grid.Row css={{ marginTop: '$6', justifyContent: 'space-between', alignItems: 'center' }}>
    <Link pagination disabled={isFirstPage} to={`/page/${currentPage - 1}`}>{"←"}</Link>
    <Spacer x={3} />
    <Stack gap={1}>
      {paginationArr.map(p => (
        <Link pagination scroll={true} active={p + 1 == currentPage} key={p} to={p === 0 ? '/' : `/page/${p + 1}`}>
          {p + 1}
        </Link>
      ))}
    </Stack>
    <Spacer x={3} />
    <Link pagination disabled={isLastPage} to={`/page/${currentPage + 1}`}>{"→"}</Link>
  </Grid.Row>
}

export default Pagination
