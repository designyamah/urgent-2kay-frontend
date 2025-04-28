import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PickCategory } from "./screens/PickCategory";
import { BeneficiarySignup } from "./screens/BeneficiarySignup/BeneficiarySignup";
import { SponsorSignup } from "./screens/SponsorSignup/SponsorSignup";
import { Login } from "./screens/Login/Login";
import { DashboardLayout } from "./layouts/DashboardLayout";
import { Dashboard } from "./screens/Dashboard";
import { Requests } from "./screens/Requests";
import { Sponsors } from "./screens/Sponsors";
import { History } from "./screens/History";
import { Switch } from "./screens/Switch";
import { Settings } from "./screens/Settings";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PickCategory />} />
        <Route path="/beneficiary-signup" element={<BeneficiarySignup />} />
        <Route path="/sponsor-signup" element={<SponsorSignup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<DashboardLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="requests" element={<Requests />} />
          <Route path="sponsors" element={<Sponsors />} />
          <Route path="history" element={<History />} />
          <Route path="switch" element={<Switch />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);