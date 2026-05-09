import "./style.css";

export const FourThrainbowlineinfooter = ({
  className,
  overlayGradientClassName,
}) => {
  return (
    <div className={`four-thrainbowlineinfooter ${className}`}>
      <div className={`overlay-gradient-4 ${overlayGradientClassName}`} />
    </div>
  );
};
