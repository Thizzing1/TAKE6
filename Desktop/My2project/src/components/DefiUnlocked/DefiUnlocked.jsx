/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { HealthFactorAnimationUnderDefi478_1 } from "../../icons/HealthFactorAnimationUnderDefi478_1"; 
import { SwapAnimationUnderDefi1 } from "../../icons/SwapAnimationUnderDefi1";
import { StakeAnimationUnderDefi1 } from "../../icons/StakeAnimationUnderDefi1/StakeAnimationUnderDefi1";
import { MultiNetworkAnimationUnderDefi1} from "../../icons/MultiNetworkAnimationUnderDefi1/MultiNetworkAnimationUnderDefi1";
import "./style.css";
import { useWindowWidth } from "../../breakpoints";

export const DefiUnlocked = ({
  className,
  override = (
    <HealthFactorAnimationUnderDefi478_1 className="health-factor-animation-under-defi-478" />
  ),
}) => {
  const screenWidth = useWindowWidth();
  return (
    <div className={`defi-unlocked ${className}`}>
      <div className="background-3">
        <SwapAnimationUnderDefi1 className="swap-animation-under" ellipse="image.png"
          ellipse1="ellipse-3341-2-2.png"
          ellipse2="ellipse-7914-2-2.png"
          img="ellipse-7914-3.png"/> {/* Replace img with component */}

        <div className="heading-margin">
          <div className="heading">
            <div className="text-wrapper-4">Swap</div>
          </div>
        </div>

        <div className="container-2">
        <p className="p">
            {screenWidth <= 320 ? (
              <>
                Swap any ERC-20, even those
                <br />
                borrowed or supplied.
              </>
            ) : screenWidth <= 375 ? (
              <>
                Swap any ERC-20, even those
                <br />
                borrowed or supplied.
              </>
            ) : screenWidth <= 425 ? (
              <>
                Swap any ERC-20, even those borrowed or
                <br />
                supplied.
              </>
            ) : (
              <>Swap any ERC-20, even those borrowed or supplied.</>
            )}
          </p>
        </div>
      </div>

      <div className="background-3">
        <StakeAnimationUnderDefi1 className="stake-animation" alt="Stake animation" />

        <div className="heading-margin">
          <div className="heading">
            <div className="text-wrapper-4">Stake</div>
          </div>
        </div>

        <div className="container-2">
          <p className="p">
           {screenWidth <= 320 ? (
              <>
                Earn rewards for securing the
                <br />
                protocol.
              </>
              ) : (
                <>Earn rewards for securing the protocol.</>
              )}
          </p>
        </div>
      </div>

      <div className="background-4">
        {override}
        <div className="heading-wrapper">
          <div className="heading">
            <div className="text-wrapper-4">Health Factor</div>
          </div>
        </div>

        <div className="container-3">
          <p className="p">
          {screenWidth <= 320 ? (
              <>
                Easily track the risk level of 
                <br />
                your borrow positions. 
              </>
            ) : screenWidth <= 375 ? (
              <>
                Easily track the risk level of your
                <br />
                borrow positions.
              </>
            ) : screenWidth <= 425 ? (
              <>
                Easily track the risk level of your borrow
                <br />
                positions.
              </>
            ) : (
              <>Easily track the risk level of your borrow positions.</>
            )}
          
          </p>
        </div>
      </div>

      <div className="background-4">
        <MultiNetworkAnimationUnderDefi1 className="multi-network" alt="Multi network" />

        <div className="heading-wrapper">
          <div className="heading">
            <div className="text-wrapper-4">Multi-Network</div>
          </div>
        </div>

        <div className="container-3">
        <p className="p">
          {screenWidth <= 320 ? (
              <>
                Deployable on any EVM 
                <br />
                compatible network. 
              </>
            ) : screenWidth <= 375 ? (
              <>
                Deployable on any EVM compatible
                <br />
                network.
              </>
            ) : (
              <>Deployable on any EVM compatible network.</>
            )}
          
          </p>
        </div>
      </div>
    </div>
  );
};
