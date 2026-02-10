import "./style.css";

export const Jpmorganlogo = ({
  text = "Blog",
  className,
  vectorClassName,
  vector = "/img/vector-390.svg",
}) => {
  return (
    <div className={`jpmorganlogo ${className}`}>
      <img
        className={`vector-23 ${vectorClassName}`}
        alt="Vector"
        src={vector}
      />
    </div>
  );
};
