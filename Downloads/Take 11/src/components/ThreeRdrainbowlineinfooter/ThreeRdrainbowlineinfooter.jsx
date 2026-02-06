import "./style.css";

export const ThreeRdrainbowlineinfooter = ({
  className,
  overlayGradientClassName,
}) => {
  return (
    <div className={`three-rdrainbowlineinfooter ${className}`}>
      <div className={`overlay-gradient-3 ${overlayGradientClassName}`} />
    </div>
  );
};
