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
      <img className="vector-44" alt="Vector" src="/img/vector-50.svg" />

      <img className="vector-45" alt="Vector" src="/img/vector-51.svg" />

      <img className="vector-46" alt="Vector" src="/img/vector-52.svg" />

      <img
        className={`vector-47 ${vectorClassName}`}
        alt="Vector"
        src="/img/vector-53.svg"
      />

      <img
        className={`vector-48 ${vectorClassNameOverride}`}
        alt="Vector"
        src="/img/vector-54.svg"
      />

      <img
        className={`vector-49 ${imgClassName}`}
        alt="Vector"
        src="/img/vector-55.svg"
      />

      <img
        className={`vector-50 ${imgClassNameOverride}`}
        alt="Vector"
        src="/img/vector-55.svg"
      />
    </div>
  );
};
