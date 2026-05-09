import "./style.css";

export const Lineunder = ({
  text = "Blog",
  className,
  vectorClassName,
  vector = "/img/vector-161.svg",
}) => {
  return (
    <div className={`lineunder ${className}`}>
      <img className={`vector ${vectorClassName}`} alt="Vector" src={vector} />
    </div>
  );
};
