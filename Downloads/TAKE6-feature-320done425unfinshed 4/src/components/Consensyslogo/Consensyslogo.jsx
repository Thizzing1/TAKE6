import "./style.css";

export const Consensyslogo = ({
  text = "Blog",
  className,
  consensyslogo = "/img/consensyslogo-320.svg",
}) => {
  return (
    <img
      className={`consensyslogo ${className}`}
      alt="Consensyslogo"
      src={consensyslogo}
    />
  );
};
