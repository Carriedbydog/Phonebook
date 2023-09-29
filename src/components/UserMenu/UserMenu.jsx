import React from 'react';
import styled from 'styled-components';

const UserMenu = () => {
  return (
    <StyledUserMenu>
      <p>mango@mail.com</p>
      <button>Logout</button>
    </StyledUserMenu>
  );
};

export default UserMenu;

const StyledUserMenu = styled.div`
  display: flex;
  gap: 10px;
`;
