import "./style.css";

export const Lineunder = ({
  text = "Blog",
  className,
  vectorClassName,
  vector = "/img/vector-174.svg",
}) => {
  return (
    <div className={`lineunder ${className}`}>
      <img
        className={`vector-11 ${vectorClassName}`}
        alt="Vector"
        src={vector}
      />
    </div>
  );
};
