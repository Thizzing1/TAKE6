import "./style.css";

export const Savehero = ({
  text = "Blog",
  className,
  overlapGroupClassName,
  vectorClassName,
  vector = "/img/vector-82.svg",
  vectorClassNameOverride,
  img = "/img/vector-83.svg",
  imgClassName,
  vector1 = "/img/vector-84.svg",
  imgClassNameOverride,
  vector2 = "/img/vector-85.svg",
  vectorClassName1,
  vector3 = "/img/vector-86.svg",
}) => {
  return (
    <div className={`savehero ${className}`}>
      <div className={`overlap-group-2 ${overlapGroupClassName}`}>
        <div className="element-to-rush-out">
          <div className="group-34">
            <img className="vector-34" alt="Vector" src="/img/vector-81.svg" />

            <img
              className={`vector-35 ${vectorClassName}`}
              alt="Vector"
              src={vector}
            />
          </div>
        </div>

        <div className="element-nd-to-rush-out">
          <div className="group-35">
            <img
              className={`vector-36 ${vectorClassNameOverride}`}
              alt="Vector"
              src={img}
            />

            <img
              className={`vector-37 ${imgClassName}`}
              alt="Vector"
              src={vector1}
            />
          </div>
        </div>

        <div className="element-st-to-rush-out">
          <div className="group-36">
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
