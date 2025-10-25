/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { BorrowButton } from "../BorrowButton";
import { SupplyButton } from "../SupplyButton";
import "./style.css";

export const SupplyBorrow = ({ className }) => {
  return (
    <div className={`supply-borrow ${className}`}>
      <SupplyButton className="design-component-instance-node" />
      <BorrowButton className="design-component-instance-node" />
    </div>
  );
};
