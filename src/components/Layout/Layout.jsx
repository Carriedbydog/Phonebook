import React from 'react';
import { Outlet } from 'react-router-dom';
import UserMenu from '../UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import {
  HomeList,
  ListLinks,
  StyledHeader,
  StyledLoginBtn,
  StyledNavLink,
  StyledNavList,
} from './LayoutStyled';

const Layout = () => {
  const isLogin = useSelector(selectIsLoggedIn);
  return (
    <div>
      <StyledHeader>
        <StyledNavList>
          <HomeList>
            <li>
              <StyledNavLink to="/">Home</StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="/contacts">Contacts</StyledNavLink>
            </li>
          </HomeList>
          {!isLogin && (
            <ListLinks>
              <li>
                <StyledNavLink to="/login">Login</StyledNavLink>
              </li>
              <li>
                <StyledLoginBtn to="/register">Sign up</StyledLoginBtn>
              </li>
            </ListLinks>
          )}
          {isLogin && (
            <div>
              <UserMenu />
            </div>
          )}
        </StyledNavList>
      </StyledHeader>
      <hr />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
