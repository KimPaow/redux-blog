import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { setCsurf } from '@/redux/slices/userSlice';

export const authApi = createApi({
  reducerPath: 'auth',
  baseQuery: fetchBaseQuery({
    baseUrl: '/api/auth',
    prepareHeaders: (headers, { getState }) => {
      const csrfToken = getState().user?.csurf?.csrfToken

      // Cross Site Forgery Token
      if (csrfToken) {
        headers.set('X-CSRF-TOKEN', csrfToken)
      }

      return headers
    },
  }),
  endpoints: builder => ({
    registerUser: builder.mutation({
      query: payload => ({
        url: `/register`,
        method: 'POST',
        body: payload,
        credentials: 'include',
      }),
    }),
    loginUser: builder.mutation({
      query: payload => ({
        url: `/login`,
        method: 'POST',
        body: payload,
        credentials: 'include',
      }),
    }),
    logoutUser: builder.mutation({
      query: () => ({
        url: '/logout',
        credentials: 'include',
      })
    }),
    getCsurfToken: builder.query({
      query() {
        return {
          url: '/csurf-token',
          credentials: 'include',
        }
      },
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setCsurf(data));
        } catch (error) {
          // eslint-disable-next-line no-console
          console.error('getCsurfToken error: ', error)
        }
      },
    })
  })
})

export const {
  useLoginUserMutation,
  useRegisterUserMutation,
  useLogoutUserMutation,
  useGetCsurfTokenQuery
} = authApi