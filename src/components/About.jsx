import React from "react";
import "../style/About.css"; // Import the CSS file

const About = () => {
  return (
    <div className="about-container">
      {/* Image Section */}
      <div className="about-image">
        <img
          src="prog.gif" // Replace with your image URL
          alt="Team"
        />
      </div>

      {/* Text Section */}
      <div className="about-text">
        <h2>About Novana</h2>
        <p>
          Novana is your personal companion for mental well-being and self-improvement. We provide a supportive space where you can set meaningful goals, express yourself through journaling, take notes for reflection, and engage in daily exercises designed to boost your mental health. Our mission is to help you cultivate a balanced and fulfilling life by making mindfulness and self-care a daily habit. Whether you’re looking to track your progress, manage stress, or build a positive mindset, Novana is here to support you every step of the way.
        </p>

        {/* Features Section */}
        <div className="about-features">
          <div className="about-feature">
            <span className="icon">📖</span>
            <div>
              <h3>Journaling</h3>
              <p>
                Reflect on your thoughts, express emotions, and track your mental well-being over time.
              </p>
            </div>
          </div>

          <div className="about-feature">
            <span className="icon">🎯</span>
            <div>
              <h3>Goal Setting</h3>
              <p>
                Define personal milestones and stay motivated to achieve them with structured goal tracking.
              </p>
            </div>
          </div>

          <div className="about-feature">
            <span className="icon">📝</span>
            <div>
              <h3>Notes</h3>
              <p>
                Jot down important thoughts, reminders, or inspirations to keep your mind clear and focused.
              </p>
            </div>
          </div>

          <div className="about-feature">
            <span className="icon">💪</span>
            <div>
              <h3>Exercises</h3>
              <p>
                Engage in daily exercises that promote mindfulness, relaxation, and emotional resilience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
