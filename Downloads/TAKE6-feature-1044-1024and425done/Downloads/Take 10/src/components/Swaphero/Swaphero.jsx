import "./style.css";

export const Swaphero = ({
  text = "Blog",
  className,
  bouncingAnimationClassName,
  bouncingAnimation = "/img/bouncing-animation-1024.png",
}) => {
  return (
    <div className={`swaphero ${className}`}>
      <img
        className={`bouncing-animation ${bouncingAnimationClassName}`}
        alt="Bouncing animation"
        src={bouncingAnimation}
      />
    </div>
  );
};
