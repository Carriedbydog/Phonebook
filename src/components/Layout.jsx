import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import UserMenu from './UserMenu/UserMenu';
import styled from 'styled-components';

const Layout = () => {
  return (
    <div>
      <StyledNavList>
        <ListLinks>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/register">Register</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
        </ListLinks>
        <UserMenu />
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
