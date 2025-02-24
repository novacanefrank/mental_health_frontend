import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import "../style/Header.css"; 

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token"); 
    const storedUsername = localStorage.getItem("username");

    if (token && token !== "false" && token !== "null" && token !== "undefined" && token.trim() !== "") {
      setIsLoggedIn(true);
      setUsername(storedUsername || "User"); 
    } else {
      setIsLoggedIn(false);
      setUsername(null);
      localStorage.removeItem("token");
    }
  }, []);

  const handleLogout = () => {
    console.log("Logging out..."); // Debugging log
    setShowLogoutConfirm(true); // Set to true to show confirmation
  };

  const confirmLogout = () => {
    console.log("Confirmed logout"); // Debugging log
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    setIsLoggedIn(false);
    setUsername(null);
    setShowLogoutConfirm(false); // Close the confirmation
    navigate("/"); // Redirect to home or login page
  };

  const cancelLogout = () => {
    console.log("Cancelled logout"); // Debugging log
    setShowLogoutConfirm(false); // Close confirmation without logout
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <header className="header">
        <div className="logo-section">
          <Link to="/">
            <img src="novacane.png" alt="Logo" className="home_logo" />
          </Link>
        </div>

        <nav className="navbar">
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/reviews">Reviews</Link></li>
            <li><Link to="/about">About Us</Link></li>
          </ul>
        </nav>

        <div className="auth-section">
          {isLoggedIn ? (
            <div className={`user-profile ${showDropdown ? "show-dropdown" : ""}`} ref={dropdownRef}>
              <div className="user-info" onClick={() => setShowDropdown(!showDropdown)}>
                <FaUserCircle className="user-icon" />
                <span className="username">{username}</span>
              </div>
              {showDropdown && (
                <div className="user-dropdown">
                  <ul>
                    <Link to="/dashboard" className="dropdown-item"><li>Dashboard</li></Link>
                    <li className="logout-item" onClick={handleLogout}>Logout</li>
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <div className="auth-buttons">
              <Link to="/login" className="login-button">Login</Link>
              <Link to="/register" className="register-button">Sign Up</Link>
            </div>
          )}
        </div>
      </header>

      {/* Logout Confirmation Popup */}
      {showLogoutConfirm && (
        <div className="logout-confirmation show">
          <p>Are you sure you want to logout?</p>
          <div className="logout-buttons">
            <button className="logout-yes" onClick={confirmLogout}>Yes</button>
            <button className="logout-no" onClick={cancelLogout}>No</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
