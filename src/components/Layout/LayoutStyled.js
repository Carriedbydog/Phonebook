import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledHeader = styled.header`
  padding: 12px;
  background-color: wheat;
`;

export const StyledNavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 10px;
`;

export const ListLinks = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
`;
export const HomeList = styled.ul`
  display: flex;
  gap: 10px;
  list-style: none;
`;

export const StyledNavLink = styled(NavLink)`
  font-weight: 600;

  list-style: none;
  text-decoration: none;
  &:hover {
    color: gray;
  }
`;

export const StyledLoginBtn = styled(NavLink)`
  text-decoration: none;
  border-radius: 5px;
  border: none;

  margin-bottom: 20px;
  padding: 10px;
  font-weight: 600;

  box-shadow: 2px 1px 2px 1px gray;
  background-color: ghostwhite;
  &:hover {
    background-color: skyblue;
  }
`;
