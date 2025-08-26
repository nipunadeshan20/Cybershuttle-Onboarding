import React, { useState } from "react";
import "../src/css/index.css";
import "../src/css/OnboardingStep4.css";
import OutlinedButton from "./components/OutlinedButton";
import OnboardingNoHPC2 from "./components/OnboardingNoHPC2";
import CustomizedProgressBars from "./components/CustomizedProgressBars";
import { TbSmartHome } from "react-icons/tb";
import logo from "../src/assets/logo.png";
import { ArrowRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export default function OnboardingNoHPC2Page() {
  const [selected, setSelected] = useState(""); 
  const navigate = useNavigate();

  const handleNextClick = () => {
    navigate("/OnboardingNoHPC3");
  };

  return (
    <div className="signin-container">
      {/* Left Panel */}
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

      {/* Right Panel */}
      <div className="signin-right">
        <div className="signin-top">
          <img src={logo} alt="Cybershuttle" className="logo-img2" />
          <div className="ProgressBar">
            <CustomizedProgressBars value={80} />
          </div>
        </div>

        <div className="signin-middle">
          <div className="signin-content-wrapper">
            <OnboardingNoHPC2 />
          </div>
        </div>

        <div className="signin-bottom">
          <div className="onboarding-footer2">
            <Link to="/OnboardingNoHPC" className="btn-outline">
              Back
            </Link>
            <div className="footer-right">
              <button className="btn-skip">Skip for now</button>
              <button className="btn-next" onClick={handleNextClick}>
                Next <ArrowRight size={16} />
              </button>
            </div>
          </div>
          <p className="NeedHelpOpt">
            Need help?
            <a href="#" className="NeedHelpOpt2 textHover">
              Get Support
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
