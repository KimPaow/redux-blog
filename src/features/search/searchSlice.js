import { createSlice } from '@reduxjs/toolkit'

// createSlice generates action type strings, action creator functions, and action objects
export const searchSlice = createSlice({
  name: 'search',
  initialState: {
    query: ''
  },
  reducers: {
    clearSearchQuery: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.query = ''
    },
    setSearchQuery: (state, action) => {
      state.query = action.payload
    }
  }
})

export const { clearSearchQuery, setSearchQuery } = searchSlice.actions

export const selectSearchQuery = state => state.search.query

export default searchSlice.reducer