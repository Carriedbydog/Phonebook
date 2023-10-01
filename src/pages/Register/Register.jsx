import ButtonLoad from 'components/ButtonLoad/ButtonLoad';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { registerThunk } from 'redux/auth/operations';
import { selectLoading } from 'redux/auth/selectors';

const Register = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoading = useSelector(selectLoading);
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
    <section className="grid h-14 bg-gradient-to-r from-violet-500 to-fuchsia-500 min-h-screen justify-center items-center">
      <form
        className="grid gap-2 bg-white  px-4 py-4 shadow-2xl rounded-lg"
        onSubmit={handleSubmit(submit)}
      >
        <h1 className="text-center text-xl font-bold">Sign up</h1>
        <label className="grid gap-3">
          Name
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs rounded-lg"
            {...register('name')}
          />
        </label>
        <label className="grid gap-3">
          Email
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs rounded-lg"
            {...register('email')}
          />
        </label>
        <label className="grid gap-3">
          Password
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs rounded-lg"
            {...register('password')}
          />
        </label>
        <ButtonLoad isLoading={isLoading} title="Sign up" />
      </form>
    </section>
  );
};

export default Register;
