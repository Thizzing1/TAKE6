import "./style.css";

export const Centrifuge = ({
  text = "Blog",
  className,
  centrifuge = "/img/centrifuge-768.svg",
}) => {
  return (
    <img
      className={`centrifuge ${className}`}
      alt="Centrifuge"
      src={centrifuge}
    />
  );
};
