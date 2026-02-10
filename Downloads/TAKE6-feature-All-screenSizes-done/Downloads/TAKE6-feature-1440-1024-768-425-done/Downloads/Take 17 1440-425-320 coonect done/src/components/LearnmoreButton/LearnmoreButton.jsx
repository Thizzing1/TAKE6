import { Component1_32 } from "../../icons/Component1_32";
import "./style.css";

export const LearnmoreButton = ({
  text = "Learn More",
  className,
  href,
  href1,
}) => {
  return (
    <a
      className={`learnmore-button ${className}`}
      href={href}
      rel="noopener noreferrer"
      target="_blank"
    >
      <div className="horizontal-divider" />

      <a
        className="text-3"
        href={href1}
        rel="noopener noreferrer"
        target="_blank"
      >
        {text}
      </a>

      <Component1_32 className="component-1-22" color="#221D1D" />
    </a>
  );
};
