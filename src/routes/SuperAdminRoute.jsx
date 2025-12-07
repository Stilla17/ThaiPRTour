// src/routes/SuperAdminRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import auth from '../auth';

const SuperAdminRoute = ({ children }) => {
  const role = auth.getRole();

  // Если нет роли, перенаправляем на главный вход
  if (!role) {
    return <Navigate to="/" replace />; 
  }

  // Разрешаем доступ только для superadmin
  if (role === 'superadmin') {
    return children;
  }

  // Если это обычный админ, перенаправляем его на его админ-панель, чтобы не показывать 403
  if (role === 'admin') {
      return <Navigate to="/admin" replace />;
  }

  // Если это не админ, перенаправляем на вход
  return <Navigate to="/" replace />; 
};

export default SuperAdminRoute;