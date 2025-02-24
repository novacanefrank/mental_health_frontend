import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./../style/Login.css";
import { loginUser } from "../apis/api"; // Importing the API function

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
        const response = await loginUser({ email, password }); // Call login API
        const { token, username, userId } = response.data;

        // Store authentication details in local storage
        localStorage.setItem("token", token);
        localStorage.setItem("username", username);
        localStorage.setItem("userId", userId); // Store userId in local storage

        alert("Login successful");
        navigate("/dashboard"); // Redirect to dashboard after successful login
    } catch (err) {
        setError(err.response?.data?.error || "Login failed. Please check your credentials.");
    }
};

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="left-section">
          <h2>Get track of your life</h2>
          <p>Start for free and get attractive offers from the community.</p>
          {error && <p className="error-text">{error}</p>}
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label>Email</label>
              <input 
                type="email" 
                placeholder="email@gmail.com" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <label>Password</label>
              <input 
                type="password" 
                placeholder="Enter your password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="login-btn">Login</button>
          </form>
          <p className="register-text">
            Not Registered Yet?{" "}
            <a href="/register">Create an account</a>
          </p>
        </div>
        <div className="right-section">
          <img src="/guy.png" alt="Illustration" className="right-section-img" />
        </div>
      </div>
    </div>
  );
};

export default Login;
