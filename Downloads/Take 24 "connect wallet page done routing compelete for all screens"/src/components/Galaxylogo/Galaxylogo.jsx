import "./style.css";

export const Galaxylogo = ({
  text = "Blog",
  className,
  vector = "/img/vector-397.svg",
  vectorClassName,
  img = "/img/vector-398.svg",
}) => {
  return (
    <div className={`galaxylogo ${className}`}>
      <img className="vector-29" alt="Vector" src={vector} />

      <img className={`vector-30 ${vectorClassName}`} alt="Vector" src={img} />
    </div>
  );
};
