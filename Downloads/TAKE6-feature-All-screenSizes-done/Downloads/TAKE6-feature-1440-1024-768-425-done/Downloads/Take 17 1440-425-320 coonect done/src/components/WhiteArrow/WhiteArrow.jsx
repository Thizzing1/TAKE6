import "./style.css";

export const WhiteArrow = ({
  text = "Subscribe",
  vectorClassName,
  vector = "/img/vector-58.svg",
  className,
}) => {
  return (
    <div className={`white-arrow ${className}`}>
      <img
        className={`vector-43 ${vectorClassName}`}
        alt="Vector"
        src={vector}
      />
    </div>
  );
};
