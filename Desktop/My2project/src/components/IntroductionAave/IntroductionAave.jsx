import PropTypes from "prop-types";
import React from "react";
import { LittleArrow39 } from "../../icons/LittleArrow39";
import "./style.css";

export const IntroductionAave = ({ className, href, href1, href2 }) => {
  return (
    <div className={`introduction-aave ${className}`}>
      <a href={href1} rel="noopener noreferrer" target="_blank">
        <p className="introducing-aave-s">
          Introducing Aave's new visual identity
        </p>
      </a>

      <div className="container">
        <div className="background" />

        <div className="read-more-wrapper">
          <a
            className="text-wrapper"
            href={href2}
            rel="noopener noreferrer"
            target="_blank"
          >
            Read more
          </a>
          <LittleArrow39 className="little-arrow" />
        </div>
      </div>
    </div>
  );
};

IntroductionAave.propTypes = {
  href: PropTypes.string,
  href1: PropTypes.string,
  href2: PropTypes.string,
};