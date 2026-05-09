import { Component1_32 } from "../../icons/Component1_32";
import "./style.css";

export const SeemoreButton = ({
  text = "Learn More",
  seemoreButtonClassName,
  icon = <Component1_32 className="variant-67" color="#1A88F8" />,
  href,
  href1,
}) => {
  return (
    <a href={href} rel="noopener noreferrer" target="_blank">
      <button className={`seemore-button ${seemoreButtonClassName}`}>
        <div className="funnyline" />

        <a
          className="text-7"
          href={href1}
          rel="noopener noreferrer"
          target="_blank"
        >
          {text}
        </a>

        {icon}
      </button>
    </a>
  );
};
