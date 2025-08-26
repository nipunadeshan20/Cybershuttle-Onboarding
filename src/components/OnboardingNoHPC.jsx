import React from "react";
import "../css/OnboardingNoHPC.css";

export default function OnboardingNoHPC() {
  return (
    <div className="onboarding2-wrapper">
      <h2 className="onboarding3-title3 HeadingGettingStarted">
        Tell Us About Your Work
      </h2>

      <div className="custom-textarea-wrapper">
        <textarea
          id="comment"
          placeholder="Provide a brief overview of your research"
          rows={4}
          className="custom-textarea"
          required
        />
        <label htmlFor="comment" className="custom-label">
          (Maximum 500 words)
        </label>
      </div>

      <div className="custom-textarea-wrapper2">
        <textarea
          id="comment"
          placeholder="Describe why you need resources"
          rows={4}
          className="custom-textarea"
          required
        />
        <label htmlFor="comment" className="custom-label">
          (Maximum 500 words)
        </label>
      </div>
    </div>
  );
}
