import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import UserMenu from './UserMenu/UserMenu';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';

const Layout = () => {
  const isLogin = useSelector(selectIsLoggedIn);
  return (
    <div>
      <StyledNavList>
        <ListLinks>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          {!isLogin ? (
            <>
              <li>
                <NavLink to="/register">Register</NavLink>
              </li>
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
            </>
          ) : (
            <StyledUserMenuLayout>
              <UserMenu />
            </StyledUserMenuLayout>
          )}
        </ListLinks>
      </StyledNavList>
      <hr />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;

const StyledNavList = styled.ul`
  display: flex;
  gap: 10px;
  padding: 10px;
  justify-content: space-between;
`;

const ListLinks = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
`;

const StyledUserMenuLayout = styled.div`
  display: flex;
  justify-content: flex-end;
`;
