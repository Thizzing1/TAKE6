import "./style.css";

export const MiddleBlue = ({
  className,
  middleBlue = "/img/middle-blue-325-1.svg",
}) => {
  return (
    <img
      className={`middle-blue ${className}`}
      alt="Middle blue"
      src={middleBlue}
    />
  );
};
