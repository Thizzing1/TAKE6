import "./style.css";

export const Metamasklogo = ({
  className,
  vectorClassName,
  vectorClassNameOverride,
  imgClassName,
}) => {
  return (
    <div className={`metamasklogo ${className}`}>
      <img className="img" alt="Vector" src="/img/vector-108.svg" />

      <img
        className={`vector-2 ${vectorClassName}`}
        alt="Vector"
        src="/img/vector-109.svg"
      />

      <img
        className={`vector-3 ${vectorClassNameOverride}`}
        alt="Vector"
        src="/img/vector-110.svg"
      />

      <img
        className={`vector-4 ${imgClassName}`}
        alt="Vector"
        src="/img/vector-111.svg"
      />

      <img className="vector-5" alt="Vector" src="/img/vector-112.svg" />

      <img className="vector-6" alt="Vector" src="/img/vector-113.svg" />

      <img className="vector-7" alt="Vector" src="/img/vector-114.svg" />

      <img className="vector-8" alt="Vector" src="/img/vector-115.svg" />
    </div>
  );
};
