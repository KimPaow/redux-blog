import { configureStore } from '@reduxjs/toolkit'
import searchReducer from '@/features/search/searchSlice'
import postsReducer from '@/features/posts/postsSlice'

export default configureStore({
  reducer: {
    search: searchReducer,
    posts: postsReducer
  }
})