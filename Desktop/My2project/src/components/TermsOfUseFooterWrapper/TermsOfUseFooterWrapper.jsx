/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const TermsOfUseFooterWrapper = ({ className, href, href1 }) => {
  return (
    <div className={`terms-of-use-footer-wrapper ${className}`}>
      <a
        className="text-wrapper-54"
        href={href}
        rel="noopener noreferrer"
        target="_blank"
      >
        Terms of Use
      </a>

      <a
        className="text-wrapper-55"
        href={href1}
        rel="noopener noreferrer"
        target="_blank"
      >
        
      </a>
    </div>
  );
};

TermsOfUseFooterWrapper.propTypes = {
  href: PropTypes.string,
  href1: PropTypes.string,
};
