/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { DotInside } from "../DotInside";
import { LearnMore } from "../LearnMore";
import { useWindowWidth } from "../../breakpoints";
import { GhoAnimation478_1 } from "../../icons/GhoAnimation478_1/GhoAnimation478_1";
import { GhoLine478_1 } from "../../icons/GhoLine478_1/GhoLine478_1";
import "./style.css";

export const GhoContainer = ({
  className,
  override = <DotInside />,
  override1 = <DotInside />,
  href,
}) => {
  const screenWidth = useWindowWidth();
  return (
    <div className={`GHO-container ${className}`}>
      <div className="container-7">
        <div className="heading-3">
          <div className="text-wrapper-8">GHO</div>
        </div>

        <div className="GHO-is-the-only-wrapper">
          <p className="GHO-is-the-only">
          {screenWidth <= 320 ? (
              <>
               GHO is the only decentralised,
                <br />
               overcollateralised stablecoin
                <br />
               native to the Aave Protocol.
              </>
            ) : screenWidth <= 375 ? (
              <>
               GHO is the only decentralised,
                <br />
               overcollateralised stablecoin native to
                <br />
               the Aave Protocol.
              </>
            ) : screenWidth <= 425 ? (
              <>
               GHO is the only decentralised,
                <br />
               overcollateralised stablecoin native to the Aave
                <br />
               Protocol.
              </>
            ) : (
              <>
               GHO is the only decentralised, overcollateralised
                <br />
               stablecoin native to the Aave Protocol.
              </>
            )}
          
          </p>
        </div>

        <LearnMore
          className="learn-more-instance x05"
          href="https://aave.com/gho"
          href1={href}
          text="Leɑrn More"
        />
      </div>

      <div className="container-8">
        <div className="GHO-animation-wrapper">
          <GhoAnimation478_1 className="GHO-animation" alt="Gho animation" />
        </div>

        <div className="background-6">
          <div className="container-9">
            <div className="container-wrapper">
              <div className="container-10">
                <div className="text-wrapper-9">245</div>
              </div>
            </div>

            <div className="text-wrapper-10">%</div>
          </div>

          <div className="container-11">
            <div className="text-wrapper-11">Collateralisation</div>

            {override}
            <div className="text-wrapper-12">30 Day Avg</div>
          </div>

          <img className="element" alt="Element" src="/img/8.svg"/>
        </div>

        <div className="background-7">
          <div className="overlap-group-wrapper">
            <div className="overlap-group">
              <div className="text-wrapper-13">+</div>

              <div className="container-12">
                <div className="container-10">
                  <div className="text-wrapper-9">211,943,853</div>
                </div>
              </div>
            </div>
          </div>

          <div className="container-13">
            <div className="text-wrapper-14">GHO Minted</div>

            {override1}
            <div className="text-wrapper-15">1 Yr</div>
          </div>

          <GhoLine478_1 className="GHO-line" alt="Gho line" />
        </div>
      </div>
    </div>
  );
};

GhoContainer.propTypes = {
  href: PropTypes.string,
};
