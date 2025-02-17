import { Link } from "react-router-dom";
import '../style/Header.css';

const Header = () => {
  return (
    <div className="header">
      {/* Logo Section */}
      <div className="logo-section">
        <Link to="/">
          <img src="novacane.png "alt="Logo" className="home_logo" />
        </Link>
      </div>

      {/* Middle Section: Navbar */}
      <nav className="navbar">
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/reviews">Reviews</Link></li>
          <li><Link to="/about-us">About Us</Link></li>
          
        </ul>
      </nav>

      
      <div className="auth-buttons">
        <Link to="/login" className="login-button">Login</Link>
        <Link to="/register" className="register-button">Sign Up</Link>
        
      </div>
    </div>
  );
};

// const MainContent = () => {
//   return (
//     <div className="main-content">
//       <h1>Welcome to Novana</h1>
//       <p>Your one-stop shop for quality products.</p>
//       {/* Add more content as needed */}
//     </div>
//   );
// };

// export { Header, MainContent };
export default Header;