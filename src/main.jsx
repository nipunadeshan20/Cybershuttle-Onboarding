import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../src/css/index.css";
import SignInPage from "./SignIn.jsx";
import SignUpPage from "./SignUp.jsx";
import OnboardingStep1Page from "./OnboardingStep1.jsx";
import OnboardingStep2Page from "./OnboardingStep2.jsx";
import OnboardingStep3Page from "./OnboardingStep3.jsx";
import OnboardingStep4Page from "./OnboardingStep4.jsx";
import OnboardingHPCPage from "./OnboardingHPC.jsx";
import OnboardingNoHPCPage from './OnboardingNoHPC';
import OnboardingNoHPC2Page from "./OnboardingNoHPC2.jsx";
import OnboardingNoHPC3Page from "./OnboardingNoHPC3.jsx";
import OnboardingNoHPC4Page from "./OnboardingNoHPC4.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignInPage />} />
        <Route path="/SignUp" element={<SignUpPage />} />
        <Route path="/OnboardingStep1" element={<OnboardingStep1Page />} />
        <Route path="/SignUp" element={<OnboardingStep1Page />} />
        <Route path="/OnboardingStep2" element={<OnboardingStep2Page />} />
        <Route path="/OnboardingStep3" element={<OnboardingStep3Page />} />
        <Route path="/OnboardingStep4" element={<OnboardingStep4Page />} />
        <Route path="/OnboardingHPC" element={<OnboardingHPCPage />} />
        <Route path="/OnboardingNoHPC" element={<OnboardingNoHPCPage />} />
        <Route path="/OnboardingNoHPC2" element={<OnboardingNoHPC2Page />} />
        <Route path="/OnboardingNoHPC3" element={<OnboardingNoHPC3Page />} />
        <Route path="/OnboardingNoHPC4" element={<OnboardingNoHPC4Page />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
