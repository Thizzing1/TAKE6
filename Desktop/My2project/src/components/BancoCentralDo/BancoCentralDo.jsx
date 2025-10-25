/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const BancoCentralDo = ({
  className,
  bancoCentralDo = "/img/banco-central-do-brasil-logo-trusted-by-the-best-478-5.svg",
}) => {
  return (
    <img
      className={`banco-central-do ${className}`}
      alt="Banco central do"
      src={bancoCentralDo}
    />
  );
};

BancoCentralDo.propTypes = {
  bancoCentralDo: PropTypes.string,
};
