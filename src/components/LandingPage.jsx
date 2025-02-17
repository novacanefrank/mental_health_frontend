import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import '../style/LandingPage.css';

// const LandingPage = () => {
//     return (
//         <div className="landing-page">
//             <header className="header_dash">
//                 <h1>Unlock Your Mental Wellness</h1>
//                 <div className="cta-buttons">
//                     <Link to="/register" className="cta-button">Join Now</Link> {/* Link to Register */}
//                     <Link to="/login" className="cta-button secondary">Log In</Link> {/* Link to Login */}
//                 </div>
//             </header>

//             <section className="features">
//                 <h2>Explore Our Resources</h2>
//                 <div className="feature-items">
//                     <div className="feature-item">
//                         <h3>Exercises</h3>
//                         <p>Engage in mindfulness exercises designed to improve your mental clarity and reduce stress.</p>
//                     </div>
//                     <div className="feature-item">
//                         <h3>Journaling</h3>
//                         <p>Reflect on your thoughts and feelings with our guided journaling prompts.</p>
//                     </div>
//                     <div className="feature-item">
//                         <h3>Goal Setting</h3>
//                         <p>Set achievable goals to foster growth and keep track of your progress.</p>
//                     </div>
//                     <div className="feature-item">
//                         <h3>Mood Tracker</h3>
//                         <p>Monitor your mood daily to identify patterns and triggers.</p>
//                     </div>
//                 </div>
//             </section>

//             <footer className="footer">
//                 <p>&copy; 2023 Mental Health Help. All rights reserved.</p>
//             </footer>
//         </div>
//     );
// };

// export default LandingPage;





const LandingPage = () => {
    return (
      <div className="landing-container">
        {/* Hero Section */}
        <div className="hero-section">
          <div className="text-content">
            <h1>Mental Health</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam 
              nonummy nibh euismod.
            </p>
            <button className="learn-more-btn">Learn More</button>
          </div>
          <div className="image-content">
            <img src="landd.png" alt="Mental Health Illustration" />
          </div>
        </div>
  
        {/* Features Section - Below the Hero Section */}
        <section className="features">
          <h2>Explore Our Resources</h2>
          <div className="feature-items">
            <div className="feature-item">
              <h3>Exercises</h3>
              <p>Engage in mindfulness exercises designed to improve your mental clarity and reduce stress.</p>
            </div>
            <div className="feature-item">
              <h3>Journaling</h3>
              <p>Reflect on your thoughts and feelings with our guided journaling prompts.</p>
            </div>
            <div className="feature-item">
              <h3>Goal Setting</h3>
              <p>Set achievable goals to foster growth and keep track of your progress.</p>
            </div>
            <div className="feature-item">
              <h3>Mood Tracker</h3>
              <p>Monitor your mood daily to identify patterns and triggers.</p>
            </div>
          </div>
        </section>
  
        {/* Footer Section */}
        <footer className="footer">
          <p>&copy; 2025 Mental Health Help. All rights reserved.</p>
        </footer>
      </div>
    );
  };
  
  export default LandingPage;


