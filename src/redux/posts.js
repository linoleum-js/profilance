
import { createSlice, createAsyncThunk, Slice, SliceCaseReducers } from '@reduxjs/toolkit';
import { stubRequest, loadPosts } from '../api/api';

/** @type {IPostsState} */
const initialState = {
  list: [],
  loading: false,
  error: null,
};

export const postsFetchAction = createAsyncThunk(
  'posts/fetch',
  async ({ query }) => {
    const response = await loadPosts();
    return response.data;
  }
);

export const postsApproveAction = createAsyncThunk(
  'posts/approve',
  async (postId) => {
    await stubRequest();
  }
);

export const postsRemoveAction = createAsyncThunk(
  'posts/remove',
  async (postId) => {
  }
);

export const postsCreateAction = createAsyncThunk(
  'posts/create',
  async (postId) => {
  }
);

/** @type {Slice<IPostsState, SliceCaseReducers<any>, any>} */
export const postsSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(postsFetchAction.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(postsFetchAction.fulfilled, (state, data) => {
        state.loading = false;
        state.error = null;
        state.list = data.payload;
      })
      .addCase(postsFetchAction.rejected, (state, { error }) => {
        state.loading = false;
        state.error = error.message;
      })
      .addCase(postsApproveAction.pending, (state, postId) => {
        const index = state.list.findIndex(post => post.id === postId);
        state.list[index].isApproved = true;
      })
      .addCase(postsApproveAction.rejected, (state, { error }) => {
        state.error = error.message;
      })
      .addCase(postsRemoveAction.pending, (state, postId) => {
        const index = state.list.findIndex(post => post.id === postId);
        state.list.splice(index, 1);
      })
      .addCase(postsRemoveAction.rejected, (state, { error }) => {
        state.error = error.message;
      })
      .addCase(postsCreateAction.pending, (state, { payload }) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(postsCreateAction.fulfilled, (state, { payload }) => {
        state.error = null;
        state.loading = false;
      })
      .addCase(postsCreateAction.rejected, (state, { error }) => {
        state.loading = false;
        state.error = error.message;
      });

  }
});

export default postsSlice.reducer;
