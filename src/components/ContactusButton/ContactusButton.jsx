import { Component1_32 } from "../../icons/Component1_32";
import "./style.css";

export const ContactusButton = ({
  text = "Get Early Access",
  className,
  textClassName,
  href,
  href1,
}) => {
  return (
    <a
      className={`contactus-button ${className}`}
      href={href}
      rel="noopener noreferrer"
      target="_blank"
    >
      <div className="container-2">
        <a
          className={`text-2 ${textClassName}`}
          href={href1}
          rel="noopener noreferrer"
          target="_blank"
        >
          {text}
        </a>
      </div>

      <Component1_32 className="variant-249" color="black" />
    </a>
  );
};
