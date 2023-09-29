import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import { Global } from 'styles/Global';

import { Provider } from 'react-redux';
import { store } from 'redux/store';
import { BrowserRouter } from 'react-router-dom';
import App from 'App';
import { ToastContainer } from 'react-toastify';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
      <Global />
      <ToastContainer />
    </BrowserRouter>
  </>
);
