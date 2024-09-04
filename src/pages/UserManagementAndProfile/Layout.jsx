import Home from "../Home/Home";
import React from "react";
import { Outlet } from "react-router-dom";

const UserManagementAndProfileLayout = () => {
  return (
    <div>
      <h1>UserManagementAndProfile</h1>
      <Outlet />
    </div>
  );
};

export default UserManagementAndProfileLayout;
