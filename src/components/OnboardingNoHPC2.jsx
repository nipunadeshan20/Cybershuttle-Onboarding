import React, { useState } from "react";
import "../css/OnboardingNoHPC2.css";

export default function OnboardingNoHPC2() {
  const [cpu, setCpu] = useState(0);
  const [gpu, setGpu] = useState(0);
  const [ram, setRam] = useState(128);
  const [wallTime, setWallTime] = useState(60);

  const handleChange = (setter, val) => {
  setter(Math.max(0, val));
};


  return (
    <div className="onboarding2-wrapper">
      <h2 className="onboarding2-title2">
        Let us know the compute power you need for your work
      </h2>

      <div className="resource-config-table">
        <ResourceRow label="CPU count" value={cpu} unit="" onChange={(val) => handleChange(setCpu, val)} />
        <ResourceRow label="GPU count" value={gpu} unit="" onChange={(val) => handleChange(setGpu, val)} />
        <ResourceRow label="RAM" value={ram} unit="GB" onChange={(val) => handleChange(setRam, val)} />
        <ResourceRow label="Wall Time" value={wallTime} unit="Minutes" onChange={(val) => handleChange(setWallTime, val)} />
      </div>
    </div>
  );
}

function ResourceRow({ label, value, unit, onChange }) {
  const handleInputChange = (e) => {
    const val = e.target.value;
    if (/^\d*$/.test(val)) {
      onChange(Number(val));
    }
  };

  return (
    <div className="resource-row">
      <span className="resource-label">{label}</span>
      <span className="colon">:</span>
      <div className="resource-input-wrapper">
        <input
          type="text"
          className="resource-input"
          value={value}
          onChange={handleInputChange}
        />
        <div className="resource-controls">
          {unit && <span className="resource-unit">{unit}</span>}
          <button className="resource-btn" onClick={() => onChange(value - 1)}>
            -
          </button>
          <button className="resource-btn" onClick={() => onChange(value + 1)}>
            +
          </button>
        </div>
      </div>
    </div>
  );
}


