import { Component1_32 } from "../../icons/Component1_32";
import "./style.css";

export const ButtonWrapper = ({
  text = "Learn More",
  className,
  href,
  href1,
}) => {
  return (
    <a
      className={`button-wrapper ${className}`}
      href={href}
      rel="noopener noreferrer"
      target="_blank"
    >
      <div className="container-10">
        <a
          className="text-4"
          href={href1}
          rel="noopener noreferrer"
          target="_blank"
        >
          {text}
        </a>
      </div>

      <Component1_32 className="variant-65" color="#221D1D" />
      <div className="horizontal-divider-2" />
    </a>
  );
};
