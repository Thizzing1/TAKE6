/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const DocumentationFooter = ({ className, href }) => {
  return (
    <div className={`documentation-footer ${className}`}>
      <a
        className="text-wrapper-22"
        href={href}
        rel="noopener noreferrer"
        target="_blank"
      >
        Documentation
      </a>
    </div>
  );
};

DocumentationFooter.propTypes = {
  href: PropTypes.string,
};
