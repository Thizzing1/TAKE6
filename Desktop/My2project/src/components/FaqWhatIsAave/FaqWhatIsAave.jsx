/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { PlusiconInFaq29 } from "../../icons/PlusiconInFaq29";
import "./style.css";

export const FaqWhatIsAave = ({ className }) => {
  return (
    <div className={`FAQ-what-is-aave ${className}`}>
      <div className="button">
        <div className="heading-4">
          <div className="text-wrapper-16">What is Aave?</div>
        </div>

        <PlusiconInFaq29 className="plusicon-in-FAQ q1" />
        <div className="rectangle" />
      </div>
    </div>
  );
};
