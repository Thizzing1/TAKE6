import "./style.css";

export const Galaxylogo = ({
  text = "Blog",
  className,
  vector = "/img/vector-97.svg",
  img = "/img/vector-98.svg",
}) => {
  return (
    <div className={`galaxylogo ${className}`}>
      <img className="vector-29" alt="Vector" src={vector} />

      <img className="vector-30" alt="Vector" src={img} />
    </div>
  );
};
