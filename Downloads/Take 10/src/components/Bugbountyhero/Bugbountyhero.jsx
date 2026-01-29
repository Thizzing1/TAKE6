import "./style.css";

export const Bugbountyhero = ({
  text = "Blog",
  className,
  topClassName,
  vectorClassName,
  vector = "/img/vector-79.svg",
  vectorClassNameOverride,
  img = "/img/vector-80.svg",
  overlapGroupClassName,
  group = "/img/group-18.png",
  group1 = "/img/group-22.png",
  element = "/img/3.png",
  groupClassName,
  group2 = "/img/group-26.png",
}) => {
  return (
    <div className={`bugbountyhero ${className}`}>
      <div className={`group-wrapper ${topClassName}`}>
        <div className="group-37">
          <img
            className={`vector-38 ${vectorClassName}`}
            alt="Vector"
            src={vector}
          />

          <img
            className={`vector-39 ${vectorClassNameOverride}`}
            alt="Vector"
            src={img}
          />
        </div>
      </div>

      <div className={`overlap-group-3 ${overlapGroupClassName}`}>
        <img className="group-38" alt="Group" src={group} />

        <img className="group-39" alt="Group" src={group1} />

        <img className="element-2" alt="Element" src={element} />

        <img
          className={`group-40 ${groupClassName}`}
          alt="Group"
          src={group2}
        />
      </div>
    </div>
  );
};
