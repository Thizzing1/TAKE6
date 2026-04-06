import "./style.css";

export const Element = ({
  className,
  vectorClassName,
  vectorClassNameOverride,
  imgClassName,
  imgClassNameOverride,
  vectorClassName1,
  vectorClassName2,
  vectorClassName3,
  vectorClassName4,
  vectorClassName5,
  vectorClassName6,
}) => {
  return (
    <div className={`element ${className}`}>
      <div className="overlap-group-3">
        <div className="drop-move-side">
          <div className="group-14">
            <img className={`vector-40 ${vectorClassName}`} alt="Vector" />

            <img
              className={`vector-41 ${vectorClassNameOverride}`}
              alt="Vector"
            />
          </div>
        </div>

        <div className="drop-nd-move-side">
          <div className="group-14">
            <img className={`vector-40 ${imgClassName}`} alt="Vector" />

            <img className={`vector-41 ${imgClassNameOverride}`} alt="Vector" />
          </div>
        </div>

        <div className="drop-rd-move-side">
          <div className="group-14">
            <img className={`vector-40 ${vectorClassName1}`} alt="Vector" />

            <img className={`vector-41 ${vectorClassName2}`} alt="Vector" />
          </div>
        </div>

        <div className="drop-th-move-side">
          <div className="group-14">
            <img className={`vector-40 ${vectorClassName3}`} alt="Vector" />

            <img className={`vector-41 ${vectorClassName4}`} alt="Vector" />
          </div>
        </div>

        <div className="drop-move-side-2">
          <div className="group-14">
            <img className={`vector-40 ${vectorClassName5}`} alt="Vector" />

            <img className={`vector-41 ${vectorClassName6}`} alt="Vector" />
          </div>
        </div>
      </div>
    </div>
  );
};
