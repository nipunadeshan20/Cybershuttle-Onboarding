import React from "react";
import "../src/css/index.css";
import "../src/css/signin.css";
import { useState } from "react";
import OutlinedButton from "./components/OutlinedButton";
import SignUpForm from "./components/SignUpForm";
import { TbSmartHome } from "react-icons/tb";
import logo from "../src/assets/logo.png";
import { Link } from "react-router-dom";


export default function SignUpPage() {
  return (
    <div className="signin-container">
      {/* Left panel */}
      <div className="signin-left">
        <div>
          <OutlinedButton className="HomeButton">
            <TbSmartHome style={{ fontSize: "17px", marginRight: 4 }} />
            Home
          </OutlinedButton>
        </div>
        <div className="signin-overlay">
          <h2 className="signin-heading">
            Your Gateway to Seamless
            <br />
            Scientific Computing
            <tr>
              <td>
                <hr className="heading-line" />
              </td>
              <td>
                <hr className="heading-line2" />
              </td>
            </tr>
          </h2>
        </div>
      </div>

      {/* Right panel */}
      <div className="signin-right">
        <img src={logo} alt="Cybershuttle" className="logo-img" />

        <div className="signin-content-wrapper">
          <h1 className="welcomeText">Create Account</h1>
          <p className="welcomeText2">
            Enter your information to create a new account and join the platform.
          </p>
          <SignUpForm />
          <p className="NoAccount">
            Don’t have an account?
            <Link to="/" className="NoAccount2 textHover">
              Sign In
            </Link>
          </p>
        </div>

        <p className="NeedHelpOpt">
          Need help?
          <a href="#" className="NeedHelpOpt2 textHover">
            Get Support
          </a>
        </p>
      </div>
    </div>
  );
}
