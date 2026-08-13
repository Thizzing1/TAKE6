import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import VerifyOtp from "./components/VerifyOtp/VerifyOtp";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import ResetPassword from "./components/ResetPassword/ResetPassword";
import PasswordUpdated from "./components/PasswordUpdated/PasswordUpdated";
import LocationSearch from "./pages/LocationSearch";





function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<LandingPage />} />

        <Route path="/signup" element={<Signup />} />

        <Route path="/login" element={<Login />} />

        <Route path="/home" element={<Home />} />
        <Route path="/verify" element={<VerifyOtp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/password-updated" element={<PasswordUpdated />} />
        <Route path="/location-search" element={<LocationSearch />} />


      </Routes>

    </BrowserRouter>
  );
}

export default App;