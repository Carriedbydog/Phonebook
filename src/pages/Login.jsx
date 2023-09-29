import React from 'react';
import { useForm } from 'react-hook-form';

const Login = () => {
  const { handlesubmit, register } = useForm();
  const submit = e => {
    e.preventDefautl();
  };
  return (
    <section>
      <form>
        <label>
          Name
          <input {...register('name')} />
        </label>
        <label>
          Email
          <input {...register('email')} />
        </label>
        <label>
          Password
          <input {...register('password')} />
        </label>
        <button>Login</button>
      </form>
    </section>
  );
};

export default Login;
