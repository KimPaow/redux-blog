import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { buildPostsEndpoint } from '@/utils/api'

export const blogApi = createApi({
  reducerPath: 'blog',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
  endpoints: builder => ({
    getPosts: builder.query({
      query: queries => buildPostsEndpoint(queries)
    }),
    getComments: builder.query({
      query: postId => `/comments?postId=${postId}`
    })
  })
})

export const { useGetPostsQuery, useGetCommentsQuery } = blogApi