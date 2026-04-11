import "./style.css";

export const Aaveeverywheremainicon325 = ({
  text = "Blog",
  className,
  vector = "/img/vector-360.svg",
  img = "/img/vector-361.svg",
  vector1 = "/img/vector-359.svg",
}) => {
  return (
    <div className={`aaveeverywheremainicon-325 ${className}`}>
      <div className="group-16">
        <img className="vector-43" alt="Vector" src={vector} />

        <img className="vector-44" alt="Vector" src={img} />
      </div>

      <img className="vector-45" alt="Vector" src={vector1} />
    </div>
  );
};
