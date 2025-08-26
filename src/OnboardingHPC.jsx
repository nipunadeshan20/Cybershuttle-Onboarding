import React, { useState } from "react";
import "../src/css/index.css";
import "../src/css/OnboardingStep4.css";
import OutlinedButton from "./components/OutlinedButton";
import OnboardingStep4 from "./components/OnboardingStep4";
import CustomizedProgressBars from "./components/CustomizedProgressBars";
import { TbSmartHome } from "react-icons/tb";
import logo from "../src/assets/logo.png";
import { ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export default function OnboardingStep4Page() {
  const [selected, setSelected] = useState("");
  const navigate = useNavigate();

  const handleNextClick = () => {
    if (selected === "Yes, I do") {
      navigate("/OnboardingHPC");
    } else if (selected === "No, I don’t") {
      navigate("/OnboardingNoHPC");
    } else if (selected === "I wish to work with paid cloud resources") {
      navigate("/OnboardingCloudPaid");
    } else {
      alert("Please select an option before proceeding.");
    }
  };

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
            <div className="heading-lines">
              <hr className="heading-line" />
              <hr className="heading-line2" />
            </div>
          </h2>
        </div>
      </div>

      {/* Right panel */}
      <div className="signin-right">
        <div className="signin-top">
          <img src={logo} alt="Cybershuttle" className="logo-img2" />
          <div className="ProgressBar">
            <CustomizedProgressBars value={50} />
          </div>
        </div>

        <div className="signin-middle">
          <div className="signin-content-wrapper">
            <OnboardingStep4 selected={selected} setSelected={setSelected} />
          </div>
        </div>

        <div className="signin-bottom">
          <div className="onboarding-footer2">
            <Link to="/OnboardingStep3" className="btn-outline">Back</Link>
            <div className="footer-right">
              <button className="btn-skip">Skip for now</button>
              <button className="btn-next" onClick={handleNextClick}>
                Next <ArrowRight size={16} />
              </button>
            </div>
          </div>
          <p className="NeedHelpOpt">
            Need help?
            <a href="#" className="NeedHelpOpt2 textHover">Get Support</a>
          </p>
        </div>
      </div>
    </div>
  );
}
