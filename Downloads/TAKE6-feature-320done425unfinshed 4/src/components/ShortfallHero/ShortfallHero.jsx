import "./style.css";

export const ShortfallHero = ({
  className,
  vectorClassName,
  vectorClassNameOverride,
}) => {
  return (
    <div className={`shortfall-hero ${className}`}>
      <img className="whole-thing-should" alt="Whole thing should" />

      <div className="group-13">
        <img className={`vector-38 ${vectorClassName}`} alt="Vector" />

        <img className={`vector-39 ${vectorClassNameOverride}`} alt="Vector" />
      </div>
    </div>
  );
};
