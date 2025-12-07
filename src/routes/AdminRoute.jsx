// src/routes/AdminRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import auth from '../auth'; // Утилита для проверки роли

const AdminRoute = ({ children }) => {
  const role = auth.getRole();

  // Если нет роли, перенаправляем на главный вход
  if (!role) {
    return <Navigate to="/" replace />; 
  }

  // Разрешаем доступ, если роль admin или superadmin
  if (role === 'admin' || role === 'superadmin') {
    return children; 
  }

  // Иначе, запрещаем и перенаправляем
  return <Navigate to="/" replace />; 
};

export default AdminRoute;