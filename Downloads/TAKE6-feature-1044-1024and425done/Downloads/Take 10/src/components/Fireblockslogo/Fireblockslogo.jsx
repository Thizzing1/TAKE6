import "./style.css";

export const Fireblockslogo = ({
  text = "Blog",
  className,
  vectorClassName,
  vector = "/img/vector-99.svg",
  img = "/img/vector-100.svg",
  vectorClassNameOverride,
}) => {
  return (
    <div className={`fireblockslogo ${className}`}>
      <img
        className={`vector-31 ${vectorClassName}`}
        alt="Vector"
        src={vector}
      />

      <img
        className={`vector-32 ${vectorClassNameOverride}`}
        alt="Vector"
        src={img}
      />
    </div>
  );
};
