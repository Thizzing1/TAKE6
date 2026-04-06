import "./style.css";

export const ComponentWrapper = ({
  text = "Blog",
  vector = "/img/vector-358.svg",
  className,
}) => {
  return (
    <div className={`component-wrapper ${className}`}>
      <img className="vector-42" alt="Vector" src={vector} />
    </div>
  );
};
