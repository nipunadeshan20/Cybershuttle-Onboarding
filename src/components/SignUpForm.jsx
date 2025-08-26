import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import "../css/SignUpForm.css";
import CIlogonlogo from "../assets/CIlogon logo.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate("/OnboardingStep1");
  };

  return (
    <div className="signin-form">
      <tr className="FirstLastName">
        <td>
          <input
            type="text"
            placeholder="First Name"
            className="signin-input"
          />
        </td>
        <td>
          <input type="text" placeholder="Last Name" className="signin-input" />
        </td>
      </tr>
      <input type="text" placeholder="Username" className="signin-input" />
      <input type="text" placeholder="E-mail" className="signin-input" />

      <div className="password-wrapper">
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          className="signin-input"
        />
        <button
          type="button"
          className="eye-icon"
          onClick={() => setShowPassword((prev) => !prev)}
        >
          {showPassword ? <FiEyeOff /> : <FiEye />}
        </button>
      </div>
      <div className="password-wrapper">
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Confirm Password"
          className="signin-input"
        />
        <button
          type="button"
          className="eye-icon"
          onClick={() => setShowPassword((prev) => !prev)}
        >
          {showPassword ? <FiEyeOff /> : <FiEye />}
        </button>
      </div>

      <button className="signin-btn" onClick={handleSignUpClick}>
        Sign Up
      </button>

      <div className="divider">
        <hr />
        <span>Or</span>
        <hr />
      </div>

      <button className="cilogon-btn">
        <img src={CIlogonlogo} alt="CILogon" />
        <span>Sign Up with CILogon</span>
      </button>
    </div>
  );
};

export default SignUpForm;
