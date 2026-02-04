import { Background } from "../Background";
import { Background1 } from "../Background1";
import { BackgroundWrapper } from "../BackgroundWrapper";
import { Component } from "../Component";
import { ConcreteComponentNode } from "../ConcreteComponentNode";
import { SeemoreButton } from "../SeemoreButton";
import "./style.css";

export const ElementFaq = ({ className, href }) => {
  return (
    <div className={`element-FAQ ${className}`}>
      <div className="container-12">
        <Background className="background-instance" />
        <BackgroundWrapper className="background-instance" />
        <ConcreteComponentNode className="background-instance" />
        <Background1 className="background-instance" />
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
