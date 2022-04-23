
import { useEffect } from 'react';
import { useDispatch } from 'react-redux'


import { Header } from './components/Header';
import { PostsList } from './components/PostsList';


import { getUser } from './redux/user';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('useEffect called');
    // dispatch(getUser());
  }, []);

  console.log('APP RENDERED');


  return (
    <div className="App">
      <Header />
      <PostsList />
    </div>
  );
}

export default App;
