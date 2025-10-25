/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const LittleArrow50 = ({ color = "#211D1D", className }) => {
  return (
    <svg
      className={`little-arrow-50 ${className}`}
      fill="none"
      height="17"
      viewBox="0 0 17 17"
      width="17"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M3.5 9.47656H13M13 9.47656L9 5.47656M13 9.47656L9 13.4766"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
};

LittleArrow50.propTypes = {
  color: PropTypes.string,
};
