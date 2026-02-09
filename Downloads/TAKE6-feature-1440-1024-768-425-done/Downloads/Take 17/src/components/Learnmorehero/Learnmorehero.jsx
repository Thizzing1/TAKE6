import { Component1_32 } from "../../icons/Component1_32";
import "./style.css";

export const Learnmorehero = ({
  text = "Learn More",
  className,
  href,
  href1,
}) => {
  return (
    <a
      className={`learnmorehero ${className}`}
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

      <Component1_32 className="component-1-22" color="#221D1D" />
    </a>
  );
};
