import { Component } from "../Component";
import { DoesAave } from "../DoesAave";
import { SeemoreButton } from "../SeemoreButton";
import { Whatare } from "../Whatare";
import { Whatisaave } from "../Whatisaave";
import { Whatisthe } from "../Whatisthe";
import "./style.css";

export const ElementFaq = ({
  className,
  whatisaaveButtonStyleOverrideClassName,
  href,
}) => {
  return (
    <div className={`element-FAQ ${className}`}>
      <div className="container-11">
        <Whatisaave
          buttonClassName="whatisaave-325"
          buttonStyleOverrideClassName={whatisaaveButtonStyleOverrideClassName}
          className="design-component-instance-node"
        />
        <Whatare className="design-component-instance-node" />
        <DoesAave className="design-component-instance-node" />
        <Whatisthe className="design-component-instance-node" />
      </div>

      <SeemoreButton
        href="https://aave.com/faq"
        href1={href}
        icon={<Component variant="sixty-seven" />}
        seemoreButtonClassName="seemore-button-instance"
        text="See More"
      />
    </div>
  );
};
