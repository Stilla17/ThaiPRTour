// src/App.js
import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import auth from './auth';

import UserLogin from './pages/UserLogin';
import Login from './pages/Login';
import Register from './pages/Register';

import Home from './pages/Home'; 

import SuperAdminDashboard from './pages/SuperAdminDashboard';
import AdminDashboard from './pages/AdminDashboard';

// ROUTES
import AdminRoute from './routes/AdminRoute';
import SuperAdminRoute from './routes/SuperAdminRoute';

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const role = auth.getRole();

    if (role) {
      if (role === 'user') {
        navigate('/home', { replace: true });
      } else if (role === 'admin') {
        navigate('/admin', { replace: true });
      } else if (role === 'superadmin') {
        navigate('/superadmin', { replace: true });
      }
    }
  }, [navigate]);

  return (
    <Routes>
      <Route path="/" element={<UserLogin />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="/home" element={<Home />} />

      <Route
        path="/admin"
        element={
          <AdminRoute>
            <AdminDashboard />
          </AdminRoute>
        }
      />

      <Route
        path="/superadmin"
        element={
          <SuperAdminRoute>
            <SuperAdminDashboard />
          </SuperAdminRoute>
        }
      />
    </Routes>
  );
};

export default App;
