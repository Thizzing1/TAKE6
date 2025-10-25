/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { PlusiconInFaq29 } from "../../icons/PlusiconInFaq29";
import "./style.css";

export const FaqDoesAaveHave = ({ className }) => {
  return (
    <div className={`FAQ-does-aave-have ${className}`}>
      <div className="button-3">
        <div className="heading-6">
          <div className="text-wrapper-18">Does Aave have risks?</div>
        </div>

        <PlusiconInFaq29 className="plusicon-in-faq-25 q3" />
        <div className="rectangle-3" />
      </div>
    </div>
  );
};
