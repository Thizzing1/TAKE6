import "./style.css";

export const Aavelogo = ({
  className,
  vectorClassName,
  vectorClassNameOverride,
  imgClassName,
  imgClassNameOverride,
}) => {
  return (
    <div className={`aavelogo ${className}`}>
      <img className="vector-61" alt="Vector" src="/img/vector-37.svg" />

      <img className="vector-62" alt="Vector" src="/img/vector-38.svg" />

      <img className="vector-63" alt="Vector" src="/img/vector-39.svg" />

      <img
        className={`vector-64 ${vectorClassName}`}
        alt="Vector"
        src="/img/vector-40.svg"
      />

      <img
        className={`vector-65 ${vectorClassNameOverride}`}
        alt="Vector"
        src="/img/vector-41.svg"
      />

      <div className="group-54">
        <img
          className={`vector-66 ${imgClassName}`}
          alt="Vector"
          src="/img/vector-42.svg"
        />

        <img
          className={`vector-67 ${imgClassNameOverride}`}
          alt="Vector"
          src="/img/vector-43.svg"
        />
      </div>
    </div>
  );
};
