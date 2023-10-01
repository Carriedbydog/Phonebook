import React from 'react';
import { Outlet } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { Header } from 'components/Header/Header';

const Layout = () => {
  const isLogin = useSelector(selectIsLoggedIn);

  return (
    <div>
      <Header isLogin={isLogin} />
      <hr />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
