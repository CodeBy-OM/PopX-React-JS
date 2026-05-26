import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/account');
  };

  return (
    <div className="page login-page">
      <div className="login-inner">
        <h1 className="login-title">
          Sign in to your<br />PopX account
        </h1>
        <p className="login-sub">
          Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit.
        </p>

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="field-wrap">
            <label className="field-label">Email Address</label>
            <input
              className="field-input"
              type="email"
              placeholder="Enter email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="field-wrap">
            <label className="field-label">Password</label>
            <input
              className="field-input"
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="login-spacer" />

          <button type="submit" className="btn-purple">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
