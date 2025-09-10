// src/components/PrivateRoute.js
import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("token"); // check auth
  if (!token) {
    return <Navigate to="/login" replace />; // redirect to login if not logged in
  }
  return children; // render protected component
};

export default PrivateRoute;
