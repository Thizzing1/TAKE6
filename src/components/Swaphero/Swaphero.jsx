import "./style.css";

export const Swaphero = ({
  text = "Blog",
  className,
  bouncingAnimationClassName,
}) => {
  return (
    <div className={`swaphero ${className}`}>
      <img
        className={`bouncing-animation ${bouncingAnimationClassName}`}
        alt="Bouncing animation"
        src="/img/bouncing-animation-325.png"
      />
    </div>
  );
};
