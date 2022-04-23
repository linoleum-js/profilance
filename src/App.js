
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'


import { Header } from './components/Header';
import { PostsList } from './components/PostsList';


import {userAuthenticateAction, userLogoutAction} from './redux/user';

function App() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);

  useEffect(() => {
    dispatch(userAuthenticateAction({ username: 'user1', password: 'pass1'}));

    setTimeout(() => {
      dispatch(userLogoutAction());

    }, 1500);
  }, []);

  return (
    <div className="App">
      {JSON.stringify(user)}
      <Header />
      <PostsList />
    </div>
  );
}

export default App;
