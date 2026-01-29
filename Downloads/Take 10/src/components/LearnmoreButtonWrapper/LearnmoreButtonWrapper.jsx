import { Component1_32 } from "../../icons/Component1_32";
import "./style.css";

export const LearnmoreButtonWrapper = ({
  text = "Learn More",
  className,
  href,
  href1,
}) => {
  return (
    <a
      className={`learnmore-button-wrapper ${className}`}
      href={href}
      rel="noopener noreferrer"
      target="_blank"
    >
      <div className="horizontal-divider-3" />

      <a
        className="text-5"
        href={href1}
        rel="noopener noreferrer"
        target="_blank"
      >
        {text}
      </a>

      <Component1_32 className="variant-65" color="#221D1D" />
    </a>
  );
};
