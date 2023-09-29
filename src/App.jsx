import Layout from 'components/Layout';
import PhoneBook from 'components/PhoneBook';
import Login from 'pages/Login';
import NotFound from 'pages/NotFound';
import Register from 'pages/Register';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<PhoneBook />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
