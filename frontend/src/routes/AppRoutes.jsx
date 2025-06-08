import { useRoutes, Navigate } from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Dashboard from '../pages/Dashboard';
import MainLayout from '../components/MainLayout';
import ProtectedRoute from '../components/ProtectedRoute'; // ✅ import

export default function AppRoutes() {
  const routes = [
    { path: '/', element: <Navigate to="/login" replace /> },
    { path: '/login', element: <Login /> },
    { path: '/register', element: <Register /> },

    {
      path: '/dashboard',
      element: (
        <ProtectedRoute>
          <MainLayout />
        </ProtectedRoute>
      ),
      children: [
        { index: true, element: <Dashboard /> },
      ],
    },

    { path: '*', element: <Navigate to="/login" replace /> },
  ];

  return useRoutes(routes);
}
