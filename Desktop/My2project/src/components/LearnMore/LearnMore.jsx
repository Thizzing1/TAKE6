/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { LittleArrow50 } from "../../icons/LittleArrow50";
import "./style.css";

export const LearnMore = ({ text = "Leɑrn More", className, href, href1 }) => {
  return (
    <a
      className={`learn-more ${className}`}
      href={href}
      rel="noopener noreferrer"
      target="_blank"
    >
      <div className="horizontal-divider x010" />

      <a
        className="text-2"
        href={href1}
        rel="noopener noreferrer"
        target="_blank"
      >
        {text}
      </a>

      <LittleArrow50 className="little-arrow-50" color="#211D1D" />
    </a>
  );
};

LearnMore.propTypes = {
  text: PropTypes.string,
  href: PropTypes.string,
  href1: PropTypes.string,
};
