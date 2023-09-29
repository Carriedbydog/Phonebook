import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Global } from 'styles/Global';
import { Provider } from 'react-redux';
import { store } from 'redux/store';
import { BrowserRouter } from 'react-router-dom';
import App from 'App';
import { Toastify } from 'components/Toastify/Toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <BrowserRouter>
      <Provider store={store}>
        <App />
        <Toastify />
        <Global />
      </Provider>
    </BrowserRouter>
  </>
);
