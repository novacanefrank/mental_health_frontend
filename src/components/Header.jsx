import { Link } from "react-router-dom";
import { useState } from "react";
import { FaUserCircle, FaBell } from "react-icons/fa";
import '../style/Header.css';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="header">
      {/* Logo Section */}
      <div className="logo-section">
        <Link to="/">
          <img src="novacane.png" alt="Logo" className="home_logo" />
        </Link>
      </div>

      {/* Middle Section: Navbar */}
      <nav className="navbar">
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/reviews">Reviews</Link></li>
          <li><Link to="/About">About Us</Link></li>
        </ul>
      </nav>

      {/* Right Section: Authentication or Profile & Notifications */}
      <div className="auth-buttons">
        {isLoggedIn ? (
          <div className="logged-in-section">
            <FaBell className="notification-icon" />
            <div className="profile-dropdown">
              <FaUserCircle className="profile-icon" onClick={() => setShowDropdown(!showDropdown)} />
              {showDropdown && (
                <div className="dropdown-menu">
                  <Link to="/profile" className="dropdown-item">Profile</Link>
                  <button onClick={handleLogout} className="dropdown-item">Logout</button>
                </div>
              )}
            </div>
          </div>
        ) : (
          <>
            <Link to="/login" className="login-button">Login</Link>
            <Link to="/register" className="register-button">Sign Up</Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
