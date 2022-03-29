
export const fetcher = (...args) => fetch(...args).then(res => res.json())

export const PAGE_SIZE = 5
export const POSTS_ENDPOINT = 'https://jsonplaceholder.typicode.com/posts'
export const COMMENTS_ENDPOINT = 'https://jsonplaceholder.typicode.com/comments'

// helper to construct the api endpoint
export const buildEndpoint = ({ query = '', page, comments = true, size = PAGE_SIZE }) => {
  let endpoint = `https://jsonplaceholder.typicode.com/posts`

  const queries = []

  if (query) {
    queries.push(`q=${query}`)
  }

  if (page) {
    queries.push(`_page=${page}`)
  }

  if (size) {
    queries.push(`_limit=${size}`)
  }

  if (comments) {
    queries.push('_embed=comments')
  }

  if (queries.length > 0) {
    endpoint += `?${queries.join('&')}`
  }

  return endpoint
}
