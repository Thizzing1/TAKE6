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
      <img className="vector-57" alt="Vector" src="/img/vector-7.svg" />

      <img className="vector-58" alt="Vector" src="/img/vector-8.svg" />

      <img className="vector-59" alt="Vector" src="/img/vector-9.svg" />

      <img
        className={`vector-60 ${vectorClassName}`}
        alt="Vector"
        src="/img/vector-10.svg"
      />

      <img
        className={`vector-61 ${vectorClassNameOverride}`}
        alt="Vector"
        src="/img/vector-11.svg"
      />

      <div className="group-17">
        <img
          className={`vector-62 ${imgClassName}`}
          alt="Vector"
          src="/img/vector-12.svg"
        />

        <img
          className={`vector-63 ${imgClassNameOverride}`}
          alt="Vector"
          src="/img/vector-13.svg"
        />
      </div>
    </div>
  );
};
