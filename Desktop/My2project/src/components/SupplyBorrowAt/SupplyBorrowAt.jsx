/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const SupplyBorrowAt = ({ className }) => {
  return (
    <div className={`supply-borrow-at ${className}`}>
      <div className="supply-button-2">
        <div className="background-18" />

        <div className="text-wrapper-56">Supply</div>

        <p className="text-wrapper-57">
          Earn interest by supplying assets to liquidity pools.
        </p>
      </div>

      <div className="borrow-button-2">
        <div className="background-19" />

        <div className="text-wrapper-58">Borrow</div>
      </div>
    </div>
  );
};
