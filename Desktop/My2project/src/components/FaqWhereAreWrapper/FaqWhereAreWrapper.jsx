/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { PlusiconInFaq29 } from "../../icons/PlusiconInFaq29";
import "./style.css";

export const FaqWhereAreWrapper = ({ className }) => {
  return (
    <div className={`FAQ-where-are-wrapper ${className}`}>
      <div className="button-6">
        <div className="heading-12">
          <p className="text-wrapper-49">Where are supplied tokens stored?</p>
        </div>

        <PlusiconInFaq29 className="plusicon-in-faq-30" />
        <div className="rectangle-6" />
      </div>
    </div>
  );
};
