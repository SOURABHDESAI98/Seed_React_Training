import { Link, Route, Routes, useLocation } from "react-router-dom";
import Contact from "../Pages/Contact";
import About from "../Pages/About";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Dashboard from "../Pages/Dashboard";
import ProtectedRoute from "./ProtectedRoute";

export default function Launcher() {
  const location = useLocation();

  const isActive = (path: string) => {
    return (
      location.pathname === path ||
      (path === "/home" && location.pathname === "/")
    );
  };

  return (
    <>
      <nav className="nav-container">
        <div className="nav-content">
          <Link to="/home" className="nav-brand">
            🚀 MyApp
          </Link>
          <div className="nav-links">
            <Link
              to="/home"
              className={`nav-link ${isActive("/home") || isActive("/") ? "active" : ""}`}
            >
              Home
            </Link>
              <Link
              to="/dashboard"
              className={`nav-link ${isActive("/dashboard") ? "active" : ""}`}
            >
              Dashboard
            </Link>
            <Link
              to="/about"
              className={`nav-link ${isActive("/about") ? "active" : ""}`}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`nav-link ${isActive("/contact") ? "active" : ""}`}
            >
              Contact
            </Link>
            <Link
              to="/login"
              className={`nav-link ${isActive("/login") ? "active" : ""}`}
            >
              Login
            </Link>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/dashboard" element={ <ProtectedRoute><Dashboard /></ProtectedRoute> } />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="*"
          element={
            <div className="page-container">
              <div className="page-content">
                <div className="page-header">
                  <h1>404 - Page Not Found</h1>
                  <p>The page you're looking for doesn't exist.</p>
                </div>
              </div>
            </div>
          }
        />
      </Routes>
    </>
  );
}
