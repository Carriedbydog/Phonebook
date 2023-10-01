import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { Link } from 'react-router-dom';

const Home = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      {!isLoggedIn ? (
        <div className="hero min-h-screen flex justify-center items-center h-14 bg-gradient-to-r from-violet-500 to-fuchsia-500">
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-6xl font-bold text-slate-200">
                Hello there👋
              </h1>
              <p className="mb-5 text-2xl font-medium">
                Welcome to our PhoneBook app where you can create, delete, and
                manage your contact list.
              </p>
              <Link to="/login">
                <button className="btn btn-active btn-primary rounded-lg bg-blue-600 p-3 hover:bg-blue-300 shadow-xl text-slate-200 hover:text-black">
                  Get Started
                </button>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="hero min-h-screen flex justify-center items-center h-14 bg-gradient-to-r from-violet-500 to-fuchsia-500">
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-4xl font-bold">
                Enjoy using our App 😄
              </h1>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
