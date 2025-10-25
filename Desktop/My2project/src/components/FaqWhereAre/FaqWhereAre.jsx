/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { PlusiconInFaq29 } from "../../icons/PlusiconInFaq29";
import "./style.css";
import { useWindowWidth } from "../../breakpoints";

export const FaqWhereAre = ({ className }) => {
  const screenWidth = useWindowWidth();
  return (
    <div className={`FAQ-where-are ${className}`}>
      <div className="button-2">
        <div className="heading-5">
          <p className="text-wrapper-17">
            {screenWidth <= 320 ? (
              <>
               Where are supplied
                <br />
               tokens stored?
              </>
            ) : screenWidth <= 375 ? (
              <>
               Where are supplied tokens
                <br />
               stored?
              </>
            ) : (
              <>
               Where are supplied tokens stored?
              </>
            )}
          
          </p>
        </div>

        <PlusiconInFaq29 className="plusicon-in-faq-29 q2" />
        <div className="rectangle-2" />
      </div>
    </div>
  );
};
