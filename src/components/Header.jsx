import React from "react";
import "../style/Header.css";

const Header = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/novacane.png" alt="Novana Logo" className="logo-img" />
      </div>
      <div className="nav-links">
        <a href="#" className="nav-link">Home</a>
        <a href="#" className="nav-link">About Us</a>
        <a href="#" className="nav-link">Contact</a>
      </div>
      <div className="auth-buttons">
        <button className="sign-in">Sign In</button>
        <button className="sign-up">Sign Up</button>
      </div>
      <div className="notification-icon">
        <span>🔔</span> {/* Notification icon */}
      </div>
      <div className="profile-icon">
        <span>👤</span> {/* Profile icon */}
      </div>
    </nav>
  );
};

export default Header;
