import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { buildPostsEndpoint } from '@/utils/api'

// Define our single API slice object
export const apiSlice = createApi({
  // The cache reducer expects to be added at `state.api` (already default - this is optional)
  reducerPath: 'api',
  // All of our requests will have URLs starting with '/fakeApi'
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
  // The "endpoints" represent operations and requests for this server
  endpoints: builder => ({
    // The `getPosts` endpoint is a "query" operation that returns data
    getPosts: builder.query({
      // The URL for the request is '/fakeApi/posts'
      query: queries => buildPostsEndpoint(queries)
    }),
    getComments: builder.query({
      query: postId => `/comments?postId=${postId}`
    })
  })
})

// Export the auto-generated hook for the `getPosts` query endpoint
// use + name of endpoint + Query || Mutation
export const { useGetPostsQuery, useGetCommentsQuery } = apiSlice