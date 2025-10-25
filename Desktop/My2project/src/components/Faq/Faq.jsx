/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { ConcreteComponentNode } from "../ConcreteComponentNode";
import { FaqDoesAaveHaveRisks } from "../FaqDoesAaveHaveRisks";
import { FaqWhatIsTheAaveToken } from "../FaqWhatIsTheAaveToken";
import { FaqWhereAreSuppliedTokensStored } from "../FaqWhereAreSuppliedTokensStored";
import { SeeMore } from "../SeeMore";
import "./style.css";

export const Faq = ({ className, href }) => {
  return (
    <div className={`FAQ ${className}`}>
      <div className="FAQ-container-2">
        <ConcreteComponentNode className="design-component-instance-node-6" />
        <FaqWhereAreSuppliedTokensStored className="design-component-instance-node-6" />
        <FaqDoesAaveHaveRisks className="design-component-instance-node-6" />
        <FaqWhatIsTheAaveToken className="design-component-instance-node-6" />
      </div>

      <SeeMore
        className="see-more-2"
        href="https://aave.com/faq"
        href1={href}
        text="See More"
      />
    </div>
  );
};

Faq.propTypes = {
  href: PropTypes.string,
};
