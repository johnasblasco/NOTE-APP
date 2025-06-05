import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import AuthFormInput from '../components/AuthForm';
import { Link } from 'react-router-dom'; // Only if you're using React Router

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email').required('Required'),
      password: Yup.string().required('Required'),
    }),
    onSubmit: (values) => {
      console.log('Login Form Submitted', values);
    },
  });

  return (
    <div className="max-w-md mx-auto mt-16 p-8 border shadow-lg rounded-lg bg-white">
      <h2 className="text-3xl mb-6 font-bold text-center text-gray-700">Login</h2>
      <form onSubmit={formik.handleSubmit} className="space-y-4">
        <AuthFormInput label="Email" name="email" type="email" formik={formik} />
        <AuthFormInput label="Password" name="password" type="password" formik={formik} />
        <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded">
          Login
        </button>
      </form>
      <div className="mt-4 text-center">
        <p className="text-sm">
          Don't have an account?{' '}
          <Link to="/register" className="text-blue-600 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
