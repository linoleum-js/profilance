import { useEffect } from 'react';
import { useDispatch, useSelector, Selector } from 'react-redux';

import { Post } from '../Post';
import { postsFetchAction } from '../../redux/posts';


export const PostsList = () => {
  const dispatch = useDispatch();
  // TODO: jsdoc
  /** @type {IPostsState} */
  const posts = useSelector(state => state.posts);

  console.log('posts', posts)

  useEffect(() => {
    dispatch(postsFetchAction({ query: '123' }));
  }, []);

  return (
    <div>
      <form>
        <input type="text" />
      </form>
      <ul>
        {posts.list.map(post => {
          return <Post data={post} key={post.id} />
        })}
      </ul>
    </div>
  );
};
