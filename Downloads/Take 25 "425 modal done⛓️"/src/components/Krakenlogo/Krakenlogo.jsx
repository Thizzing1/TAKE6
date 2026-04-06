import "./style.css";

export const Krakenlogo = ({
  className,
  vectorClassName,
  vector = "/img/vector-106.svg",
  vectorClassNameOverride,
}) => {
  return (
    <div className={`krakenlogo ${className}`}>
      <img className="vector-9" alt="Vector" src="/img/vector-105.svg" />

      <img
        className={`vector-10 ${vectorClassName}`}
        alt="Vector"
        src={vector}
      />

      <img
        className={`vector-11 ${vectorClassNameOverride}`}
        alt="Vector"
        src="/img/vector-107.svg"
      />
    </div>
  );
};
