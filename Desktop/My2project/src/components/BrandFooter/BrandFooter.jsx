/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const BrandFooter = ({ className, href }) => {
  return (
    <div className={`brand-footer ${className}`}>
      <a
        className="text-wrapper-20"
        href={href}
        rel="noopener noreferrer"
        target="_blank"
      >
        Brand
      </a>
    </div>
  );
};

BrandFooter.propTypes = {
  href: PropTypes.string,
};
