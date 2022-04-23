
import { createSlice, createAsyncThunk, createAction, Slice, SliceCaseReducers } from '@reduxjs/toolkit';
import { stubRequest, loadPosts } from '../api/api';

/** @type {IPostsState} */
const initialState = {
  list: [],
  loading: false,
  error: null,
  filter: {
    query: '',
  }
};

export const postsFetchAction = createAsyncThunk(
  'posts/fetch',
  async () => {
    const response = await loadPosts();
    return response.data;
  }
);

export const postsApproveAction = createAsyncThunk(
  'posts/approve',
  async (postId) => {
    await stubRequest();
    return postId;
  }
);

export const postsRemoveAction = createAsyncThunk(
  'posts/remove',
  async (postId) => {
    console.log('postsRemoveAction');
    await stubRequest();
    return postId;
  }
);

export const postsCreateAction = createAsyncThunk(
  'posts/create',
  async (postId) => {
  }
);

export const postsFilterAction = createAction('posts/filter');

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


      .addCase(postsApproveAction.fulfilled, (state, { payload }) => {
        const index = state.list.findIndex(post => post.id === payload);
        state.list[index].isApproved = true;
      })
      .addCase(postsApproveAction.rejected, (state, { error }) => {
        state.error = error.message;
      })


      .addCase(postsRemoveAction.fulfilled, (state, { payload }) => {
        const index = state.list.findIndex(post => post.id === payload);
        state.list.splice(index, 1);
      })
      .addCase(postsRemoveAction.rejected, (state, { error }) => {
        state.error = error.message;
      })


      .addCase(postsCreateAction.pending, (state) => {
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
      })

      .addCase(postsFilterAction, (state, { payload }) => {
        state.filter = payload;
      })
    ;

  }
});

export default postsSlice.reducer;
