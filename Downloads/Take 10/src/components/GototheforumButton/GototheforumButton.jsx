import { Component1_32 } from "../../icons/Component1_32";
import "./style.css";

export const GototheforumButton = ({
  text = "Go to the Forum",
  className,
  href,
  href1,
}) => {
  return (
    <a
      className={`gototheforum-button ${className}`}
      href={href}
      rel="noopener noreferrer"
      target="_blank"
    >
      <a
        className="text-6"
        href={href1}
        rel="noopener noreferrer"
        target="_blank"
      >
        {text}
      </a>

      <Component1_32 className="variant-250" color="#1C4886" />
    </a>
  );
};
