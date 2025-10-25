/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const ConsensysLogoWrapper = ({
  className,
  consensysLogo = "/img/consensys-logo-trusted-by-the-best-991-5.svg",
}) => {
  return (
    <img
      className={`consensys-logo-wrapper ${className}`}
      alt="Consensys logo"
      src={consensysLogo}
    />
  );
};

ConsensysLogoWrapper.propTypes = {
  consensysLogo: PropTypes.string,
};
