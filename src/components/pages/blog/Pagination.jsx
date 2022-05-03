import { Link } from '@/components/_common/links'
import Text from '@/components/_common/text'
import Card from '@/components/_common/card'
import PaginationBase from '@/components/_common/pagination'

import { PAGE_SIZE } from '@/utils/api'
import { useGetPostsQuery } from '@/features/api/apiSlice'

export const Pagination = ({ query, currentPage }) => {
  /** 
   * TODO:
   * This is super in-effective... We are fetching 5 posts in the parent
   * and all pages here. It would be great if the api supported fetching just the total number of posts.
   * In a real project this would be fixed.
   */
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
    content = null // TODO: Loading state
  } else if (isSuccess) {
    content = paginationArr?.map((p) => <Link pagination scroll={true} active={p + 1 == currentPage} key={p} to={p === 0 ? '/' : `/?page=${p + 1}`}>
      {p + 1}
    </Link>)
  } else if (isError) {
    console.log('error: ', isError)
    return <Card status="error"><Text status="error">{JSON.stringify(error, null, 2)}</Text></Card>
  }

  console.log('content: ', content)
  return (
    <PaginationBase
      disablePrev={isFirstPage}
      disableNext={isLastPage}
      currentPage={currentPage}
    >
      {content}
    </PaginationBase>
  )
}

export default Pagination
