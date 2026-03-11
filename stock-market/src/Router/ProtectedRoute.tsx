
import { Navigate } from "react-router-dom";
import { type ReactNode } from 'react';
interface ProtectedRouteProps {
  children: ReactNode;
}
export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  {
   
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    return isLoggedIn==='true' ? children : <Navigate to="/login" />;
  }
}
