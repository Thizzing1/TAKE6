/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { BorrowButtonWrapper } from "../BorrowButtonWrapper";
import { SupplyButtonWrapper } from "../SupplyButtonWrapper";
import "./style.css";

export const SupplyAndBorrow = ({ className }) => {
  return (
    <div className={`supply-and-borrow ${className}`}>
      <SupplyButtonWrapper className="design-component-instance-node-3" />
      <BorrowButtonWrapper className="design-component-instance-node-3" />
    </div>
  );
};
