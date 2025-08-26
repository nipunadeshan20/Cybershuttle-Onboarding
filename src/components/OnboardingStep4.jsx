import React from "react";
import Radio from "@mui/material/Radio";
import "../css/OnboardingStep4.css";

export default function OnboardingStep4({ selected, setSelected }) {
  const options = [
    "Yes, I do",
    "No, I don't",
    "I wish to work with paid cloud resources",
  ];

  const handleChange = (event) => {
    setSelected(event.target.value);
  };

  const OPTIONS = {
    YES: "Yes, I do",
    NO: "No, I don't",
    CLOUD: "I wish to work with paid cloud resources",
  };

  return (
    <div className="onboarding2-wrapper">
      <h2 className="onboarding2-title2 HeadingGettingStarted">
        Do you have access to any HPC resources for your work?
      </h2>

      <div className="radio-group">
        {options.map((opt) => (
          <label
            key={opt}
            className={`radio-option ${selected === opt ? "selected" : ""}`}
          >
            <Radio
              size="small"
              checked={selected === opt}
              onChange={handleChange}
              value={opt}
              name="cloud"
              inputProps={{ "aria-label": opt }}
              sx={{ padding: "0 0px 0 0" }}
            />
            <span>{opt}</span>
          </label>
        ))}
        <p className="publication-helper2">
          This helps us guide you through the right setup path - either
          registering your resources or requesting HPC/cloud access.
        </p>
      </div>
    </div>
  );
}
