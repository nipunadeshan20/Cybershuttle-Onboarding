import React, { useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import '../css/SignInForm.css';
import CIlogonlogo from '../assets/CIlogon logo.png';

const SignInForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="signin-form">
      <input type="text" placeholder="Username" className="signin-input" />

      <div className="password-wrapper">
        <input
          type={showPassword ? 'text' : 'password'}
          placeholder="Password"
          className="signin-input"
        />
        <button
          type="button"
          className="eye-icon2"
          onClick={() => setShowPassword((prev) => !prev)}
        >
          {showPassword ? <FiEyeOff /> : <FiEye />}
        </button>
        <div className="forgot-text textHover">Forgot Password?</div>
      </div>

      <button className="signin-btn">Sign In</button>

      <div className="divider">
        <hr />
        <span>Or</span>
        <hr />
      </div>

      <button className="cilogon-btn">
        <img src={CIlogonlogo} alt="CILogon" />
        <span>Sign In with CILogon</span>
      </button>
    </div>
  );
};

export default SignInForm;
