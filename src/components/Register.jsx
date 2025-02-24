import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./../style/Register.css";
import { registerUser } from "../apis/api"; // Importing the API function

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
        // Call register API
        const response = await registerUser(formData);
        
        // Store userId in local storage
        localStorage.setItem("userId", response.data.userId);

        alert(response.data.message);
        navigate("/login"); // Redirect to login after successful registration
    } catch (err) {
        // Improved error handling
        if (err.response) {
            setError(err.response.data.error || "Registration failed.");
        } else if (err.request) {
            setError("No response from server. Please try again later.");
        } else {
            setError("An unexpected error occurred.");
        }
    }
};


  return (
    <div className="register-container">
      <div className="register-box">
        <h2>Create Your Account</h2>
        <p>Join us to explore new opportunities.</p>
        {error && <p className="error-text">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Username</label>
            <input
              type="text"
              name="username"
              placeholder="Enter your username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="email@gmail.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="register-btn">Sign Up</button>
        </form>
        <p className="login-text">
          Already have an account? <a href="/login">Log in</a>
        </p>
      </div>
    </div>
  );
};

export default Register;