import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import '../css/OnboardingStep1.css';

export default function OnboardingStep1() {
  return (
    <div className="onboarding-wrapper">
      <div className="onboarding-container">
        <div className="onboarding-body">
          <h1 className="HeadingGettingStarted">Getting Started with CyberShuttle</h1>
          <ul className="onboarding-steps">
            <li>Answer the next few questions to help us understand your workflow.</li>
            <li>If you have access to compute resources, you’ll be able to register and use them.</li>
            <li>If not, don’t worry – we’ll help you request access to available HPC clusters for your work.</li>
            <li>Or, if you prefer to work with paid cloud resources, you can continue with that option as well.</li>
          </ul>
        </div>

        
      </div>
    </div>
  );
}
