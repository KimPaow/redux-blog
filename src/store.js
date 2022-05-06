import { configureStore } from '@reduxjs/toolkit'
import searchReducer from '@/slices/search'
import { blogSlice } from '@/slices/blog'

// store for global app state
export default configureStore({
  reducer: {
    search: searchReducer,
    [blogSlice.reducerPath]: blogSlice.reducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(blogSlice.middleware)
})