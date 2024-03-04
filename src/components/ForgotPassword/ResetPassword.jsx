import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const { token } = useParams();

  const handleSubmit = async e => {
    e.preventDefault();
    await axios.post(
      `http://localhost:3020/api/users/reset-password/${token}`,
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
