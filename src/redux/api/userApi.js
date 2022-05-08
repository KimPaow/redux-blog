import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { setUsers } from '@/redux/slices/userSlice';

// const getCsurfToken = async () => {
//   const { data } = await 
// }

export const userApi = createApi({
  reducerPath: 'userApi',
  tagTypes: ['User'],
  baseQuery: fetchBaseQuery({
    baseUrl: `/api/users`,
    // prepareHeaders: (headers, { getState }) => {
    //   const token = getState().user.token

    //   // If we have a token set in state, let's assume that we should be passing it.
    //   if (token) {
    //     headers.set('authorization', `Bearer ${token}`)
    //   }

    //   return headers
    // },
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