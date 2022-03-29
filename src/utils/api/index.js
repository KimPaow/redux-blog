
import useSWR from 'swr'

export const fetcher = (...args) => fetch(...args).then(res => res.json())

export const PAGE_SIZE = 5
export const POSTS_ENDPOINT = 'https://jsonplaceholder.typicode.com/posts'
export const COMMENTS_ENDPOINT = 'https://jsonplaceholder.typicode.com/comments'

// POSTS
export const getPostsByPage = async ({ page, size = PAGE_SIZE, comments = false }) => {
  if (!page) {
    console.warn('page not supplied to getPostsByPage - aborting fetch')
  }

  let endpoint = `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${size}`

  if (comments) {
    endpoint += '&_embed=comments'
  }

  const data = await fetcher(endpoint)

  return { endpoint, postsByPage: data }
}

export const getAllPosts = async ({ comments = false }) => {
  let endpoint = POSTS_ENDPOINT
  if (comments) {
    endpoint += '&_embed=comments'
  }
  return fetcher(endpoint)
}

export const useGetAllPosts = () => {
  const { data, error } = useSWR('https://jsonplaceholder.typicode.com/posts', fetcher)

  return {
    data,
    error,
    isLoading: !error && !data
  }
}

export const useGetPostsByPage = ({ page, size = PAGE_SIZE, comments = false }) => {
  let endpoint = `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${size}`

  if (comments) {
    endpoint += '&_embed=comments'
  }

  const { data, error } = useSWR(endpoint, fetcher)

  return {
    data,
    error,
    isLoading: !error && !data
  }
}

// SEARCH
export const getSearch = async ({ query = '', comments = false }) => {
  let endpoint = `https://jsonplaceholder.typicode.com/posts?q=${query}`

  if (comments) {
    endpoint += '&_embed=comments'
  }

  return fetcher(endpoint)
}

export const useSearch = ({ query = '', comments = false }) => {
  let endpoint = `https://jsonplaceholder.typicode.com/posts?q=${query}`

  if (comments) {
    endpoint += '&_embed=comments'
  }

  const { data, error } = useSWR(endpoint)

  return {
    data,
    error,
    isLoading: !error && !data
  }
}
