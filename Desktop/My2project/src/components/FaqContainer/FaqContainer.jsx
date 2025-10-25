/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { FaqDoesAaveHave } from "../FaqDoesAaveHave";
import { FaqWhatIsAave } from "../FaqWhatIsAave";
import { FaqWhatIsTheAave } from "../FaqWhatIsTheAave";
import { FaqWhereAre } from "../FaqWhereAre";
import "./style.css";

export const FaqContainer = ({ className }) => {
  return (
    <div className={`FAQ-container ${className}`}>
      <FaqWhatIsAave className="design-component-instance-node-2" />
      <FaqWhereAre className="design-component-instance-node-2" />
      <FaqDoesAaveHave className="design-component-instance-node-2" />
      <FaqWhatIsTheAave className="design-component-instance-node-2" />
    </div>
  );
};
