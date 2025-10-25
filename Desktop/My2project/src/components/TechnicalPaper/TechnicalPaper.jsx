/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const TechnicalPaper = ({ className, href }) => {
  return (
    <div className={`technical-paper ${className}`}>
      <a
        className="text-wrapper-23"
        href={href}
        rel="noopener noreferrer"
        target="_blank"
      >
        Technical Paper
      </a>
    </div>
  );
};

TechnicalPaper.propTypes = {
  href: PropTypes.string,
};
