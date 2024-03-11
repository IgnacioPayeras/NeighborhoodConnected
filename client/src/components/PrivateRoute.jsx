import React from "react";
import { Route, Navigate } from "react-router-dom";
import { useUser } from "../context/UserProvider";

const PrivateRoute = ({ element, ...props }) => {
  const { user } = useUser();

  return user ? (
    <Route {...props} element={element} />
  ) : (
    <Navigate to="/login" replace />
  );
};

export default PrivateRoute;