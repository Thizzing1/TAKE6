/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const MonetaryAuthorityWrapper = ({
  className,
  monetaryAuthority = "/img/monetary-authority-of-singapore-trusted-by-the-best-991-5.svg",
}) => {
  return (
    <img
      className={`monetary-authority-wrapper ${className}`}
      alt="Monetary authority"
      src={monetaryAuthority}
    />
  );
};

MonetaryAuthorityWrapper.propTypes = {
  monetaryAuthority: PropTypes.string,
};
