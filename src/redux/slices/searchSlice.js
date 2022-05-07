import { createSlice } from '@reduxjs/toolkit'

export const searchSlice = createSlice({
  name: 'search',
  initialState: {
    query: ''
  },
  reducers: {
    clearSearchQuery: state => {
      state.query = ''
    },
    setSearchQuery: (state, action) => {
      state.query = action.payload
    }
  }
})

export default searchSlice.reducer

export const { clearSearchQuery, setSearchQuery } = searchSlice.actions

export const selectSearchQuery = state => state.search.query
