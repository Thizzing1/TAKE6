/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const BancoCentralDoWrapper = ({
  className,
  bancoCentralDo = "/img/banco-central-do-brasil-logo-trusted-by-the-best-991-5.svg",
}) => {
  return (
    <img
      className={`banco-central-do-wrapper ${className}`}
      alt="Banco central do"
      src={bancoCentralDo}
    />
  );
};

BancoCentralDoWrapper.propTypes = {
  bancoCentralDo: PropTypes.string,
};
