import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import AuthFormInput from '../components/AuthForm';
import { Link, useNavigate  } from 'react-router-dom';
import api from '../api/axios';


const Register = () => {
  
  const navigate = useNavigate(); 

  
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().min(3, 'At least 3 characters').required('Required'),
      email: Yup.string().email('Invalid email').required('Required'),
      password: Yup.string().min(6, 'Min 6 characters').required('Required'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Required'),
    }),
    onSubmit: async (values) => {
      try {
        const res = await api.post('/auth/register', {
          name: values.name,
          email: values.email,
          password: values.password,
        });
        alert('Registration successful');
        console.log(res.data);
        navigate('/login')
      } catch (err) {
        alert(err.response?.data?.message || 'Registration failed');
      }
    },
  });

  return (
    <div className="max-w-md mx-auto mt-16 p-8 border shadow-lg rounded-lg bg-white">
      <h2 className="text-3xl mb-6 font-bold text-center text-gray-700">Register</h2>
      <form onSubmit={formik.handleSubmit} className="space-y-4">
        <AuthFormInput label="Name" name="name" type="text" formik={formik} />
        <AuthFormInput label="Email" name="email" type="email" formik={formik} />
        <AuthFormInput label="Password" name="password" type="password" formik={formik} />
        <AuthFormInput label="Confirm Password" name="confirmPassword" type="password" formik={formik} />
        <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded">
          Register
        </button>
      </form>
      <div className="mt-4 text-center">
        <p className="text-sm">
          Already have an account?{' '}
          <Link to="/login" className="text-green-600 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
