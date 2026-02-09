import "./style.css";

export const OneStrainbowlineinfooter = ({
  className,
  overlayGradientClassName,
}) => {
  return (
    <div className={`one-strainbowlineinfooter ${className}`}>
      <div className={`overlay-gradient ${overlayGradientClassName}`} />
    </div>
  );
};
