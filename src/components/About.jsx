import React from "react";
import "../style/About.css"; // Import the CSS file

const About = () => {
  return (
    <div className="about-container">
      {/* Image Section */}
      <div className="about-image">
        <img
          src="giphy.gif" // Replace with your image URL
          alt="Team"
        />
      </div>

      {/* Text Section */}
      <div className="about-text">
        <h2>Who Are We?</h2>
        <p>
          We help people to build incredible brands and superior products.
          Our perspective is to furnish outstanding captivating services.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel
          consequat nibh, ac interdum nisl.
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
