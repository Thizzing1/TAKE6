/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { DotInside } from "../DotInside";
import { LearnMore } from "../LearnMore";
import { GhoAnimation1440_1 } from "../../icons/GhoAnimation1440_1/GhoAnimation1440_1"
import { GhoLine1440_1 } from "../../icons/GhoLine1440_1/GhoLine1440_1"
import "./style.css";

export const GhoContainer1440 = ({
  className,
  override = <DotInside />,
  href,
}) => {
  return (
    <div className={`GHO-container-1440 ${className}`}>
      <div className="container-67">
        <div className="heading-18">
          <div className="text-wrapper-67">GHO</div>
        </div>

        <div className="container-68">
          <p className="GHO-is-the-only-3">
            GHO is the only decentralised, overcollateralised
            <br />
            stablecoin native to the Aave Protocol.
          </p>
        </div>

        <LearnMore
          className="learn-more-3"
          href="https://aave.com/gho"
          href1={href}
          text="Leɑrn More"
        />
      </div>

      <div className="container-69">
        <div className="background-26">
          <GhoAnimation1440_1 className="GHO-animation-3" alt="Gho animation" />
        </div>

        <div className="background-27">
          <div className="container-70">
            <div className="container-71">
              <div className="container-72">
                <div className="text-wrapper-68">245</div>
              </div>
            </div>

            <div className="text-wrapper-69">%</div>
          </div>

          <div className="container-73">
            <div className="text-wrapper-70">Collateralisation</div>

            {override}
            <div className="text-wrapper-71">30 Day Avg</div>
          </div>

          <img
            className="element-collaterisation"
            alt="Element collaterisation"
             src="/img/8.svg"
          />
        </div>

        <div className="background-28">
          <div className="container-74">
            <div className="text-wrapper-69">+</div>

            <div className="container-75">
              <div className="container-72">
                <div className="text-wrapper-68">165,397,253</div>
              </div>
            </div>
          </div>

          <div className="container-76">
            <div className="text-wrapper-72">GHO Minted</div>

            <img className="frame-2" alt="Frame" />

            <div className="text-wrapper-73">1 Yr</div>
          </div>

          <GhoLine1440_1 className="GHO-line-3" alt="Gho line" />
        </div>
      </div>
    </div>
  );
};

GhoContainer1440.propTypes = {
  href: PropTypes.string,
};
