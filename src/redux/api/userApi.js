import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { setUser } from '@/redux/slices/userSlice';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `/api/users`,
  }),
  tagTypes: ['User'],
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
          console.log('getMe error: ', error)
        }
      },
    }),
  }),
});