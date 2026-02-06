import "./style.css";

export const ShortfallHero = ({
  className,
  vectorClassName,
  vectorClassNameOverride,
}) => {
  return (
    <div className={`shortfall-hero ${className}`}>
      <img className="whole-thing-should" alt="Whole thing should" />

      <div className="group-41">
        <img className={`vector-40 ${vectorClassName}`} alt="Vector" />

        <img className={`vector-41 ${vectorClassNameOverride}`} alt="Vector" />
      </div>
    </div>
  );
};
