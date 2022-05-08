import { createSlice } from '@reduxjs/toolkit';
import { authApi } from '@/redux/api/authApi';

const initialState = {
  token: undefined,
  userInfo: undefined,
  expiresAt: undefined,
  all: null,
  csurf: null,
};

export const userSlice = createSlice({
  initialState,
  name: 'user',
  reducers: {
    logout: () => {
      // localStorage.removeItem('token')
      localStorage.removeItem('userInfo')
      localStorage.removeItem('expiresAt')
      return initialState
    },
    setUser: (state, action) => {
      const { token, user, expiresAt } = action.payload || {};
      state.token = token;
      state.userInfo = user;
      state.expiresAt = expiresAt;
    },
    setUsers: (state, action) => {
      state.all = action.payload;
    },
    setCsurf: (state, action) => {
      state.csurf = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      // save user to state after successfull login event
      .addMatcher(
        authApi.endpoints.loginUser.matchFulfilled,
        (state, { payload }) => {
          state.token = payload.token
          state.userInfo = payload.userInfo
          state.expiresAt = payload.expiresAt
        }
      )
      // save user to state after successfull register event
      .addMatcher(
        authApi.endpoints.registerUser.matchFulfilled,
        (state, { payload }) => {
          state.token = payload.token
          state.userInfo = payload.userInfo
          state.expiresAt = payload.expiresAt
        }
      )
  },
});

export default userSlice.reducer;

export const { logout, setUser, setUsers, setCsurf } = userSlice.actions;

export const selectUserData = state => {
  return state.user.userInfo
}

export const selectIsAuthenticated = state => {
  if (!state.user.userInfo || !state.user.expiresAt) {
    return false
  }
  return new Date().getTime() / 1000 < state.user.expiresAt
}

export const selectIsAdmin = state => {
  return state.user.userInfo.role === 'admin'
}