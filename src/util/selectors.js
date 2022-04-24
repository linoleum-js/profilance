

/**
 * @param {IState} state
 * @returns {IPostsState}
 */
export const selectPosts = state => state.posts;

/**
 * @param {IState} state
 * @returns {IUserState}
 */
export const selectUser = state => state.user;

/**
 * @param {IState} state
 * @returns {IUiState}
 */
export const selectUi = state => state.ui;
