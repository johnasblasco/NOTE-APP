import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import AuthFormInput from '../components/AuthForm';
import api from '../api/authApi';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {

  const navigate = useNavigate();


  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email').required('Required'),
      password: Yup.string().required('Required'),
    }),
    onSubmit: async (values) => {
      try {
        const res = await api.post('/auth/login', {
          email: values.email,
          password: values.password,
        });

        localStorage.setItem('token', res.data.token);
        alert(`Welcome, ${res.data.user.name}`);
        navigate('/dashboard')
      } catch (err) {
        alert(err.response?.data?.message || 'Login failed');
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="max-w-md mx-auto mt-10 p-6 border rounded shadow">
      <h2 className="text-2xl mb-4 font-bold text-center">Login</h2>
      <AuthFormInput label="Email" name="email" type="email" formik={formik} />
      <AuthFormInput label="Password" name="password" type="password" formik={formik} />
      <button type="submit" className="bg-blue-500 text-white w-full py-2 mt-4 rounded hover:bg-blue-600">
        Login
      </button>
      <p className="mt-4 text-sm text-center">
        Don't have an account? <Link to="/register" className="text-blue-600 hover:underline">Register</Link>
      </p>

    </form>
  );
};

export default Login;
