import "./style.css";

export const Consensyslogo = ({
  text = "Blog",
  className,
  consensyslogo = "/img/consensyslogo-1024-1.svg",
}) => {
  return (
    <img
      className={`consensyslogo ${className}`}
      alt="Consensyslogo"
      src={consensyslogo}
    />
  );
};
