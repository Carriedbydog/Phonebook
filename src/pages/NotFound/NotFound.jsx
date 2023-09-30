import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        backgroundColor: 'wheat',
      }}
    >
      <h3>
        Oh no, this page is not found... You can go back to
        <Link to="/">Home</Link>
      </h3>
    </div>
  );
};

export default NotFound;
