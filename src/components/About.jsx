import React from "react";
import "../style/About.css"; // Import the CSS file

const About = () => {
  return (
    <div className="about-container">
      {/* Image Section */}
      {/* <div className="about-image">
        <img
          src="giphy.gif" // Replace with your image URL
          alt="Team"
        />
      </div> */}

      {/* Text Section */}
      <div className="about-text">
        <h2>Who Are We?</h2>
        <p>
        At Novana, our mission is to empower individuals to take control of their personal growth and mental well-being. We understand that achieving goals and maintaining a positive mindset can be challenging, which is why we've created a platform that integrates goal setting, journaling exercises, and mood tracking all in one place. Our goal is to provide users with a simple, intuitive tool to track progress, reflect on their thoughts, and stay motivated. Whether you’re striving for personal development or just need a daily mental health check-in, we’re here to support you every step of the way. We believe that with the right tools, everyone can unlock their potential and live a more fulfilling life.
        </p>
        

        {/* Features Section */}
        <div className="about-features">
          <div className="about-feature">
            <span className="icon">⚡</span>
            <div>
              <h3>Versatile Brand</h3>
              <p>
                We are crafting a digital method that subsists life across all mediums.
              </p>
            </div>
          </div>

          <div className="about-feature">
            <span className="icon">💧</span>
            <div>
              <h3>Digital Agency</h3>
              <p>
                We believe in innovation by integrating primary with elaborate ideas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
