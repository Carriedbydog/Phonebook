import React from 'react';
import PhoneBook from 'components/PhoneBook/PhoneBook';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { useSelector } from 'react-redux';
import Login from 'pages/Login/Login';
import { Link } from 'react-router-dom';

const Contacts = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div>
      {!isLoggedIn ? (
        <h3>If you want to see PhoneBook, you have to login</h3>
      ) : (
        <PhoneBook />
      )}
      {/* {isLoggedIn && <PhoneBook />} */}
    </div>
  );
};

export default Contacts;
