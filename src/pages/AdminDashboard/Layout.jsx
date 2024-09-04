import React from 'react';
import { Outlet } from 'react-router-dom';

const AdminDashboardLayout = () => {
  return (
    <div>
      <h1>AdminDashboard</h1>
      <Outlet />
    </div>
  );
};

export default AdminDashboardLayout;
