import { configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux';
import searchReducer from '@/redux/slices/searchSlice'
import userReducer from '@/redux/slices/userSlice'
import { blogApi } from '@/redux/api/blogApi'
import { authApi } from '@/redux/api/authApi'
import { userApi } from '@/redux/api/userApi'
import { Window as window } from '@/utils/server-safe-globals'

const localStorageMiddleware = ({ getState }) => {
  return next => action => {
    const result = next(action);
    const state = getState()
    state.user.token && window.localStorage.setItem('token', state.user.token)
    state.user.userInfo && window.localStorage.setItem('userInfo', JSON.stringify(state.user.userInfo))
    state.user.expiresAt && window.localStorage.setItem('expiresAt', state.user.expiresAt)
    return result;
  };
};

const reHydrateStore = () => {
  const token = window.localStorage.getItem('token')
  const user = window.localStorage.getItem('userInfo')
  const expiresAt = window.localStorage.getItem('expiresAt')

  if (token && user && expiresAt) {
    return {
      user: {
        userInfo: (user && typeof user !== 'undefined' && user != 'undefined') ? JSON.parse(window.localStorage.getItem('userInfo')) : {},
        token,
        expiresAt: Number(expiresAt),
      }
    }; // re-hydrate the store
  }
};

// store for global app state
export default configureStore({
  reducer: {
    search: searchReducer,
    user: userReducer,
    [blogApi.reducerPath]: blogApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  devTools: process.env.NODE_ENV === 'development',
  preloadedState: reHydrateStore(),
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat([localStorageMiddleware, blogApi.middleware, authApi.middleware, userApi.middleware])
})

export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;
