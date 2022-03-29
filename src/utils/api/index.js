
export const PAGE_SIZE = 5

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
