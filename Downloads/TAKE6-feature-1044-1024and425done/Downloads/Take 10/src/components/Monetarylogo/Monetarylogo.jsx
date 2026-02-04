import "./style.css";

export const Monetarylogo = ({
  text = "Blog",
  className,
  vector = "/img/vector-91.svg",
  vectorClassName,
  img = "/img/vector-92.svg",
  vector1 = "/img/vector-93.svg",
  vectorClassNameOverride,
  vector2 = "/img/vector-94.svg",
  imgClassName,
  vector3 = "/img/vector-95.svg",
  imgClassNameOverride,
}) => {
  return (
    <div className={`monetarylogo ${className}`}>
      <img className="vector-24" alt="Vector" src={vector} />

      <img className={`vector-25 ${vectorClassName}`} alt="Vector" src={img} />

      <img
        className={`vector-26 ${imgClassNameOverride}`}
        alt="Vector"
        src={vector1}
      />

      <img
        className={`vector-27 ${vectorClassNameOverride}`}
        alt="Vector"
        src={vector2}
      />

      <img className={`vector-28 ${imgClassName}`} alt="Vector" src={vector3} />
    </div>
  );
};
