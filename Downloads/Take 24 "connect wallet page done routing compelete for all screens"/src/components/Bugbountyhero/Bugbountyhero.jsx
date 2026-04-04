import "./style.css";

export const Bugbountyhero = ({
  text = "Blog",
  className,
  topClassName,
  vectorClassName,
  vector = "/img/vector-379.svg",
  vectorClassNameOverride,
  img = "/img/vector-380.svg",
  overlapGroupClassName,
  groupClassName,
  group = "/img/group-41.png",
  groupClassNameOverride,
  group1 = "/img/group-43.png",
  elementClassName,
  element = "/img/3-2.png",
  imgClassName,
  group2 = "/img/group-58.png",
}) => {
  return (
    <div className={`bugbountyhero ${className}`}>
      <div className={`group-wrapper ${topClassName}`}>
        <div className="group-9">
          <img
            className={`vector-36 ${vectorClassName}`}
            alt="Vector"
            src={vector}
          />

          <img
            className={`vector-37 ${vectorClassNameOverride}`}
            alt="Vector"
            src={img}
          />
        </div>
      </div>

      <div className={`overlap-group-2 ${overlapGroupClassName}`}>
        <img className={`group-10 ${groupClassName}`} alt="Group" src={group} />

        <img
          className={`group-11 ${groupClassNameOverride}`}
          alt="Group"
          src={group1}
        />

        <img
          className={`element-2 ${elementClassName}`}
          alt="Element"
          src={element}
        />

        <img className={`group-12 ${imgClassName}`} alt="Group" src={group2} />
      </div>
    </div>
  );
};
