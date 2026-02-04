import "./style.css";

export const Governedbyyouhero = ({
  text = "Blog",
  className,
  overlapGroupClassName,
  clockwiseRotating = "/img/clockwise-rotating-circles-1024.png",
  antiClockwiseClassName,
  antiClockwise = "/img/anti-clockwise-rotating-circles-1024.png",
}) => {
  return (
    <div className={`governedbyyouhero ${className}`}>
      <div className={`overlap-group-5 ${overlapGroupClassName}`}>
        <img
          className="clockwise-rotating"
          alt="Clockwise rotating"
          src={clockwiseRotating}
        />

        <img
          className={`anti-clockwise ${antiClockwiseClassName}`}
          alt="Anti clockwise"
          src={antiClockwise}
        />
      </div>
    </div>
  );
};
