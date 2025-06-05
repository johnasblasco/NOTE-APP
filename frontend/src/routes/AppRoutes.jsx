// routes/AppRoutes.jsx
import { useRoutes, Navigate } from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Dashboard from '../pages/Dashboard';
import MainLayout from '../components/MainLayout';

export default function AppRoutes() {
  const routes = [
    // Public routes
    { path: '/', element: <Navigate to="/login" replace /> },
    { path: '/login', element: <Login /> },
    { path: '/register', element: <Register /> },

    // Protected/dashboard routes
    {
      path: '/dashboard',
      element: <MainLayout />,
      children: [
        { index: true, element: <Dashboard /> }, // default child route
      ],
    },

    // Catch-all
    { path: '*', element: <Navigate to="/login" replace /> },
  ];

  return useRoutes(routes);
}
