import "./style.css";

export const Aavefooterlogo = ({
  text = "Blog",
  className,
  vectorClassName,
  vectorClassNameOverride,
  imgClassName,
  imgClassNameOverride,
}) => {
  return (
    <div className={`aavefooterlogo ${className}`}>
      <img className="vector-48" alt="Vector" src="/img/vector-50.svg" />

      <img className="vector-49" alt="Vector" src="/img/vector-51.svg" />

      <img className="vector-50" alt="Vector" src="/img/vector-52.svg" />

      <img
        className={`vector-51 ${vectorClassName}`}
        alt="Vector"
        src="/img/vector-53.svg"
      />

      <img
        className={`vector-52 ${vectorClassNameOverride}`}
        alt="Vector"
        src="/img/vector-54.svg"
      />

      <img
        className={`vector-53 ${imgClassName}`}
        alt="Vector"
        src="/img/vector-55.svg"
      />

      <img
        className={`vector-54 ${imgClassNameOverride}`}
        alt="Vector"
        src="/img/vector-55.svg"
      />
    </div>
  );
};
