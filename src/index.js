import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import Modal from 'react-modal';

import App from './App';
import store from "./redux/store";

import './index.scss';

const rootNode = document.getElementById('root');
const root = ReactDOM.createRoot(rootNode);

Modal.setAppElement(rootNode);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
