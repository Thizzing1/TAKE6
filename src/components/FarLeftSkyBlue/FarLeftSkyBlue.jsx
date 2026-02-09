import "./style.css";

export const FarLeftSkyBlue = ({
  className,
  farLeftSkyBlue = "/img/far-left-sky-blue-325-1.svg",
}) => {
  return (
    <img
      className={`far-left-sky-blue ${className}`}
      alt="Far left sky blue"
      src={farLeftSkyBlue}
    />
  );
};
