import React from 'react';
import './Settings.css';

const Settings = () => {
  return (
    <div className="settings-container">
      <h1 className="settings-title">Account Settings</h1>
      <p className="settings-text">Update your profile and preferences here.</p>

      <form className="settings-form">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" className="form-control" placeholder="Enter username" />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" className="form-control" placeholder="Enter email" />
        </div>

        <div className="form-group">
          <label htmlFor="password">New Password</label>
          <input type="password" id="password" className="form-control" placeholder="Enter new password" />
        </div>

        <button type="submit" className="btn btn-primary w-100">Save Changes</button>
      </form>
    </div>
  );
};

export default Settings;
