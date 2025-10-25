/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { CommunityGoverned } from "../CommunityGoverned";
import { Composability } from "../Composability";
import { NonCustodialWallet } from "../NonCustodialWallet";
import { Transparent } from "../Transparent";
import { useWindowWidth } from "../../breakpoints";
import "./style.css";

export const DefiUnlockedUnder = ({
  className,
  override = <NonCustodialWallet />,
  override1 = <Transparent />,
  override2 = <CommunityGoverned />,
  override3 = <Composability />,
}) => {
  const screenWidth = useWindowWidth();
  return (
    <div className={`defi-unlocked-under ${className}`}>
      <div className="container-4">
        <div className="container-5">
          {override}
          <div className="heading-2">
            <div className="text-wrapper-6">Non-Custodial</div>
          </div>
        </div>

        <div className="container-6">
          <p className="text-wrapper-7">
          {screenWidth <= 320 ? (
              <>
                Users maintain control over
                <br />
                their own funds throughout
                <br />
                the supplying and borrowing
                <br />
                process.
              </>
            ) : screenWidth <= 375 ? (
              <>
                Users maintain control over their
                <br />
                own funds throughout the supplying
                <br />
                and borrowing process.
              </>
            ) : screenWidth <= 425 ? (
              <>
                Users maintain control over their own funds
                <br />
                throughout thr supplying and borrowing
                <br />
                process.
              </>
            ) : (
              <>
              Users maintain control over their own funds throughout the supplying and borrowing 
              <br/>
              process.
              </>
            )}
          
          </p>
        </div>
      </div>

      <div className="background-5">
        <div className="container-5">
          {override1}
          <div className="heading-2">
            <div className="text-wrapper-6">Transparent</div>
          </div>
        </div>

        <div className="container-6">
          <p className="text-wrapper-7">
          {screenWidth <= 320 ? (
              <>
                The Aave Protocol is open
                <br />
                source and transactions are
                <br />
                visible to anyone.
              </>
            ) : screenWidth <= 375 ? (
              <>
                The Aave Protocol is open source
                <br />
                and transactions are visible to
                <br />
                anyone.
              </>
            ) : screenWidth <= 425 ? (
              <>
                The Aave Protocol is open source and
                <br />
                transactions are visible to anyone.
              </>
            ) : (
              <>
              The Aave Protocol is open source and transactions are visible to anyone.
              </>
            )}
          
          </p>
        </div>
      </div>

      <div className="container-4">
        <div className="container-5">
          {override2}
          <div className="heading-2">
            <div className="text-wrapper-6">Community Governed</div>
          </div>
        </div>

        <div className="container-6">
          <p className="text-wrapper-7">
          {screenWidth <= 320 ? (
              <>
               AAVE token holders decide 
                <br />
               which assets are listed and
                <br />
               steer protocol development.
              </>
            ) : screenWidth <= 375 ? (
              <>
                AAVE token holders decide which
                <br />
                assets are listed and steer protocol
                <br />
                development.
              </>
            ) : screenWidth <= 425 ? (
              <>
                AAVE token holders decide which assets
                <br />
                are listed and steer protocol development.
              </>
            ) : (
              <>
              AAVE token holders decide which assets are listed and steer protocol development.
              </>
            )}
          
          </p>
        </div>
      </div>

      <div className="background-5">
        <div className="container-5">
          {override3}
          <div className="heading-2">
            <div className="text-wrapper-6">Composability</div>
          </div>
        </div>

        <div className="container-6">
          <p className="text-wrapper-7">
          {screenWidth <= 320 ? (
              <>
               Integrating Aave's liquidity
                <br />
               pools and interest rate
                <br />
               mechanisms enables the 
               <br />
               creation of diverse products
               <br />
               and applications.
              </>
            ) : screenWidth <= 375 ? (
              <>
               Integrating Aave's liquidity pools and
                <br />
               interest rate mechanisms enables
                <br />
               the creation of diverse products and
               <br />
               applications.
              </>
            ) : screenWidth <= 425 ? (
              <>
               Integrating Aave's liquidity pools and
                <br />
               interest rate mechanism enables the 
               <br />
               creation of diverse products and
               <br />
               applications.
              </>
            ) : (
              <>
             Integrating Aave's liquidity pools and interest rate mechanisms enables the creation of 
             <br />
             diverse products and applications
              </>
            )}
          
          </p>
        </div>
      </div>
    </div>
  );
};
