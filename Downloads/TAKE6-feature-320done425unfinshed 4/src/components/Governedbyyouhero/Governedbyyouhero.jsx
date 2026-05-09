import "./style.css";

export const Governedbyyouhero = ({
  text = "Blog",
  className,
  overlapGroupClassName,
  clockwiseRotating = "/img/clockwise-rotating-circles-325.png",
  antiClockwise = "/img/anti-clockwise-rotating-circles-325.png",
}) => {
  return (
    <div className={`governedbyyouhero ${className}`}>
      <div className={`overlap-group-4 ${overlapGroupClassName}`}>
        <img
          className="clockwise-rotating"
          alt="Clockwise rotating"
          src={clockwiseRotating}
        />

        <img
          className="anti-clockwise"
          alt="Anti clockwise"
          src={antiClockwise}
        />
      </div>
    </div>
  );
};
