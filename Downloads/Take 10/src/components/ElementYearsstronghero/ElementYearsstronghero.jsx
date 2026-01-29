import "./style.css";

export const ElementYearsstronghero = ({
  text = "Blog",
  className,
  overlapGroupClassName,
  vector = "/img/vector-67.svg",
  img = "/img/vector-68.svg",
  vector1 = "/img/vector-69.svg",
  vector2 = "/img/vector-70.svg",
  vector3 = "/img/vector-71.svg",
  vector4 = "/img/vector-72.svg",
  vector5 = "/img/vector-73.svg",
  vector6 = "/img/vector-74.svg",
  vector7 = "/img/vector-75.svg",
  vector8 = "/img/vector-76.svg",
}) => {
  return (
    <div className={`element-yearsstronghero ${className}`}>
      <div className={`overlap-group-4 ${overlapGroupClassName}`}>
        <div className="group-42">
          <div className="group-43">
            <img className="vector-42" alt="Vector" src={vector} />

            <img className="vector-43" alt="Vector" src={img} />
          </div>
        </div>

        <div className="group-44">
          <div className="group-45">
            <img className="vector-42" alt="Vector" src={vector1} />

            <img className="vector-43" alt="Vector" src={vector2} />
          </div>
        </div>

        <div className="group-46">
          <div className="group-47">
            <img className="vector-42" alt="Vector" src={vector3} />

            <img className="vector-43" alt="Vector" src={vector4} />
          </div>
        </div>

        <div className="group-48">
          <div className="group-49">
            <img className="vector-42" alt="Vector" src={vector5} />

            <img className="vector-43" alt="Vector" src={vector6} />
          </div>
        </div>

        <div className="group-50">
          <div className="group-51">
            <img className="vector-42" alt="Vector" src={vector7} />

            <img className="vector-43" alt="Vector" src={vector8} />
          </div>
        </div>
      </div>
    </div>
  );
};
