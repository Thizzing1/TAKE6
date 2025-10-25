/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { FaqDoesAaveHaveWrapper } from "../FaqDoesAaveHaveWrapper";
import { FaqWhatIsAaveWrapper } from "../FaqWhatIsAaveWrapper";
import { FaqWhatIsTheAaveWrapper } from "../FaqWhatIsTheAaveWrapper";
import { FaqWhereAreWrapper } from "../FaqWhereAreWrapper";
import { SeeMore } from "../SeeMore";
import "./style.css";

export const FaqContainerWrapper = ({ className, href }) => {
  return (
    <div className={`FAQ-container-wrapper ${className}`}>
      <div className="heading-15">
        <div className="text-wrapper-52">FAQs</div>
      </div>

      <div className="container-45">
        <div className="container-46">
          <FaqWhatIsAaveWrapper className="design-component-instance-node-4" />
          <FaqWhereAreWrapper className="design-component-instance-node-4" />
          <FaqDoesAaveHaveWrapper className="design-component-instance-node-4" />
          <FaqWhatIsTheAaveWrapper className="design-component-instance-node-4" />
        </div>

        <SeeMore
          className="see-more-instance"
          href="https://aave.com/faq"
          href1={href}
          text="See More"
        />
      </div>
    </div>
  );
};

FaqContainerWrapper.propTypes = {
  href: PropTypes.string,
};
