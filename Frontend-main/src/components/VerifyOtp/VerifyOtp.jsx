import "./VerifyOtp.css";

import {
  useRef,
  useState,
  useEffect,
} from "react";

import {
  useNavigate,
  useLocation,
} from "react-router-dom";

import { Icon } from "@iconify/react";


// ============================================================
// BACKEND URL
// ============================================================
//
// Your backend is currently running on:
//
// http://localhost:3000
//
// IMPORTANT:
// This is only for local development.
//
// Later we can move this into:
// frontend/.env
//
// VITE_API_URL=http://localhost:3000
//
// ============================================================

const API_URL =
  import.meta.env.VITE_API_URL ||
  "http://localhost:3000";


// ============================================================
// MASK EMAIL
// ============================================================

function maskEmail(email) {

  if (
    !email ||
    !email.includes("@")
  ) {

    return "your email";

  }

  const [local, domain] =
    email.split("@");


  if (local.length <= 2) {

    return `${local[0]}***@${domain}`;

  }


  const first =
    local.slice(0, 2);

  const last =
    local.slice(-1);


  return `${first}***${last}@${domain}`;

}


// ============================================================
// VERIFY OTP PAGE
// ============================================================

function VerifyOtp() {

  const navigate =
    useNavigate();

  const location =
    useLocation();


  // ==========================================================
  // EMAIL
  // ==========================================================
  //
  // SignupForm sends the email through React Router state.
  //
  // We also keep a sessionStorage fallback so that refreshing
  // the page does not immediately lose the email.
  //
  // ==========================================================

  const email =
    location.state?.email ||
    sessionStorage.getItem(
      "signup_email"
    ) ||
    "";


  // ==========================================================
  // PASSWORD
  // ==========================================================
  //
  // Kept because your current signup flow stores it.
  //
  // The OTP verification endpoint you showed me currently
  // does NOT require the password in req.body.
  //
  // ==========================================================

  const password =
    sessionStorage.getItem(
      "signup_password"
    ) ||
    "";


  // ==========================================================
  // WHERE DID THE USER COME FROM?
  // ==========================================================

  const fromPath =
    location.state?.from ||
    "/signup";


  // ==========================================================
  // MASKED EMAIL
  // ==========================================================

  const maskedEmail =
    maskEmail(email);


  // ==========================================================
  // RESEND STORAGE KEY
  // ==========================================================

  const storageKey =
    `otp_resend_${email || "anon"}`;


  // ==========================================================
  // READ STORED COOLDOWN
  // ==========================================================

  const readStoredCooldown = () => {

    const stored =
      sessionStorage.getItem(
        storageKey
      );


    if (!stored) {

      return {

        countdown: 0,

        nextWait: 10,

        message: "",

      };

    }


    try {

      const {
        resendAt,
        nextWait:
          storedNextWait,
      } = JSON.parse(stored);


      const remaining =
        Math.ceil(
          (
            resendAt -
            Date.now()
          ) / 1000
        );


      return {

        countdown:
          remaining > 0
            ? remaining
            : 0,

        nextWait:
          storedNextWait ||
          10,

        message:
          remaining > 0
            ? "A new OTP has been sent."
            : "",

      };

    }

    catch {

      sessionStorage.removeItem(
        storageKey
      );


      return {

        countdown: 0,

        nextWait: 10,

        message: "",

      };

    }

  };


  // ==========================================================
  // OTP SETTINGS
  // ==========================================================

  const OTP_LENGTH = 6;


  // ==========================================================
  // OTP VALUES
  // ==========================================================

  const [values, setValues] =
    useState(
      Array(
        OTP_LENGTH
      ).fill("")
    );


  // ==========================================================
  // INPUT REFERENCES
  // ==========================================================

  const inputsRef =
    useRef([]);


  // ==========================================================
  // COUNTDOWN
  // ==========================================================

  const [
    countdown,
    setCountdown,
  ] = useState(
    () =>
      readStoredCooldown()
        .countdown
  );


  // ==========================================================
  // NEXT RESEND WAIT
  // ==========================================================

  const [
    nextWait,
    setNextWait,
  ] = useState(
    () =>
      readStoredCooldown()
        .nextWait
  );


  // ==========================================================
  // RESEND MESSAGE
  // ==========================================================

  const [
    resendMessage,
    setResendMessage,
  ] = useState(
    () =>
      readStoredCooldown()
        .message
  );


  // ==========================================================
  // OTP ERROR
  // ==========================================================

  const [
    otpError,
    setOtpError,
  ] = useState("");


  // ==========================================================
  // VERIFYING STATE
  // ==========================================================

  const [
    isVerifying,
    setIsVerifying,
  ] = useState(false);


  // ==========================================================
  // RESENDING STATE
  // ==========================================================

  const [
    isResending,
    setIsResending,
  ] = useState(false);


  // ==========================================================
  // COUNTDOWN TIMER
  // ==========================================================

  useEffect(() => {

    if (countdown <= 0) {

      return;

    }


    const timer =
      setInterval(() => {

        setCountdown(
          (previous) =>
            previous > 0
              ? previous - 1
              : 0
        );

      }, 1000);


    return () =>
      clearInterval(timer);

  }, [countdown]);


  // ==========================================================
  // OTP INPUT CHANGE
  // ==========================================================

  const handleChange =
    (index, event) => {

      const value =
        event.target.value
          .replace(
            /[^0-9]/g,
            ""
          )
          .slice(-1);


      const nextValues =
        [...values];


      nextValues[index] =
        value;


      setValues(
        nextValues
      );


      // Clear previous error
      // when user starts correcting OTP.

      if (otpError) {

        setOtpError("");

      }


      // Automatically move to
      // next input.

      if (
        value &&
        index <
          OTP_LENGTH - 1
      ) {

        inputsRef
          .current[index + 1]
          ?.focus();

      }

    };


  // ==========================================================
  // BACKSPACE
  // ==========================================================

  const handleKeyDown =
    (index, event) => {

      if (
        event.key ===
          "Backspace" &&
        !values[index] &&
        index > 0
      ) {

        inputsRef
          .current[index - 1]
          ?.focus();

      }

    };


  // ==========================================================
  // VERIFY OTP
  // ==========================================================

  const handleConfirm =
    async (event) => {

      event.preventDefault();


      // ======================================================
      // CHECK ALL SIX DIGITS
      // ======================================================

      if (
        values.some(
          (value) =>
            value === ""
        )
      ) {

        setOtpError(
          `Please enter all ${OTP_LENGTH} digits of the code.`
        );

        return;

      }


      // ======================================================
      // CHECK EMAIL
      // ======================================================
      //
      // The backend uses the OTP record to determine the
      // associated email, but we still require the frontend
      // to have an email because this is part of the signup
      // session.
      //
      // ======================================================

      if (!email) {

        setOtpError(
          "Your signup session has expired. Please start again."
        );

        return;

      }


      // ======================================================
      // BUILD OTP
      // ======================================================

      const code =
        values.join("");


      setOtpError("");

      setIsVerifying(true);


      try {

        // ====================================================
        // CALL YOUR ACTUAL BACKEND
        // ====================================================
        //
        // Your backend VerifyOTP middleware reads:
        //
        // const { otp } = req.body;
        //
        // Therefore:
        //
        // body = { otp: code }
        //
        // ====================================================

        const response =
          await fetch(
            `${API_URL}/verifyemailaddress/`,
            {

              method: "POST",

              headers: {

                "Content-Type":
                  "application/json",

              },

              body:
                JSON.stringify({
                  email:email,

                  otp: code,

                }),

            }
          );


        // ====================================================
        // READ RESPONSE SAFELY
        // ====================================================
        //
        // We don't blindly call response.json().
        //
        // This prevents the:
        //
        // Unexpected token '<'
        //
        // error you previously got when the server returned
        // HTML instead of JSON.
        // ====================================================

        const contentType =
          response.headers.get(
            "content-type"
          ) || "";


        let data;


        if (
          contentType.includes(
            "application/json"
          )
        ) {

          data =
            await response.json();

        }

        else {

          const text =
            await response.text();

          data = {

            message:
              text ||
              "The server returned an unexpected response.",

          };

        }


        // ====================================================
        // DEBUG INFORMATION
        // ====================================================

        console.log(
          "=========================================="
        );

        console.log(
          "LABLY OTP VERIFICATION RESPONSE"
        );

        console.log(
          "HTTP STATUS:",
          response.status
        );

        console.log(
          "RESPONSE OK:",
          response.ok
        );

        console.log(
          "RESPONSE DATA:",
          data
        );

        console.log(
          "=========================================="
        );


        // ====================================================
        // BACKEND ERROR
        // ====================================================

        if (!response.ok) {

          throw new Error(
            data?.message ||
            "Incorrect verification code."
          );

        }


        // ====================================================
        // SUCCESS
        // ====================================================
        navigate("/reset-password");
        console.log(
          "LABLY OTP VERIFIED SUCCESSFULLY"
        );


        // ====================================================
        // CLEAN SIGNUP SESSION
        // ====================================================

        sessionStorage.removeItem(
          "signup_email"
        );

        sessionStorage.removeItem(
          "signup_password"
        );

        sessionStorage.removeItem(
          "signup_draft_email"
        );


        // ====================================================
        // SUCCESS NAVIGATION
        // ====================================================
        //
        // Your current flow sends the user to Login after
        // successful account verification.
        //
        // ====================================================

        navigate(
          "/login"
        );

      }

      catch (error) {

        console.error(
          "=========================================="
        );

        console.error(
          "LABLY OTP VERIFICATION ERROR"
        );

        console.error(
          "ERROR:",
          error
        );

        console.error(
          "MESSAGE:",
          error?.message
        );

        console.error(
          "=========================================="
        );


        setOtpError(
          error?.message ||
          "Incorrect verification code."
        );

      }

      finally {

        setIsVerifying(
          false
        );

      }

    };


  // ==========================================================
  // RESEND OTP
  // ==========================================================
  //
  // IMPORTANT:
  //
  // I am NOT calling:
  //
  // sendOtp(email)
  //
  // because that function does not exist in this React file.
  //
  // Your backend's resend endpoint was not included in the
  // backend code you supplied here.
  //
  // Therefore we should NOT invent an endpoint and pretend
  // it exists.
  //
  // ==========================================================

  const handleResend =
    async () => {

      if (
        countdown > 0 ||
        isResending
      ) {

        return;

      }


      if (!email) {

        setOtpError(
          "Your email could not be found. Please start again."
        );

        return;

      }


      setOtpError("");

      setIsResending(true);


      try {

        // ====================================================
        // TEMPORARY RESEND NOTICE
        // ====================================================
        //
        // We deliberately do NOT make up a backend endpoint
        // here.
        //
        // Your current backend code supplied to me shows the
        // sendotp middleware, but not the route that exposes
        // it specifically for RESEND.
        //
        // ====================================================

        throw new Error(
          "Resend is not connected yet. The backend resend endpoint needs to be connected."
        );


      }

      catch (error) {

        console.error(
          "=========================================="
        );

        console.error(
          "LABLY RESEND OTP ERROR"
        );

        console.error(
          "ERROR:",
          error
        );

        console.error(
          "MESSAGE:",
          error?.message
        );

        console.error(
          "=========================================="
        );


        setOtpError(
          error?.message ||
          "Unable to resend the verification code."
        );

      }

      finally {

        setIsResending(
          false
        );

      }

    };


  // ==========================================================
  // RENDER
  // ==========================================================

  return (

    <div className="otp-page">


      {/* ======================================================
          BACK BUTTON
      ====================================================== */}

      <button

        type="button"

        className="otp-back"

        onClick={() =>
          navigate(fromPath)
        }

        aria-label="Go back"

      >

        <Icon

          icon="mdi:arrow-left"

          width="22"

        />

      </button>


      {/* ======================================================
          CONTENT
      ====================================================== */}

      <div className="otp-content">


        {/* ====================================================
            TITLE
        ==================================================== */}

        <h1 className="otp-title">

          Verification Code

        </h1>


        {/* ====================================================
            SUBTITLE
        ==================================================== */}

        <p className="otp-subtitle">

          We have sent the verification code

          <br />

          to your email{" "}

          {maskedEmail}.

        </p>


        {/* ====================================================
            FORM
        ==================================================== */}

        <form

          className="otp-form"

          onSubmit={
            handleConfirm
          }

          noValidate

        >


          {/* ==================================================
              OTP INPUTS
          ================================================== */}

          <div className="otp-inputs">

            {values.map(
              (value, index) => (

                <input

                  key={index}

                  ref={(element) => {

                    inputsRef
                      .current[index] =
                      element;

                  }}

                  type="text"

                  inputMode="numeric"

                  autoComplete={
                    index === 0
                      ? "one-time-code"
                      : "off"
                  }

                  maxLength={1}

                  value={value}

                  onChange={(event) =>
                    handleChange(
                      index,
                      event
                    )
                  }

                  onKeyDown={(event) =>
                    handleKeyDown(
                      index,
                      event
                    )
                  }

                  className={

                    otpError

                      ? "otp-box otp-box-error"

                      : "otp-box"

                  }

                />

              )
            )}

          </div>


          {/* ==================================================
              ERROR MESSAGE
          ================================================== */}

          {otpError && (

            <span className="field-error">

              {otpError}

            </span>

          )}


          {/* ==================================================
              CONFIRM BUTTON
          ================================================== */}

          <button

            type="submit"

            className="otp-submit btn-primary"

            disabled={
              isVerifying
            }

          >

            {isVerifying

              ? "Verifying..."

              : "Confirm"

            }

          </button>

        </form>


        {/* ====================================================
            RESEND
        ==================================================== */}

        <p className="otp-resend">

          {countdown > 0 ? (

            <>

              Resend available in{" "}

              {countdown}s

            </>

          ) : (

            <>

              Haven't got the email yet?{" "}

              <button

                type="button"

                className="otp-resend-link"

                onClick={
                  handleResend
                }

                disabled={
                  isResending
                }

              >

                {isResending

                  ? "Sending..."

                  : "Resend email"

                }

              </button>

            </>

          )}

        </p>


        {/* ====================================================
            RESEND CONFIRMATION
        ==================================================== */}

        {countdown > 0 &&
          resendMessage && (

            <p className="otp-resend-confirmation">

              {resendMessage}

            </p>

          )}

      </div>

    </div>

  );

}


export default VerifyOtp;