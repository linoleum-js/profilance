
import { createSlice, createAction } from '@reduxjs/toolkit';

import { userAuthenticateAction } from './user';
import { postsCreateAction } from './posts';

// we want to close modals only after we get response, so in this case
// it makes sense to keep this state in redux

/** @type {IUiState} */
const initialState = {
  loginModalOpen: false,
  postModalOpen: false,
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
      })
      .addCase(uiLoginModalCloseAction, (state) => {
        state.loginModalOpen = false;
      })
      .addCase(uiLoginModalOpenAction, (state) => {
        state.loginModalOpen = true;
      })

      .addCase(postsCreateAction.fulfilled, (state) => {
        state.postModalOpen = false;
      })
      .addCase(uiPostModalCloseAction, (state) => {
        state.postModalOpen = false;
      })
      .addCase(uiPostModalOpenAction, (state) => {
        state.postModalOpen = true;
      });
  }
});

export default uiSlice.reducer;
