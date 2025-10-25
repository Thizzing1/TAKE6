/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const OpenAppButton = ({ className, href }) => {
  return (
    <div className={`open-app-button ${className}`}>
      <a
        className="text-wrapper-28"
        href={href}
        rel="noopener noreferrer"
        target="_blank"
      >
        Open App
      </a>
    </div>
  );
};

OpenAppButton.propTypes = {
  href: PropTypes.string,
};
