import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutThunk } from 'redux/auth/operations';
import { selectUser } from 'redux/auth/selectors';

const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logoutThunk());
  };
  return (
    <div className="hidden lg:flex justify-center items-center gap-3">
      {user?.name && <p className="text-2xl">{user.name} | </p>}
      <button
        className="p-4 font-semibold rounded-xl text-white bg-blue-500 hover:bg-blue-700"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
