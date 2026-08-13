import "./ResetPassword.css";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
// import { supabase } from "../../lib/supabaseClient";
import { createClient } from "@supabase/supabase-js";

function ResetPassword() {
  const navigate = useNavigate();
  const supabase=createClient(import.meta.env.VITE_supabaseurl,import.meta.env.VITE_supabasekey);


  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [confirmError, setConfirmError] = useState("");
  const [confirmTouched, setConfirmTouched] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState("");
  const [sessionReady, setSessionReady] = useState(false);
  const [sessionChecked, setSessionChecked] = useState(false);


  useEffect(() => {
    const { data: listener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (event === "PASSWORD_RECOVERY" || session) {
          setSessionReady(true);
        }
        setSessionChecked(true);
      }
    );

    // Fallback in case the event already fired before this mounted.
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) setSessionReady(true);
      setSessionChecked(true);
    });

    return () => {
      listener?.subscription?.unsubscribe();
    };
  }, []);

  const isFormValid =
    password.length >= 6 &&
    confirmPassword.length > 0 &&
    password === confirmPassword;

  const handlePasswordChange = (e) => {
    const value = e.target.value;

    setPassword(value);

    if (value.length > 0 && value.length < 6) {
      setPasswordError("Password must be at least 6 characters.");
    } else {
      setPasswordError("");
    }

    if (confirmTouched) {
      if (confirmPassword && value !== confirmPassword) {
        setConfirmError("Passwords do not match.");
      } else {
        setConfirmError("");
      }
    }
  };

  const handleConfirmChange = (e) => {
    const value = e.target.value;

    setConfirmPassword(value);

    if (!confirmTouched) return;

    if (value !== password) {
      setConfirmError("Passwords do not match.");
    } else {
      setConfirmError("");
    }
  };

  const handleConfirmBlur = () => {
    setConfirmTouched(true);

    if (confirmPassword !== password) {
      setConfirmError("Passwords do not match.");
    } else {
      setConfirmError("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let hasError = false;

    if (!password) {
      setPasswordError("Please create a new password.");
      hasError = true;
    } else if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters.");
      hasError = true;
    }

    if (!confirmPassword) {
      setConfirmError("Please confirm your new password.");
      hasError = true;
    } else if (confirmPassword !== password) {
      setConfirmError("Passwords do not match.");
      hasError = true;
    }

    setConfirmTouched(true);

    if (hasError) return;

    setFormError("");
    setIsSubmitting(true);

    try {
      const { error } = await supabase.auth.updateUser({ password });

      if (error) {
        throw error;
      }

      navigate("/password-updated");
    } catch (err) {
      setFormError(
        err.message || "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (sessionChecked && !sessionReady) {
    return (
      <div className="reset-page">
        <div className="reset-content">
          <h1 className="reset-title">Link Expired</h1>
          <p className="reset-subtitle">
            This password reset link is invalid or has expired. Please
            request a new one.
          </p>
          <button
            type="button"
            className="reset-submit btn-primary"
            onClick={() => navigate("/forgot-password")}
          >
            Back to Forgot Password
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="reset-page">
      <button
        type="button"
        className="auth-back"
        onClick={() => navigate("/login")}
        aria-label="Go back"
      >
        <Icon icon="mdi:arrow-left" width="22" />
      </button>

      <div className="reset-content">
        <h1 className="reset-title">Reset Password</h1>
        <p className="reset-subtitle">
          Create a new password for your account.
        </p>

        <form className="reset-form" onSubmit={handleSubmit} noValidate>
          <div className="auth-input-group">
            <label>New Password</label>
            <div className="password-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Create new password"
                value={password}
                onChange={handlePasswordChange}
                className={passwordError ? "input-error" : ""}
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword((prev) => !prev)}
                aria-label={showPassword ? "Hide password" : "Show password"}
                tabIndex={-1}
              >
                <Icon
                  icon={showPassword ? "mdi:eye-off-outline" : "mdi:eye-outline"}
                  width="20"
                />
              </button>
            </div>
            {passwordError && <span className="field-error">{passwordError}</span>}
          </div>

          <div className="auth-input-group">
            <label>Confirm Password</label>
            <div className="password-wrapper">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm new password"
                value={confirmPassword}
                onChange={handleConfirmChange}
                onBlur={handleConfirmBlur}
                className={confirmError ? "input-error" : ""}
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowConfirmPassword((prev) => !prev)}
                aria-label={
                  showConfirmPassword ? "Hide password" : "Show password"
                }
                tabIndex={-1}
              >
                <Icon
                  icon={
                    showConfirmPassword ? "mdi:eye-off-outline" : "mdi:eye-outline"
                  }
                  width="20"
                />
              </button>
            </div>
            {confirmError && <span className="field-error">{confirmError}</span>}
          </div>

          {formError && <span className="field-error">{formError}</span>}

          <button
            type="submit"
            className="reset-submit btn-primary"
            disabled={!isFormValid || isSubmitting}
          >
            {isSubmitting ? "Updating..." : "Update Password"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ResetPassword;