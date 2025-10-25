/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { LittleArrow29 } from "../../icons/LittleArrow29";
import "./style.css";

export const GetStarted = ({
  text = "Get Started",
  className,
  href,
  href1,
}) => {
  return (
    <a
      className={`get-started ${className}`}
      href={href}
      rel="noopener noreferrer"
      target="_blank"
    >
      <div className="background-shadow">
        <a
          className="text"
          href={href1}
          rel="noopener noreferrer"
          target="_blank"
        >
          {text}
        </a>

        <LittleArrow29 className="little-arrow-29" />
      </div>
    </a>
  );
};

GetStarted.propTypes = {
  text: PropTypes.string,
  href: PropTypes.string,
  href1: PropTypes.string,
};
