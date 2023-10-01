import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { loginThunk } from 'redux/auth/operations';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import ButtonLoad from 'components/ButtonLoad/ButtonLoad';
import { selectLoading } from 'redux/selectors';

const Login = () => {
  const { register, handleSubmit } = useForm();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isLoading = useSelector(selectLoading);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const submit = data => {
    dispatch(loginThunk(data))
      .unwrap()
      .then(res => {
        toast.success(`Welcome ${res.user.name}`);
        navigate(location.state?.from ?? '/');
      })
      .catch(() => {
        toast.error('data is error');
      });
  };
  if (isLoggedIn) {
    return <Navigate to="/contacts" />;
  }
  return (
    <section className="grid h-14 bg-gradient-to-r from-violet-500 to-fuchsia-500 min-h-screen justify-center items-center">
      <form
        className="grid gap-2 bg-white  px-4 py-4 shadow-2xl rounded-lg"
        onSubmit={handleSubmit(submit)}
      >
        <h1 className="text-center text-xl font-bold">Login now!</h1>
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
        <ButtonLoad isLoading={isLoading} title="Login" />

        <span>
          You don't have account yet? Let's{' '}
          <Link to="/register" className="underline text-teal-500">
            create it
          </Link>
        </span>
      </form>
    </section>
  );
};

export default Login;
