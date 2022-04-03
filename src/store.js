import { configureStore } from '@reduxjs/toolkit'
import searchReducer from '@/features/search/searchSlice'
import { apiSlice } from '@/features/api/apiSlice'

// store for global app state
export default configureStore({
  reducer: {
    search: searchReducer,
    [apiSlice.reducerPath]: apiSlice.reducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiSlice.middleware)
})