import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const authApi = createApi({
  reducerPath: 'auth',
  baseQuery: fetchBaseQuery({
    baseUrl: '/api/auth',
    // prepareHeaders: (headers, { getState }) => {
    //   const token = getState().user.token

    //   // If we have a token set in state, let's assume that we should be passing it.
    //   if (token) {
    //     headers.set('authorization', `Bearer ${token}`)
    //   }

    //   return headers
    // },
  }),
  endpoints: builder => ({
    registerUser: builder.mutation({
      query: payload => ({
        url: `/register`,
        method: 'POST',
        body: payload,
        credentials: 'include',
      }),
      // Allows us to manipulate the data before it hits the cache.
      // transformResponse: (result) => result.data.user,
    }),
    loginUser: builder.mutation({
      query: payload => ({
        url: `/login`,
        method: 'POST',
        body: payload,
        // You must set credentials: 'include' so that the server can send cookies (access and refresh tokens) to the user’s browser.
        credentials: 'include',
      }),
    }),
    logoutUser: builder.mutation({
      query: () => ({
        url: '/logout',
        credentials: 'include',
      })
    }),
  })
})

export const {
  useLoginUserMutation,
  useRegisterUserMutation,
  useLogoutUserMutation
} = authApi