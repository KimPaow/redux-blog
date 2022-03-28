
import useSWR from 'swr'

export const fetcher = (...args) => fetch(...args).then(res => res.json())

export const PAGE_SIZE = 5
export const POSTS_ENDPOINT = 'https://jsonplaceholder.typicode.com/posts'
export const COMMENTS_ENDPOINT = 'https://jsonplaceholder.typicode.com/comments'

export const getPostsByPage = async ({ page, size = PAGE_SIZE }) => {
  if (!page) {
    console.warn('page not supplied to getPostsByPage - aborting fetch')
  }

  const from = (page - 1) * size;
  const endpoint = `https://jsonplaceholder.typicode.com/posts?_start=${from}&_limit=${size}`
  const data = await fetcher(endpoint)

  return { endpoint, postsByPage: data }
}

export const useGetAllPosts = () => {
  return useSWR('https://jsonplaceholder.typicode.com/posts', fetcher)
}

export const useGetPostsByPage = ({ page, size = PAGE_SIZE }) => {
  const from = (page - 1) * size;
  const endpoint = `https://jsonplaceholder.typicode.com/posts?_start=${from}&_limit=${size}`

  return useSWR(endpoint, fetcher)
}

export const useGetAllComments = () => {
  return useSWR(COMMENTS_ENDPOINT, fetcher)
}

export const useGetCommentsByPage = () => {
  return useSWR(COMMENTS_ENDPOINT, fetcher)
}
