import "./style.css";

export const Metamasklogo = ({
  className,
  vectorClassName,
  vectorClassNameOverride,
  imgClassName,
}) => {
  return (
    <div className={`metamasklogo ${className}`}>
      <img className="vector-12" alt="Vector" src="/img/vector-117.svg" />

      <img
        className={`vector-13 ${vectorClassName}`}
        alt="Vector"
        src="/img/vector-118.svg"
      />

      <img
        className={`vector-14 ${vectorClassNameOverride}`}
        alt="Vector"
        src="/img/vector-119.svg"
      />

      <img
        className={`vector-15 ${imgClassName}`}
        alt="Vector"
        src="/img/vector-120.svg"
      />

      <img className="vector-16" alt="Vector" src="/img/vector-121.svg" />

      <img className="vector-17" alt="Vector" src="/img/vector-122.svg" />

      <img className="vector-18" alt="Vector" src="/img/vector-123.svg" />

      <img className="vector-19" alt="Vector" src="/img/vector-124.svg" />
    </div>
  );
};
