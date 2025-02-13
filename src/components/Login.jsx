import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./../style/Login.css";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Hook to navigate

  const handleSubmit = (e) => {
    e.preventDefault();

    // Here you can add your authentication logic
    // For now, we'll just redirect to the dashboard

    navigate('/dashboard'); // Redirects to the dashboard
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="left-section">
          <h2>Turn your ideas into reality.</h2>
          <p>Start for free and get attractive offers from the community.</p>
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