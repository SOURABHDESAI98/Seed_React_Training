import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { loggedIn, token } = useSelector((state: any) => state.user);
//   const isLoggedIn = sessionStorage.getItem("isLoggedIn");
//   const token = sessionStorage.getItem("token");
  if (!loggedIn || !token) {
  
    alert("❌ You must be logged in to access this page.");
    return <Navigate to="/login" replace />;
  } else {
    return <>{children}</>;
  }
};

export default ProtectedRoute;
