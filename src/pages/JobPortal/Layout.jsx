import React from 'react';
import { Outlet } from 'react-router-dom';

const JobPortalLayout = () => {
  return (
    <div>
      <h1>JobPortal</h1>
      <Outlet />
    </div>
  );
};

export default JobPortalLayout;
