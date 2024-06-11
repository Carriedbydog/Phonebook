import React, { useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

export const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const resetToken = queryParams.get('resetToken');

  const handleSubmit = async e => {
    e.preventDefault();
    await axios.patch(
      `http://localhost:3020/api/users/reset-password?resetToken=${resetToken}`,
      { password }
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
};
