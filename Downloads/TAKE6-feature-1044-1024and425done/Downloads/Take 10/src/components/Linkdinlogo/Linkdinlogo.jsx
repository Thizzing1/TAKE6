import "./style.css";

export const Linkdinlogo = ({
  text = "Blog",
  className,
  clipPathGroupClassName,
}) => {
  return (
    <div className={`linkdinlogo ${className}`}>
      <img
        className={`clip-path-group-2 ${clipPathGroupClassName}`}
        alt="Clip path group"
        src="/img/clip-path-group.png"
      />
    </div>
  );
};
