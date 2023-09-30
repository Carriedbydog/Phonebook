import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { loginThunk } from 'redux/auth/operations';
import { selectIsLoggedIn } from 'redux/auth/selectors';

const Login = () => {
  const { register, handleSubmit } = useForm();
  const isLoggedIn = useSelector(selectIsLoggedIn);
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
        <button>Login</button>
      </form>
    </section>
  );
};

export default Login;
