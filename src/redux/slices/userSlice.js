import { createSlice } from '@reduxjs/toolkit';
import { authApi } from '@/redux/api/authApi';

const initialState = {
  token: null,
  user: null,
  expiresAt: null,
};

export const userSlice = createSlice({
  initialState,
  name: 'user',
  reducers: {
    logout: () => initialState,
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        authApi.endpoints.loginUser.matchFulfilled,
        (state, { payload }) => {
          state.token = payload.token
          state.user = payload.userInfo
          state.expiresAt = payload.expiresAt
        }
      )
      .addMatcher(
        authApi.endpoints.registerUser.matchFulfilled,
        (state, { payload }) => {
          state.token = payload.token
          state.user = payload.userInfo
          state.expiresAt = payload.expiresAt
        }
      )
  },
});

export default userSlice.reducer;

export const { logout, setUser } = userSlice.actions;