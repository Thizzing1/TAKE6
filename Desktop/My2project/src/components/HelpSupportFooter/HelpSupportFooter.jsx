/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const HelpSupportFooter = ({ className, href }) => {
  return (
    <div className={`help-support-footer ${className}`}>
      <a
        className="help-support-2"
        href={href}
        rel="noopener noreferrer"
        target="_blank"
      >
        Help &amp; Support
      </a>
    </div>
  );
};

HelpSupportFooter.propTypes = {
  href: PropTypes.string,
};
