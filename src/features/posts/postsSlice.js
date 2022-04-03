import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { client } from '@/utils/api/client'
import { buildEndpoint } from '@/utils/api'

// Slice
const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [], // list of posts
    resultsCount: 0, // total amount of posts
    status: 'idle',
    error: null
  },
  extraReducers(builder) {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.resultsCount = action.payload.length
        state.posts = action.payload.posts
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  }
})

export default postsSlice.reducer

// Thunks
export const fetchPosts = createAsyncThunk('posts/fetchPosts', async ({ query, page = 1, comments = true, size }) => {
  // messy, but only way to get length
  const lengthEndpoint = buildEndpoint({ query, page: false, comments: false, size: false })
  const length = await client.get(lengthEndpoint)

  const endpoint = buildEndpoint({ query, page, comments, size })
  const response = await client.get(endpoint)
  return {
    length: length?.data?.length,
    posts: response?.data
  }
})