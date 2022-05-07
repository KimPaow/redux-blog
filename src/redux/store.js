import { configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux';
import searchReducer from '@/redux/slices/searchSlice'
import userReducer from '@/redux/slices/userSlice'
import { blogApi } from '@/redux/api/blogApi'
import { authApi } from '@/redux/api/authApi'
import { userApi } from '@/redux/api/userApi'

// store for global app state
export default configureStore({
  reducer: {
    search: searchReducer,
    userState: userReducer,
    [blogApi.reducerPath]: blogApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  devTools: process.env.NODE_ENV === 'development',
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat([blogApi.middleware, authApi.middleware, userApi.middleware])
})

export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;
