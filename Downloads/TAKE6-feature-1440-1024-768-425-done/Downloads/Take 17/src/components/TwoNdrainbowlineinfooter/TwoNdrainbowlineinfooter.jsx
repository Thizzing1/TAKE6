import "./style.css";

export const TwoNdrainbowlineinfooter = ({
  className,
  overlayGradientClassName,
}) => {
  return (
    <div className={`two-ndrainbowlineinfooter ${className}`}>
      <div className={`overlay-gradient-2 ${overlayGradientClassName}`} />
    </div>
  );
};
