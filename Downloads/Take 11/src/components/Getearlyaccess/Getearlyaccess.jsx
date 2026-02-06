import { Variant3 } from "../../icons/Variant3";
import "./style.css";

export const Getearlyaccess = ({
  text = "Get Early Access",
  className,
  href,
  href1,
}) => {
  return (
    <a
      className={`getearlyaccess ${className}`}
      href={href}
      rel="noopener noreferrer"
      target="_blank"
    >
      <div className="container">
        <a
          className="text"
          href={href1}
          rel="noopener noreferrer"
          target="_blank"
        >
          {text}
        </a>
      </div>

      <Variant3 className="variant-7" color="white" />
    </a>
  );
};
