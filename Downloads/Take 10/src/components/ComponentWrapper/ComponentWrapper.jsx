import "./style.css";

export const ComponentWrapper = ({
  text = "Blog",
  vector = "/img/vector-58.svg",
  className,
}) => {
  return (
    <div className={`component-wrapper ${className}`}>
      <img className="vector-44" alt="Vector" src={vector} />
    </div>
  );
};
