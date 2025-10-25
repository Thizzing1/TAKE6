/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { DotInside } from "../DotInside";
import { LearnMore } from "../LearnMore";
import { GhoAnimation991_1 } from "../../icons/GhoAnimation991_1/GhoAnimation991_1"
import { GhoLine991_1 } from "../../icons/GhoLine991_1/GhoLine991_1";
import "./style.css";

export const GhoContainerWrapper = ({
  className,
  override = <DotInside />,
  override1 = <DotInside />,
  href,
}) => {
  return (
    <div className={`GHO-container-wrapper ${className}`}>
      <div className="container-33">
        <div className="heading-10">
          <div className="text-wrapper-41 x1">GHO</div>
        </div>

        <div className="container-34">
          <p className="GHO-is-the-only-2">
            GHO is the only decentralised, overcollateralised
            <br />
            stablecoin native to the Aave Protocol.
          </p>
        </div>

        <LearnMore
          className="learn-more-2 x2"
          href="https://aave.com/gho"
          href1={href}
          text="Leɑrn More"
        />
      </div>

      <div className="container-35">
        <div className="background-15">
          <GhoAnimation991_1 className="GHO-animation-2" alt="Gho animation" />
        </div>

        <div className="background-16">
          <div className="container-36">
            <div className="container-37">
              <div className="container-38">
                <div className="text-wrapper-42">245</div>
              </div>
            </div>

            <div className="text-wrapper-43">%</div>
          </div>

          <div className="container-39">
            <div className="text-wrapper-44">Collateralisation</div>

            {override}
            <div className="text-wrapper-45">30 Day Avg</div>
          </div>

          <img className="element-2" alt="Element" src="/img/8.svg"/>
        </div>

        <div className="background-17">
          <div className="container-40">
            <div className="text-wrapper-43">+</div>

            <div className="container-41">
              <div className="container-38">
                <div className="text-wrapper-42">165,397,253</div>
              </div>
            </div>
          </div>

          <div className="container-42">
            <div className="text-wrapper-46">GHO Minted</div>

            {override1}
            <div className="text-wrapper-47">1 Yr</div>
          </div>

          <GhoLine991_1 className="GHO-line-2" alt="Gho line" />
        </div>
      </div>
    </div>
  );
};

GhoContainerWrapper.propTypes = {
  href: PropTypes.string,
};
