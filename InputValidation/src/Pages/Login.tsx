import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../Redux/Slices/UserSlice";

export default function Login() {
  const [name, setName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [nameError, setNameError] = React.useState("");
  const [passwordError, setPasswordError] = React.useState("");
  const { loggedIn, userName } = useSelector((state: any) => state.user);
  const dispatch = useDispatch();
  const handleLogin = async () => {
    // sessionStorage.setItem('isLoggedIn', 'false');
    if (!name || !password) {
      setNameError("Username is required");
      setPasswordError("Password is required");
      return;
    } else if (name.length < 3 || password.length < 4) {
      if (name.length < 3)
        setNameError("Username must be at least 3 characters long");
      if (password.length < 4)
        setPasswordError("Password must be at least 4 characters long");
      return;
    } else {
     
      if (name!=="sourabh" || password!=="sourabh@123") {
        alert("❌ Login failed! Please check your credentials and try again.");
        return;
      } else {
        alert(`✅ Login successful! ${name} Welcome back.`);
        
        // sessionStorage.setItem("token", token.data.jwtoken);
        // sessionStorage.setItem('isLoggedIn', 'true');
        dispatch(login({ name, token: "dummyToken", loggedIn: true }));
        setNameError("");
        setPasswordError("");
        setName("");
      }
    }
  };

    const handleLogout =  () => {
    dispatch(logout());
  };

  return (
    <div className="login-container">
      {loggedIn !== true  ? (
        <div className="login-card">
          <div className="login-header">
            <h2>Welcome Back!</h2>
            <p>Please login to your account</p>
            <p>HINT: use "sourabh" as username and "sourabh@123" as password</p>
          </div>
          <form
            className="login-form"
            onSubmit={(e) => {
              e.preventDefault();
              handleLogin();
            }}
          >
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                placeholder="Enter your username"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <p style={{ color: "red" }}>{nameError}</p>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <p style={{ color: "red" }}>{passwordError}</p>
            </div>
            <button type="submit" className="login-button">
              Login
            </button>
          </form>
        </div>
      ) : (
        <>
          <div className="login-card">
            <div className="login-header">
              <h2>Logged In User ! {userName}</h2>

              <button type="button" className="login-button" onClick={handleLogout}>
                Logout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
