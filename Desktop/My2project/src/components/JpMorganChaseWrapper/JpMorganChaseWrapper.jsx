/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const JpMorganChaseWrapper = ({
  className,
  JPMorganChase = "/img/jp-morgan-chase-trusted-by-the-best-1440-5.svg",
}) => {
  return (
    <img
      className={`JP-morgan-chase-wrapper ${className}`}
      alt="Jp morgan chase"
      src={JPMorganChase}
    />
  );
};

JpMorganChaseWrapper.propTypes = {
  JPMorganChase: PropTypes.string,
};
