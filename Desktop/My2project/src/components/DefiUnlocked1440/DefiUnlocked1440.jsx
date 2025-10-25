/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { HealthFactorAnimationUnderDefi } from "../HealthFactorAnimationUnderDefi";
import { SwapAnimationUnderDefi1 } from "../../icons/SwapAnimationUnderDefi1";
import { StakeAnimationUnderDefi1 } from "../../icons/StakeAnimationUnderDefi1/StakeAnimationUnderDefi1";
import { MultiNetworkAnimationUnderDefi1 } from "../../icons/MultiNetworkAnimationUnderDefi1/MultiNetworkAnimationUnderDefi1";
import "./style.css";

export const DefiUnlocked1440 = ({
  className,
  override = (
    <HealthFactorAnimationUnderDefi className="health-factor-instance" />
  ),
}) => {
  return (
    <div className={`defi-unlocked-1440 ${className}`}>
      <div className="background-21">
        <SwapAnimationUnderDefi1 className="swap-animation-under-3" alt="Swap animation under" />

        <div className="heading-margin-3">
          <div className="heading-16">
            <div className="text-wrapper-63">Swap</div>
          </div>
        </div>

        <div className="container-63">
          <p className="text-wrapper-64">
            Swap any ERC-20, even those borrowed or supplied.
          </p>
        </div>
      </div>

      <div className="background-22">
        <StakeAnimationUnderDefi1 className="stake-animation-3" alt="Stake animation" />

        <div className="heading-margin-3">
          <div className="heading-16">
            <div className="text-wrapper-63">Stake</div>
          </div>
        </div>

        <div className="container-63">
          <p className="text-wrapper-64">
            Earn rewards for securing the protocol.
          </p>
        </div>
      </div>

      <div className="background-23">
        {override}
        <div className="heading-margin-3">
          <div className="heading-16">
            <div className="text-wrapper-63">Health Factor</div>
          </div>
        </div>

        <div className="container-63">
          <p className="text-wrapper-64">
            Easily track the risk level of your borrow positions.
          </p>
        </div>
      </div>

      <div className="background-24">
        <MultiNetworkAnimationUnderDefi1 className="multi-network-3" alt="Multi network" />

        <div className="heading-margin-3">
          <div className="heading-16">
            <div className="text-wrapper-63">Multi-Network</div>
          </div>
        </div>

        <div className="container-63">
          <p className="text-wrapper-64">
            Deployable on any EVM compatible network.
          </p>
        </div>
      </div>
    </div>
  );
};
