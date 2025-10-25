/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const MonetaryOf = ({
  className,
  monetaryOf = "/img/monetary-of-authority-of-singapore-trusted-by-the-best-1440-5.svg",
}) => {
  return (
    <img
      className={`monetary-of ${className}`}
      alt="Monetary of"
      src={monetaryOf}
    />
  );
};

MonetaryOf.propTypes = {
  monetaryOf: PropTypes.string,
};
