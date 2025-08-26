import React from "react";
import "../css/OnboardingNoHPC4.css";
import AllSetIcon from "../assets/AllSet.png";
import AllSetLine from "../assets/AllSetLine.png";

export default function OnboardingNoHPC4() {
  return (
    <div className="onboarding2-wrapper">
      <h2 className="ALlSetHeading">You’re All Set!</h2>

      <img src={AllSetIcon} alt="Cybershuttle" className="AllSetIcon" />
      <p className="AllSetHelper">
        Access requests submitted. You’ll be notified once approved. In the
        meantime, feel free to explore or continue setting up your workspace.
      </p>
      <img src={AllSetLine} alt="Cybershuttle" className="AllSetLine" />
    </div>
  );
}
