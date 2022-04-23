import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import {useDebounce, useDebounceCallback} from '@react-hook/debounce'

import { Post } from '../Post';
import {postsApproveAction, postsFetchAction, postsRemoveAction, postsFilterAction} from '../../redux/posts';



export const PostsList = () => {
  const dispatch = useDispatch();
  // TODO: jsdoc
  /** @type {IPostsState} */
  const posts = useSelector(state => state.posts);
  const [searchParams, setSearchParams] = useSearchParams();
  const urlQuery = searchParams.get('query');

  const updateFilterFromQuery = () => {
    dispatch(postsFilterAction({ query: urlQuery || '' }));
  };

  useEffect(() => {
    dispatch(postsFetchAction());
    updateFilterFromQuery()
  }, [dispatch]);

  useEffect(updateFilterFromQuery, [urlQuery, dispatch]);

  const onPostApprove = (postId) => {
    dispatch(postsApproveAction(postId))
  };

  const onPostRemove = (postId) => {
    dispatch(postsRemoveAction(postId));
  };

  const onQueryChange = (e) => {
    const value = e.target.value;
    if (value) {
      setSearchParams({query: e.target.value});
    } else {
      setSearchParams({});
    }
  };

  const filterBySearch = (list) => {
    const query = posts.filter.query;
    return list.filter(item => item.title.includes(query) || item.text.includes(query));
  };

  const filterForUser = (list) => {
    return list;
  };

  const filtered = filterBySearch(filterForUser(posts.list));

  return (
    <div>
      <form>
        <input type="text" onChange={onQueryChange} value={urlQuery || ''} />
      </form>
      <ul>
        {filtered.map(post => {
          return (
            <Post
              key={post.id}
              data={post}
              onApprove={onPostApprove}
              onRemove={onPostRemove}
            />
          );
        })}
      </ul>
    </div>
  );
};
