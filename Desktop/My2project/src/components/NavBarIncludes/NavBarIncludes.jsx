/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { BrandNameAaveLogo4 } from "../../icons/BrandNameAaveLogo4";
import { NavBarDevelopers } from "../NavBarDevelopers";
import { NavBarProducts } from "../NavBarProducts";
import { NavBarResources } from "../NavBarResources";
import { OpenAppButton } from "../OpenAppButton";
import "./style.css";

export const NavBarIncludes = ({ className, href }) => {
  return (
    <div className={`nav-bar-includes ${className}`}>
      <div className="header-2">
        <div className="container-47">
          <a
            className="brand-name-aave-logo-wrapper"
            href="https://aave.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <BrandNameAaveLogo4 className="brand-name-aave-logo-4" />
          </a>
        </div>

        <div className="nav-margin">
          <div className="nav">
            <OpenAppButton className="open-app-button-instance" href={href} />
            <div className="container-48">
              <NavBarProducts className="design-component-instance-node-5" />
              <NavBarResources className="design-component-instance-node-5" />
              <NavBarDevelopers className="design-component-instance-node-5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

NavBarIncludes.propTypes = {
  href: PropTypes.string,
};
