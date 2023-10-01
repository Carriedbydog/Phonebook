import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="h-14 bg-gradient-to-r from-violet-500 to-fuchsia-500 min-h-screen flex justify-center items-center">
      <h3 className="text-2xl">
        Oh no, this page is not found...😢 You can go back to{' '}
        <Link
          className="text-2xl font-bold text-slate-200 hover:text-slate-400"
          to="/"
        >
          "Home"
        </Link>
      </h3>
    </div>
  );
};

export default NotFound;
