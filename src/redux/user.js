
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { authenticateUser, stubRequest } from '../api/api';
import Role from "../models/Role";

const guestUser = {
  role: Role.GUEST
};

/** @type {IUserState} */
const initialState = {
  data: guestUser,
  loading: false,
  error: null,
};

export const userAuthenticateAction = createAsyncThunk(
  'user/authenticate',
  async (credentials) => {
    const response = await authenticateUser(credentials);
    return response.data;
  }
);

export const userLogoutAction = createAsyncThunk(
  'user/logout',
  async () => {
    // normally logout is also asynchronous because we want to
    // invalidate the token
    await stubRequest();
  }
);

export const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(userAuthenticateAction.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(userAuthenticateAction.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.error = null;
        state.data = payload;
      })
      .addCase(userAuthenticateAction.rejected, (state, { error }) => {
        state.loading = false;
        // handle 401/403/etc
        state.error = error.message;
      })
      .addCase(userLogoutAction.pending, (state) => {
        state.data = guestUser;
      });
  }
});

export default userSlice.reducer;
