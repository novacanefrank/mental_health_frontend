import React from "react";
import { Link } from "react-router-dom";
import { FaHeartbeat, FaBook, FaBullseye, FaSmile } from "react-icons/fa"; // Import icons
import "../style/LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-container">
      {/* Hero Section */}
      <div className="hero-section fade-in">
        <div className="text-content">
          <h1>Welcome to Novana</h1>
          <p>
            Your personal space for growth and self-care. Whether you're setting
            goals or reflecting on your day, we're here to support your journey.
          </p>
          <button className="about-button">
          <Link to="/About">About Us</Link>
          </button>
        </div>
        <div className="image-content">
          <img src="landd.png" alt="Mental Health Illustration" />
        </div>
      </div>

      {/* Features Section */}
      <section className="features fade-in">
        <h2>Explore Our Resources</h2>
        <div className="feature-items">
          <div className="feature-item">
            <FaHeartbeat className="feature-icon" />
            <h3>Exercises</h3>
            <p>Engage in mindfulness exercises designed to improve mental clarity and reduce stress.</p>
          </div>
          <div className="feature-item">
            <FaBook className="feature-icon" />
            <h3>Journaling</h3>
            <p>Reflect on your thoughts and feelings with our guided journaling prompts.</p>
          </div>
          <div className="feature-item">
            <FaBullseye className="feature-icon" />
            <h3>Goal Setting</h3>
            <p>Set achievable goals to foster growth and keep track of your progress.</p>
          </div>
          <div className="feature-item">
            <FaSmile className="feature-icon" />
            <h3>Mood Tracker</h3>
            <p>Monitor your mood daily to identify patterns and triggers.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 Mental Health Help. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;



