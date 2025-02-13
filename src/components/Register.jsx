import React from "react";
import "./../style/Register.css";

const Register = () => {
  return (
    <div className="register-container">
      <div className="register-box">
        <h2>Create Your Account</h2>
        <p>Join us to explore new opportunities.</p>
        <form>
          <div className="input-group">
            <label>First Name</label>
            <input type="text" placeholder="Enter your first name" required />
          </div>
          <div className="input-group">
            <label>Last Name</label>
            <input type="text" placeholder="Enter your last name" required />
          </div>
          <div className="input-group">
            <label>Email</label>
            <input type="email" placeholder="email@gmail.com" required />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" required />
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