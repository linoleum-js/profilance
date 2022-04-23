
import { configureStore } from '@reduxjs/toolkit';

import userReducer from './user';
import postsReducer from './posts';

const store = configureStore({
  reducer: {
    user: userReducer,
    posts: postsReducer,
  },
});

export default store;
