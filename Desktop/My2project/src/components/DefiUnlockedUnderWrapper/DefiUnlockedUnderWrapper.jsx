/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { CommunityGoverned } from "../CommunityGoverned";
import { Composability } from "../Composability";
import { NonCustodialWallet } from "../NonCustodialWallet";
import { TransparentWrapper } from "../TransparentWrapper";
import "./style.css";

export const DefiUnlockedUnderWrapper = ({
  className,
  override = <NonCustodialWallet />,
  override1 = <TransparentWrapper />,
  override2 = <CommunityGoverned />,
  override3 = <Composability />,
}) => {
  return (
    <div className={`defi-unlocked-under-wrapper ${className}`}>
      <div className="container-30">
        <div className="container-31">
          {override}
          <div className="heading-9">
            <div className="text-wrapper-39">Non-Custodial</div>
          </div>
        </div>

        <div className="container-32">
          <p className="text-wrapper-40">
            Users maintain control over their own funds
            <br />
            throughout the supplying and borrowing process.
          </p>
        </div>
      </div>

      <div className="background-14">
        <div className="container-31">
          {override1}
          <div className="heading-9">
            <div className="text-wrapper-39">Transparent</div>
          </div>
        </div>

        <div className="container-32">
          <p className="text-wrapper-40">
            The Aave Protocol is open source and transactions
            <br />
            are visible to anyone.
          </p>
        </div>
      </div>

      <div className="container-30">
        <div className="container-31">
          {override2}
          <div className="heading-9">
            <div className="text-wrapper-39">Community Governed</div>
          </div>
        </div>

        <div className="container-32">
          <p className="text-wrapper-40">
            AAVE token holders decide which assets are listed
            <br />
            and steer protocol development.
          </p>
        </div>
      </div>

      <div className="background-14">
        <div className="container-31">
          {override3}
          <div className="heading-9">
            <div className="text-wrapper-39">Composability</div>
          </div>
        </div>

        <div className="container-32">
          <p className="integrating-aave-s">
            Integrating Aave&#39;s liquidity pools and interest rate
            <br />
            mechanisms enables the creation of diverse products
            <br />
            and applications.
          </p>
        </div>
      </div>
    </div>
  );
};
