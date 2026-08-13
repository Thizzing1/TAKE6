import AuthLayout from "../AuthLayout/AuthLayout";
import AuthHero from "../AuthHero/AuthHero";
import AuthCard from "../AuthCard/AuthCard";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import "./ForgotPassword.css";
// import axios from "axios";
import { createClient } from "@supabase/supabase-js";

const supabaseurl = import.meta.env.VITE_supabaseurl;
const supabasekey = import.meta.env.VITE_supabasekey;

const supabase = createClient(supabaseurl, supabasekey);




const API_URL=import.meta.env.VITE_apiUrl;
function ForgotPassword() {
  const navigate = useNavigate();

  const [email, setEmail] = useState(
    () => sessionStorage.getItem("forgot_draft_email") || ""
  );

  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isValidEmail = (value) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const handleEmailChange = (e) => {
    const value = e.target.value;

    setEmail(value);

    sessionStorage.setItem("forgot_draft_email", value);

    if (error) setError("");
  };

  const handleEmailBlur = () => {
    if (!email.trim()) {
      return;
    }

    if (!isValidEmail(email.trim())) {
      setError("Please enter a valid email address.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const trimmedEmail = email.trim();

    if (!trimmedEmail) {
      setError("Please enter your email address.");
      return;
    }

    if (!isValidEmail(trimmedEmail)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");
    setIsSubmitting(true);

   const { data, error } = await supabase.auth.resetPasswordForEmail(
  email,
  {
    redirectTo: "http://localhost:5173/reset-password",
  }
);

if (error) {
  alert(error);
  console.error(error.message);
} else {
  alert("Password Reset Email Sent. Check your inbox");
  console.log("Password reset email sent");
}

   
  };

  return (
    <div className="forgot-page-wrapper">
      <button
        type="button"
        className="auth-back"
        onClick={() => navigate("/login")}
        aria-label="Go back"
      >
        <Icon icon="mdi:arrow-left" width="22" />
      </button>

      <AuthLayout illustration={<AuthHero />}>
        <AuthCard
          title="Forgot Password"
          subtitle="Enter your email and we'll send you a code to reset your password."
        >
          <form
            className="forgot-form"
            onSubmit={handleSubmit}
            noValidate
          >
            <div className="auth-input-group">
              <label>Email Address</label>

              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={handleEmailChange}
                onBlur={handleEmailBlur}
                className={error ? "input-error" : ""}
              />

              {error && (
                <span className="field-error">
                  {error}
                </span>
              )}
            </div>

            <button
              className="auth-submit btn-primary"
              type="submit"
              disabled={!isValidEmail(email.trim()) || isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Link"}
            </button>
          </form>
        </AuthCard>
      </AuthLayout>
    </div>
  );
}

export default ForgotPassword;