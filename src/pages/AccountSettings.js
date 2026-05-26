import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AccountSettings.css';

/* Inline SVG avatar placeholder — matches the circular photo in the design */
function Avatar() {
  return (
    <div className="avatar-circle">
      {/* Realistic avatar using gradient + initials */}
      <svg width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="34" cy="34" r="34" fill="#D4A5A5" />
        <circle cx="34" cy="26" r="12" fill="#B07070" />
        <ellipse cx="34" cy="54" rx="19" ry="14" fill="#B07070" />
        {/* face highlights */}
        <circle cx="34" cy="26" r="10" fill="#C89090" />
        <ellipse cx="34" cy="53" rx="17" ry="12" fill="#C89090" />
      </svg>
    </div>
  );
}

function AccountSettings() {
  const navigate = useNavigate();

  return (
    <div className="page account-page">
      {/* Header row */}
      <div className="account-header">
        <h1 className="account-heading">Account Settings</h1>
      </div>

      {/* Profile card */}
      <div className="profile-card">
        <Avatar />
        <div className="profile-text">
          <p className="profile-name">Marry Doe</p>
          <p className="profile-email">Marry@Gmail.Com</p>
        </div>
      </div>

      {/* Divider + bio */}
      <div className="account-bio-section">
        <p className="account-bio">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod
          Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
        </p>
        <div className="bio-divider" />
      </div>

      {/* Back to home (extra UX) */}
      <div className="account-footer">
        <button className="btn-back" onClick={() => navigate('/')}>
          ← Back to Home
        </button>
      </div>
    </div>
  );
}

export default AccountSettings;
