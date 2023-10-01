import React from 'react';
import PhoneBook from 'components/PhoneBook/PhoneBook';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { useSelector } from 'react-redux';

const Contacts = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return <div>{isLoggedIn && <PhoneBook />}</div>;
};

export default Contacts;
