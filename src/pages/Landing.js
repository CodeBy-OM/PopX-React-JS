import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Landing.css';

function Landing() {
  const navigate = useNavigate();

  return (
    <div className="page landing-page">
      {/* Top illustration area — light blue-white gradient fills space */}
      <div className="landing-top" />

      {/* Bottom content card */}
      <div className="landing-bottom">
        <h1 className="landing-title">Welcome to PopX</h1>
        <p className="landing-sub">
          Lorem ipsum dolor sit amet,<br />consectetur adipiscing
        </p>

        <div className="landing-actions">
          <button className="btn-purple" onClick={() => navigate('/register')}>
            Create Account
          </button>
          <button className="btn-pink" onClick={() => navigate('/login')}>
            Already Registered? Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Landing;
