import { Component } from "../Component";
import "./style.css";

export const SignupButton = ({
  text = "Sign Up",
  className,
  componentVectorClassName,
}) => {
  return (
    <div className={`signup-button ${className}`}>
      <div className="container-13">
        <div className="text-8">{text}</div>
      </div>

      <Component
        variant="sixty-eight"
        variantClassName="component-1"
        vectorClassName={componentVectorClassName}
      />
    </div>
  );
};
