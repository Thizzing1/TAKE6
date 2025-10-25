/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { HealthFactorWrapper } from "../HealthFactorWrapper";
import { SwapAnimationUnderDefi991_1 } from "../../icons/SwapAnimationUnderDefi991_1/SwapAnimationUnderDefi991_1";
import { StakeAnimationUnderDefi1 } from "../../icons/StakeAnimationUnderDefi1/StakeAnimationUnderDefi1";
import { MultiNetworkAnimationUnderDefi1 } from "../../icons/MultiNetworkAnimationUnderDefi1/MultiNetworkAnimationUnderDefi1";
import "./style.css";

export const DefiUnlockedWrapper = ({
  className,
  override = (
    <HealthFactorWrapper className="health-factor-animation-under-defi-991" />
  ),
}) => {
  return (
    <div className={`defi-unlocked-wrapper ${className}`}>
      <div className="background-10">
        <SwapAnimationUnderDefi991_1 className="swap-animation-under-2" alt="Swap animation under" />

        <div className="heading-margin-2">
          <div className="heading-8">
            <div className="text-wrapper-37">Swap</div>
          </div>
        </div>

        <div className="container-29">
          <p className="text-wrapper-38">
            Swap any ERC-20, even those borrowed or
            <br />
            supplied.
          </p>
        </div>
      </div>

      <div className="background-11">
        <StakeAnimationUnderDefi1 className="stake-animation-2" alt="Stake animation" />

        <div className="heading-margin-2">
          <div className="heading-8">
            <div className="text-wrapper-37">Stake</div>
          </div>
        </div>

        <div className="container-29">
          <p className="text-wrapper-38">
            Earn rewards for securing the protocol.
          </p>
        </div>
      </div>

      <div className="background-12">
        {override}
        <div className="heading-margin-2">
          <div className="heading-8">
            <div className="text-wrapper-37">Health Factor</div>
          </div>
        </div>

        <div className="container-29">
          <p className="text-wrapper-38">
            Easily track the risk level of your borrow
            <br />
            positions.
          </p>
        </div>
      </div>

      <div className="background-13">
        <MultiNetworkAnimationUnderDefi1 className="multi-network-2" alt="Multi network" />

        <div className="heading-margin-2">
          <div className="heading-8">
            <div className="text-wrapper-37">Multi-Network</div>
          </div>
        </div>

        <div className="container-29">
          <p className="text-wrapper-38">
            Deployable on any EVM compatible network.
          </p>
        </div>
      </div>
    </div>
  );
};
