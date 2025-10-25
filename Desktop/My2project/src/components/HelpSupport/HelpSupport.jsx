/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const HelpSupport = ({ className, href, href1 }) => {
  return (
    <div className={`help-support ${className}`}>
      <a className="help" href={href} rel="noopener noreferrer" target="_blank">
        Help &amp;
      </a>

      <a
        className="text-wrapper-53"
        href={href1}
        rel="noopener noreferrer"
        target="_blank"
      >
        Support
      </a>
    </div>
  );
};

HelpSupport.propTypes = {
  href: PropTypes.string,
  href1: PropTypes.string,
};
