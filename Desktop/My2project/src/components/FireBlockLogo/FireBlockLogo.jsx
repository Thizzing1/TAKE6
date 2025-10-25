/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const FireBlockLogo = ({
  className,
  fireBlockLogo = "/img/fire-block-logo-trusted-by-the-best-478-5.svg",
}) => {
  return (
    <img
      className={`fire-block-logo ${className}`}
      alt="Fire block logo"
      src={fireBlockLogo}
    />
  );
};

FireBlockLogo.propTypes = {
  fireBlockLogo: PropTypes.string,
};
