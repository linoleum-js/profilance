import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import { Post } from '../Post';
import {
  postsApproveAction,
  postsFetchAction,
  postsRemoveAction,
  postsFilterAction,
} from '../../redux/posts';
import { selectPosts, selectUser } from '../../util/selectors';
import { canApprove, canSeeUnapproved } from '../../util/permissions';

import styles from './PostsList.module.scss';

export const PostsList = () => {
  const dispatch = useDispatch();
  /** @type {IPostsState} */
  const posts = useSelector(selectPosts);
  /** @type {IUserState} */
  const user = useSelector(selectUser);
  const userRole = user.data.role;
  const [searchParams, setSearchParams] = useSearchParams();
  const urlQuery = searchParams.get('query') || '';

  const updateFilterFromQuery = () => {
    dispatch(postsFilterAction({ query: urlQuery }));
  };

  useEffect(() => {
    dispatch(postsFetchAction());
  }, [dispatch]);

  useEffect(updateFilterFromQuery, [urlQuery, dispatch]);

  const onPostApprove = (postId) => {
    dispatch(postsApproveAction(postId));
  };

  const onPostRemove = (postId) => {
    dispatch(postsRemoveAction(postId));
  };

  const onQueryChange = (e) => {
    const value = e.target.value;
    if (value) {
      setSearchParams({ query: value });
    } else {
      setSearchParams({ });
    }
  };

  const filterBySearch = (list) => {
    const query = posts.filter.query.toLowerCase();
    return list.filter(
      item => item.title.toLowerCase().includes(query) ||
        item.text.toLowerCase().includes(query)
    );
  };

  const filterForUser = (list) => {
    if (!canSeeUnapproved(userRole)) {
      return list.filter(item => item.isApproved);
    }
    return list;
  };

  const filtered = filterBySearch(filterForUser(posts.list));

  return (
    <div className="container">
      <input
        type="text"
        onChange={onQueryChange}
        value={urlQuery}
        className="formControl"
        placeholder="Поиск"
      />
      <div className={styles.PostsList_list}>
        {filtered.map(post => {
          return (
            <Post
              key={post.id}
              data={post}
              onApprove={onPostApprove}
              onRemove={onPostRemove}
              needsApprove={!post.isApproved && canApprove(userRole)}
            />
          );
        })}
      </div>
    </div>
  );
};
