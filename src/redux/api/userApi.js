import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { setUser, setUsers } from '@/redux/slices/userSlice';

export const userApi = createApi({
  reducerPath: 'userApi',
  tagTypes: ['User'],
  baseQuery: fetchBaseQuery({
    baseUrl: `/api/users`,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().user.token

      // If we have a token set in state, let's assume that we should be passing it.
      if (token) {
        headers.set('authorization', `Bearer ${token}`)
      }

      return headers
    },
  }),
  endpoints: (builder) => ({
    getMe: builder.query({
      query() {
        return {
          url: '/me',
          credentials: 'include',
        };
      },
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setUser(data));
        } catch (error) {
          // eslint-disable-next-line no-console
          console.error('getMe error: ', error)
        }
      },
    }),
    getAllUsers: builder.query({
      query() {
        return {
          url: '/all',
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
    })
  }),
});

export const { useGetMeQuery, useGetAllUsersQuery } = userApi