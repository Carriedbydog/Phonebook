import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutThunk } from 'redux/auth/operations';
import { selectUser } from 'redux/auth/selectors';
import styled from 'styled-components';

const UserMenu = () => {
  const { name } = useSelector(selectUser);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logoutThunk());
  };
  return (
    <StyledUserMenu>
      <p>{name}</p>
      <button onClick={handleLogout}>Logout</button>
    </StyledUserMenu>
  );
};

export default UserMenu;

const StyledUserMenu = styled.div`
  display: flex;
  gap: 10px;
`;
