
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Role from "../models/Role";


/** @type {IUserState} */
const initialState = {
  user: null,
  loading: false,
  error: null,
};

export const getUser = createAsyncThunk(
  'user/getUser',
  async () => {
    console.log('GET USER ACTION');
    return {
      username: '132',
      role: Role.ADMIN,
    }
  }
);

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUser.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.user = payload;
      })
      .addCase(getUser.rejected, (state) => {
        state.error = 'Failed to load user info';
      });
  }
});

export default userSlice.reducer;
