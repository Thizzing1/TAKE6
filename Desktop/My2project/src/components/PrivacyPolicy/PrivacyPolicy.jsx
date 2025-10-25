/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const PrivacyPolicy = ({
  className,
  text = "Privacy",
  hasDiv = true,
  href,
  href1,
}) => {
  return (
    <div className={`privacy-policy ${className}`}>
      <a
        className="privacy"
        href={href}
        rel="noopener noreferrer"
        target="_blank"
      >
        {text}
      </a>

      {hasDiv && (
        <a
          className="text-wrapper-25"
          href={href1}
          rel="noopener noreferrer"
          target="_blank"
        >
          Policy
        </a>
      )}
    </div>
  );
};

PrivacyPolicy.propTypes = {
  text: PropTypes.string,
  hasDiv: PropTypes.bool,
  href: PropTypes.string,
  href1: PropTypes.string,
};
