import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import UserMenu from '../UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';

const Layout = () => {
  const isLogin = useSelector(selectIsLoggedIn);
  return (
    <div>
      <header className="bg-red-100 p-4">
        <ul className="flex items-center justify-between gap-10 p-3">
          <ul className="flex gap-10 ">
            <li>
              <NavLink className="font-bold hover:text-blue-500" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="font-bold hover:text-blue-500" to="/contacts">
                Contacts
              </NavLink>
            </li>
          </ul>
          {!isLogin && (
            <ul className="flex gap-10 items-center">
              <li>
                <NavLink className="font-bold hover:text-blue-500" to="/login">
                  Login
                </NavLink>
              </li>
              <li>
                <button
                  className="p-3 font-semibold rounded-xl text-l text-white bg-blue-500 hover:bg-blue-700  "
                  to="/register"
                >
                  Sign up
                </button>
              </li>
            </ul>
          )}
          {isLogin && (
            <div>
              <UserMenu />
            </div>
          )}
        </ul>
      </header>
      <hr />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
