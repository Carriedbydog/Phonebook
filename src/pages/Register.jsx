import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { registerThunk } from 'redux/auth/operations';

const Register = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const submit = data => {
    dispatch(registerThunk(data))
      .unwrap()
      .then(res => {
        toast.success(`Welcome ${res.user.name}`);
        navigate('/contacts');
      })
      .catch(error => {
        toast.error(error.message);
      });
  };
  return (
    <section>
      <form onSubmit={handleSubmit(submit)}>
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
        <button>Sign Up</button>
      </form>
    </section>
  );
};

export default Register;
