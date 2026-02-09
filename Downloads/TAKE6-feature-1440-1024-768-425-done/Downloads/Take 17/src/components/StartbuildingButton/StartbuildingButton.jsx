import { Component1_32 } from "../../icons/Component1_32";
import "./style.css";

export const StartbuildingButton = ({
  text = "Get Early Access",
  className,
  textClassName,
  href,
  href1,
}) => {
  return (
    <a
      className={`startbuilding-button ${className}`}
      href={href}
      rel="noopener noreferrer"
      target="_blank"
    >
      <div className="text-wrapper">
        <a
          className={`div ${textClassName}`}
          href={href1}
          rel="noopener noreferrer"
          target="_blank"
        >
          {text}
        </a>
      </div>

      <Component1_32 className="component-1-32" color="white" />
    </a>
  );
};
