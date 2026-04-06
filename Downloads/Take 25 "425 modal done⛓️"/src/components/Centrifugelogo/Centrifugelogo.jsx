import "./style.css";

export const Centrifugelogo = ({
  text = "Blog",
  className,
  centrifugelogo = "/img/centrifugelogo-1024-1.svg",
}) => {
  return (
    <img
      className={`centrifugelogo ${className}`}
      alt="Centrifugelogo"
      src={centrifugelogo}
    />
  );
};
