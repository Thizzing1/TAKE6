/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { CommunityGoverned } from "../CommunityGoverned";
import { Composability } from "../Composability";
import { NonCustodialWallet } from "../NonCustodialWallet";
import { Transparent } from "../Transparent";
import "./style.css";

export const DefiUnlockedUnderTheFirstOne1440 = ({
  className,
  override = <NonCustodialWallet />,
  override1 = <Transparent />,
  override2 = <CommunityGoverned />,
  override3 = <Composability />,
}) => {
  return (
    <div className={`defi-unlocked-under-the-first-one-1440 ${className}`}>
      <div className="container-64">
        <div className="container-65">
          {override}
          <div className="heading-17">
            <div className="text-wrapper-65">Non-Custodial</div>
          </div>
        </div>

        <div className="container-66">
          <p className="text-wrapper-66">
            Users maintain control over their own funds throughout the
            <br />
            supplying and borrowing process.
          </p>
        </div>
      </div>

      <div className="background-25">
        <div className="container-65">
          {override1}
          <div className="heading-17">
            <div className="text-wrapper-65">Transparent</div>
          </div>
        </div>

        <div className="container-66">
          <p className="text-wrapper-66">
            The Aave Protocol is open source and transactions are
            <br />
            visible to anyone.
          </p>
        </div>
      </div>

      <div className="container-64">
        <div className="container-65">
          {override2}
          <div className="heading-17">
            <div className="text-wrapper-65">Community Governed</div>
          </div>
        </div>

        <div className="container-66">
          <p className="text-wrapper-66">
            AAVE token holders decide which assets are listed and
            <br />
            steer protocol development.
          </p>
        </div>
      </div>

      <div className="background-25">
        <div className="container-65">
          {override3}
          <div className="heading-17">
            <div className="text-wrapper-65">Composability</div>
          </div>
        </div>

        <div className="container-66">
          <p className="text-wrapper-66">
            Integrating Aave&#39;s liquidity pools and interest rate
            <br />
            mechanisms enables the creation of diverse products and
            <br />
            applications.
          </p>
        </div>
      </div>
    </div>
  );
};
