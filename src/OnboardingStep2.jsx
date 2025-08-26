import React from "react";
import "../src/css/index.css";
import "../src/css/OnboardingStep2.css";
import OutlinedButton from "./components/OutlinedButton";
import OnboardingStep2 from "./components/OnboardingStep2";
import CustomizedProgressBars from "./components/CustomizedProgressBars";
import { TbSmartHome } from "react-icons/tb";
import logo from "../src/assets/logo.png";
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function OnboardingStep2Page() {
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
  <div className="signin-top">
    <img src={logo} alt="Cybershuttle" className="logo-img2" />
    <div className="ProgressBar">
      <CustomizedProgressBars value={25} />
    </div>
  </div>

  <div className="signin-middle">
    <div className="signin-content-wrapper">
      <OnboardingStep2 />
    </div>
  </div>

  <div className="signin-bottom">
    <div className="onboarding-footer2">
      <Link to="/OnboardingStep1" className="btn-outline">Back</Link>
      <div className="footer-right">
        <button className="btn-skip">Skip for now</button>
        <Link to="/OnboardingStep3" className="btn-next">
          Next <ArrowRight size={16} />
        </Link>
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
