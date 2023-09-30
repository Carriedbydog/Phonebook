import { PrivateRoute } from 'Routes/PrivateRoute';
import Layout from 'components/Layout/Layout';
import { Spinner } from 'components/Spinner/Spinner';
import Contacts from 'pages/Contacts/Contacts';
import Home from 'pages/Home/Home';
import Login from 'pages/Login/Login';
import NotFound from 'pages/NotFound/NotFound';
import Register from 'pages/Register/Register';
import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { refreshThunk } from 'redux/auth/operations';
import { selectIsRefresh } from 'redux/auth/selectors';

const App = () => {
  const isRefresh = useSelector(selectIsRefresh);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);
  return (
    <>
      {isRefresh ? (
        <Spinner />
      ) : (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route
              path="/contacts"
              element={
                <PrivateRoute>
                  <Contacts />
                </PrivateRoute>
              }
            />

            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      )}
    </>
  );
};

export default App;
