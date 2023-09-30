import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUser } from 'redux/auth/selectors';
import styled from 'styled-components';

const Home = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);

  return (
    <StyledHome>
      {!isLoggedIn ? (
        <h1>Welcome! Sign in to see PhoneBook</h1>
      ) : (
        <h1>Enjoy using our App, {user.name} 👋</h1>
      )}
    </StyledHome>
  );
};

export default Home;

const StyledHome = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
