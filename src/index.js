import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Global } from 'styles/Global';
import { Provider } from 'react-redux';
import { persistor, store } from 'redux/store';
import { BrowserRouter } from 'react-router-dom';
import App from 'App';
import { Toastify } from 'components/Toastify/Toastify';
import 'react-toastify/dist/ReactToastify.css';

import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Provider store={store}>
      <BrowserRouter basename="/goit-react-hw-08-phonebook">
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
        <Toastify />
        <Global />
      </BrowserRouter>
    </Provider>
  </>
);
