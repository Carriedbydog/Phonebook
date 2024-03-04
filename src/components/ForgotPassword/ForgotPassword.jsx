import React, { useState } from 'react';
import axios from 'axios';

export const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:3020/api/users/forgot-password',
        { email }
      );
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
};
