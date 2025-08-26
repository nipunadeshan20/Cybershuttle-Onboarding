import React, { useState } from "react";
import "../css/OnboardingStep3.css";
import { ArrowRight } from "lucide-react";

export default function OnboardingStep3() {
  const [selected, setSelected] = useState([]);

  return (
    <div className="onboarding2-wrapper">
      <h2 className="onboarding2-title2 HeadingGettingStarted">
        Do you have any research or publications you'd like to share?
      </h2>

      <div className="publication-container ">
        <div className="publication-input-wrapper">
          <input
            type="text"
            placeholder="Paste your publication link"
            className="publication-input"
          />
          <button className="paste-button">Paste</button>
        </div>
        <p className="publication-helper">
          e.g., Google Scholar, ORCID, ResearchGate, or any page listing your
          work
        </p>
      </div>
    </div>
  );
}
