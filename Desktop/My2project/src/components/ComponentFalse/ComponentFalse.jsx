/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { LittleArrow50 } from "../../icons/LittleArrow50";
import "./style.css";

export const ComponentFalse = ({ text = "Learn More", className, href }) => {
  return (
    <a
      className={`component-false ${className}`}
      href={href}
      rel="noopener noreferrer"
      target="_blank"
    >
      <div className="container-16">
        <div className="text-4">{text}</div>
      </div>

      <LittleArrow50 className="unused-components-141" color="#211D1D" />
      <div className="horizontal-divider-2" />
    </a>
  );
};

ComponentFalse.propTypes = {
  text: PropTypes.string,
  href: PropTypes.string,
};
