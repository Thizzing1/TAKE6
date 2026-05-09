import "./style.css";

export const Monetarylogo = ({
  text = "Blog",
  className,
  vector = "/img/vector-391.svg",
  vectorClassName,
  img = "/img/vector-392.svg",
  vector1 = "/img/vector-393.svg",
  vector2 = "/img/vector-394.svg",
  vectorClassNameOverride,
  vector3 = "/img/vector-395.svg",
  imgClassName,
}) => {
  return (
    <div className={`monetarylogo ${className}`}>
      <img className="vector-24" alt="Vector" src={vector} />

      <img className={`vector-25 ${vectorClassName}`} alt="Vector" src={img} />

      <img className={`vector-26 ${imgClassName}`} alt="Vector" src={vector1} />

      <img className="vector-27" alt="Vector" src={vector2} />

      <img
        className={`vector-28 ${vectorClassNameOverride}`}
        alt="Vector"
        src={vector3}
      />
    </div>
  );
};
