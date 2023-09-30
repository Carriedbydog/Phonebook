import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutThunk } from 'redux/auth/operations';
import { selectUser } from 'redux/auth/selectors';
import { StyledLogoutBtn, StyledUserMenu } from './UserMenuStyled';

const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logoutThunk());
  };
  return (
    <StyledUserMenu>
      {user?.name && <p>{user.name}</p>}
      <StyledLogoutBtn onClick={handleLogout}>Logout</StyledLogoutBtn>
    </StyledUserMenu>
  );
};

export default UserMenu;
