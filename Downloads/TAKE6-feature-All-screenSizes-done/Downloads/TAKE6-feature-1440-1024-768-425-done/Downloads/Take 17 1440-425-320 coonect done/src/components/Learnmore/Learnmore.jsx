import { Component1_32_11 } from "../../icons/Component1_32_11";
import "./style.css";

export const Learnmore = ({ text = "Learn More", className, href, href1 }) => {
  return (
    <a
      className={`learnmore ${className}`}
      href={href}
      rel="noopener noreferrer"
      target="_blank"
    >
      <div className="container-2">
        <a
          className="text-4"
          href={href1}
          rel="noopener noreferrer"
          target="_blank"
        >
          {text}
        </a>
      </div>

      <Component1_32_11 className="component-1-61-4" color="#221D1D" />
      <div className="horizontal-divider-2" />
    </a>
  );
};
