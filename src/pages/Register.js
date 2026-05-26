import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';

function FloatField({ label, type = 'text', value, onChange, placeholder }) {
  return (
    <div className="field-wrap">
      <label className="field-label">{label}</label>
      <input
        className="field-input"
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
}

function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
    company: '',
    isAgency: 'yes',
  });

  const set = (key) => (e) => setForm({ ...form, [key]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/account');
  };

  return (
    <div className="page register-page">
      <div className="register-scroll">
        <h1 className="register-title">
          Create your<br />PopX account
        </h1>

        <form className="register-form" onSubmit={handleSubmit}>
          <FloatField
            label="Full name*"
            value={form.fullName}
            onChange={set('fullName')}
            placeholder="Marry Doe"
          />
          <FloatField
            label="Phone number *"
            type="tel"
            value={form.phone}
            onChange={set('phone')}
            placeholder="Marry Doe"
          />
          <FloatField
            label="Email Address *"
            type="email"
            value={form.email}
            onChange={set('email')}
            placeholder="Marry Doe"
          />
          <FloatField
            label="Password *"
            type="password"
            value={form.password}
            onChange={set('password')}
            placeholder="Marry Doe"
          />
          <FloatField
            label="Company name"
            value={form.company}
            onChange={set('company')}
            placeholder="Marry Doe"
          />

          {/* Agency radio */}
          <div className="agency-section">
            <p className="agency-question">Are you an Agency?</p>
            <div className="agency-radios">
              <label className="radio-label">
                <input
                  type="radio"
                  name="agency"
                  value="yes"
                  checked={form.isAgency === 'yes'}
                  onChange={set('isAgency')}
                  className="radio-input"
                />
                <span className="radio-custom" />
                <span className="radio-text">Yes</span>
              </label>
              <label className="radio-label">
                <input
                  type="radio"
                  name="agency"
                  value="no"
                  checked={form.isAgency === 'no'}
                  onChange={set('isAgency')}
                  className="radio-input"
                />
                <span className="radio-custom" />
                <span className="radio-text">No</span>
              </label>
            </div>
          </div>

          {/* Spacer so button sits at bottom */}
          <div className="register-spacer" />

          <button type="submit" className="btn-purple">
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
