
import { configureStore } from '@reduxjs/toolkit';

import userReducer from './user';
import postsReducer from './posts';
import uiReducer from './ui';

const store = configureStore({
  reducer: {
    user: userReducer,
    posts: postsReducer,
    ui: uiReducer,
  },
});

export default store;
