import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import {useDebounce, useDebounceCallback} from '@react-hook/debounce'

import { Post } from '../Post';
import {postsApproveAction, postsFetchAction, postsRemoveAction, postsFilterAction} from '../../redux/posts';
import Role from "../../models/Role";

export const PostsList = () => {
  const dispatch = useDispatch();
  /** @type {IPostsState} */
  const posts = useSelector(state => state.posts);
  /** @type {IUserState} */
  const user = useSelector(state => state.user);
  const canApprove = user.data.role === Role.ADMIN;
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
    const query = posts.filter.query;
    return list.filter(item => item.title.includes(query) || item.text.includes(query));
  };

  const filterForUser = (list) => {
    const role = user.data.role
    const hideUnapproved = role === Role.GUEST;
    if (hideUnapproved) {
      return list.filter(item => item.isApproved);
    }
    return list;
  };

  const filtered = filterBySearch(filterForUser(posts.list));

  return (
    <div>
      <form>
        <input type="text" onChange={onQueryChange} value={urlQuery} />
      </form>
      <ul>
        {filtered.map(post => {
          return (
            <Post
              key={post.id}
              data={post}
              onApprove={onPostApprove}
              onRemove={onPostRemove}
              needsApprove={!post.isApproved && canApprove}
            />
          );
        })}
      </ul>
    </div>
  );
};
