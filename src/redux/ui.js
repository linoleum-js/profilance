
import { createSlice, createAction } from '@reduxjs/toolkit';

import { userAuthenticateAction } from './user';
import { postsApproveAction, postsCreateAction, postsFetchAction } from './posts';

// we want to close modals only after we get response, so in this case
// it makes sense to keep this state in redux.
// Also, for simplicity purposes I make the preloader global, and it's also
// controlled from redux

/** @type {IUiState} */
const initialState = {
  loginModalOpen: false,
  postModalOpen: false,
  preloaderVisible: false,
};

export const uiLoginModalCloseAction = createAction('ui/loginModal/close');
export const uiLoginModalOpenAction = createAction('ui/loginModal/open');
export const uiPostModalCloseAction = createAction('ui/postModal/close');
export const uiPostModalOpenAction = createAction('ui/postModal/open');

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(userAuthenticateAction.fulfilled, (state) => {
        state.loginModalOpen = false;
        state.preloaderVisible = false;
      })
      .addCase(uiLoginModalCloseAction, (state) => {
        state.loginModalOpen = false;
      })
      .addCase(uiLoginModalOpenAction, (state) => {
        state.loginModalOpen = true;
      })

      .addCase(postsCreateAction.fulfilled, (state) => {
        state.postModalOpen = false;
        state.preloaderVisible = false;
      })
      .addCase(uiPostModalCloseAction, (state) => {
        state.postModalOpen = false;
      })
      .addCase(uiPostModalOpenAction, (state) => {
        state.postModalOpen = true;
      })

      .addCase(postsFetchAction.pending, (state) => {
        state.preloaderVisible = true;
      })
      .addCase(postsFetchAction.fulfilled, (state) => {
        state.preloaderVisible = false;
      })
      .addCase(postsFetchAction.rejected, (state) => {
        state.preloaderVisible = false;
      })
      .addCase(userAuthenticateAction.pending, (state) => {
        state.preloaderVisible = true;
      })
      .addCase(userAuthenticateAction.rejected, (state) => {
        state.preloaderVisible = false;
      })

      .addCase(postsCreateAction.pending, (state) => {
        state.preloaderVisible = true;
      })
      .addCase(postsCreateAction.rejected, (state) => {
        state.preloaderVisible = false;
      })

      .addCase(postsApproveAction.pending, (state) => {
        state.preloaderVisible = true;
      })
      .addCase(postsApproveAction.rejected, (state) => {
        state.preloaderVisible = false;
      })
      .addCase(postsApproveAction.fulfilled, (state) => {
        state.preloaderVisible = false;
      });

  }
});

export default uiSlice.reducer;
