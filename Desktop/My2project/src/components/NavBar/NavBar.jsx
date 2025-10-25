/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { OpenAppButton } from "../OpenAppButton";
import { BrandNameAaveLogo4 } from "../../icons/BrandNameAaveLogo4";
import "./style.css";

export const NavBar = ({ className, href }) => {
  return (
    <div className={`nav-bar ${className}`}>
      <div className="header">
        <div className="link-wrapper">
          <a
            className="link"
            href="http://127.0.0.1:3000"
            rel="noopener noreferrer"
            target="_blank"
          >
            <BrandNameAaveLogo4 className="brand-name-aave-logo" alt="Brand name aave logo" />
          </a>
        </div>

        <OpenAppButton className="open-app-button-1440-991" href={href} />
      </div>
    </div>
  );
};

NavBar.propTypes = {
  href: PropTypes.string,
};
