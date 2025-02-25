import React from "react";
import "../style/Profile.css";

const Profile = () => {
  return (
    <div className="profile-container">
      <h1>Profile</h1>
      <form className="profile-form">
        <div className="input-group">
          <label>Username</label>
          <input type="text" placeholder="Enter your username" />
        </div>
        <div className="input-group">
          <label>Email</label>
          <input type="email" placeholder="Enter your email" />
        </div>
        <div className="input-group">
          <label>Password</label>
          <input type="password" placeholder="Enter current password" />
        </div>
        <div className="input-group">
          <label>New Password</label>
          <input type="password" placeholder="Enter new password" />
        </div>
        <button type="submit" className="save-btn">Save Changes</button>
      </form>
    </div>
  );
};

export default Profile;
