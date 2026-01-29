import { Variant3 } from "../../icons/Variant3";
import "./style.css";

export const ContactusButton = ({
  text = "Get Early Access",
  className,
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
          className="text-2"
          href={href1}
          rel="noopener noreferrer"
          target="_blank"
        >
          {text}
        </a>
      </div>

      <Variant3 className="variant-3-instance" color="black" />
    </a>
  );
};
