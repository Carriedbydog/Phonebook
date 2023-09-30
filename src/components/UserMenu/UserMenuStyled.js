import styled from 'styled-components';

export const StyledUserMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const StyledLogoutBtn = styled.button`
  padding: 10px;
  font-weight: 600;

  border: none;
  border-radius: 5px;
  box-shadow: 2px 1px 2px 1px gray;
  background-color: ghostwhite;
  &:hover {
    background-color: skyblue;
  }
`;
