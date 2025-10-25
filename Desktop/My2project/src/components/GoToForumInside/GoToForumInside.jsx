/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { LittleArrow50 } from "../../icons/LittleArrow50";
import "./style.css";

export const GoToForumInside = ({
  text = "Go to the Forum",
  className,
  href,
  href1,
}) => {
  return (
    <a
      className={`go-to-forum-inside ${className}`}
      href={href}
      rel="noopener noreferrer"
      target="_blank"
    >
      <a
        className="text-3"
        href={href1}
        rel="noopener noreferrer"
        target="_blank"
      >
        {text}
      </a>

      <LittleArrow50 className="unused-components" color="#1C4886" />
    </a>
  );
};

GoToForumInside.propTypes = {
  text: PropTypes.string,
  href: PropTypes.string,
  href1: PropTypes.string,
};
