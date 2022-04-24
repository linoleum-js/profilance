
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';


import { Header } from './components/Header';
import { PostsList } from './components/PostsList';
import { Home } from './components/Home';
import { LoginFormModal } from './components/LoginForm/LoginFormModal';
import { PostFormModal } from './components/PostForm/PostFormModal';
import { GlobalPreloader } from './components/GlobalPreloader';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<PostsList />} />
        </Routes>
        <LoginFormModal />
        <PostFormModal />
        <GlobalPreloader />
      </Router>
    </div>
  );
}

export default App;
