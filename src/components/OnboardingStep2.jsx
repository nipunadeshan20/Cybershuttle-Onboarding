import React, { useState } from "react";
import "../css/OnboardingStep2.css"; 
import { ArrowRight } from "lucide-react";

import Checkbox from "@mui/material/Checkbox";
import modelIcon from "../assets/model.png";
import researchIcon from "../assets/research.png";
import datasetIcon from "../assets/dataset.png";
import otherIcon from "../assets/other.png";

const workOptions = [
  {
    id: "model",
    title: "Model Development",
    desc: "Train, test, or deploy ML models.",
    icon: modelIcon,
  },
  {
    id: "research",
    title: "Full Research Project",
    desc: "Manage projects with models and data.",
    icon: researchIcon,
  },
  {
    id: "dataset",
    title: "Dataset Work",
    desc: "I want to upload, explore, or analyze datasets.",
    icon: datasetIcon,
  },
  {
    id: "other",
    title: "Other Tasks",
    desc: "Different use case (e.g., testing or collaboration)",
    icon: otherIcon,
  },
];

export default function OnboardingStep2() {
  const [selected, setSelected] = useState([]);

  const toggleSelection = (id) => {
    if (selected.includes(id)) {
      setSelected(selected.filter((s) => s !== id));
    } else {
      setSelected([...selected, id]);
    }
  };

  return (
    <div className="onboarding2-wrapper">
      <h2 className="onboarding2-title HeadingGettingStarted">
        What type of work are you planning to do on CyberShuttle?
      </h2>

      <div className="work-options">
        {workOptions.map((option) => (
          <div
            key={option.id}
            className={`work-option ${
              selected.includes(option.id) ? "selected" : ""
            }`}
            onClick={() => toggleSelection(option.id)}
          >
            <img src={option.icon} alt={option.title} className="work-icon" />
            <div className="work-info">
              <h3>{option.title}</h3>
              <p>{option.desc}</p>
            </div>
            <Checkbox
              checked={selected.includes(option.id)}
              onChange={() => toggleSelection(option.id)}
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
