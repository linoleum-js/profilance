
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


import { Header } from './components/Header';
import { PostsList } from './components/PostsList';
import {Home} from "./components/Home";



import {userAuthenticateAction, userLogoutAction} from './redux/user';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<PostsList />}>
            <Route path=":query" element={<PostsList />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
