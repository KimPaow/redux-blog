import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { setUsers } from '@/redux/slices/userSlice';

export const userApi = createApi({
  reducerPath: 'userApi',
  tagTypes: ['User'],
  baseQuery: fetchBaseQuery({
    baseUrl: `/api/users`,
    prepareHeaders: (headers, { getState }) => {
      const csrfToken = getState().user?.csurf?.csrfToken

      // If we have a token set in state, let's assume that we should be passing it.
      if (csrfToken) {
        headers.set('X-CSRF-TOKEN', csrfToken)
      }

      return headers
    },
  }),
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query() {
        return {
          url: '/everyone',
          credentials: 'include',
        }
      },
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setUsers(data.users));
        } catch (error) {
          // eslint-disable-next-line no-console
          console.error('getAllUsers error: ', error)
        }
      },
    }),
    setUserRole: builder.mutation({
      query: (payload) => ({
        url: '/user-role',
        method: 'PATCH',
        body: payload,
        credentials: 'include',
      })
    })
  }),
});

export const { useGetAllUsersQuery, useSetUserRoleMutation } = userApi