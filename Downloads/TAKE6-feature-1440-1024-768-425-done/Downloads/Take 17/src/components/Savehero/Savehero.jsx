import "./style.css";

export const Savehero = ({
  text = "Blog",
  className,
  overlapGroupClassName,
  vectorClassName,
  vector = "/img/vector-382.svg",
  vectorClassNameOverride,
  img = "/img/vector-383.svg",
  imgClassName,
  vector1 = "/img/vector-384.svg",
  imgClassNameOverride,
  vector2 = "/img/vector-385.svg",
  vectorClassName1,
  vector3 = "/img/vector-386.svg",
}) => {
  return (
    <div className={`savehero ${className}`}>
      <div className={`overlap-group ${overlapGroupClassName}`}>
        <div className="element-to-rush-out">
          <div className="group-7">
            <img className="vector-34" alt="Vector" src="/img/vector-381.svg" />

            <img
              className={`vector-35 ${vectorClassName}`}
              alt="Vector"
              src={vector}
            />
          </div>
        </div>

        <div className="element-nd-to-rush-out">
          <div className="group-7">
            <img
              className={`vector-35 ${vectorClassNameOverride}`}
              alt="Vector"
              src={img}
            />

            <img
              className={`vector-34 ${imgClassName}`}
              alt="Vector"
              src={vector1}
            />
          </div>
        </div>

        <div className="element-st-to-rush-out">
          <div className="group-8">
            <img
              className={`vector-34 ${imgClassNameOverride}`}
              alt="Vector"
              src={vector2}
            />

            <img
              className={`vector-35 ${vectorClassName1}`}
              alt="Vector"
              src={vector3}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
