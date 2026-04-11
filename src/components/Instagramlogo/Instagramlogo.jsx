import "./style.css";

export const Instagramlogo = ({
  text = "Blog",
  className,
  clipPathGroupClassName,
  clipPathGroup = "/img/clip-path-group-7.png",
}) => {
  return (
    <div className={`instagramlogo ${className}`}>
      <img
        className={`clip-path-group ${clipPathGroupClassName}`}
        alt="Clip path group"
        src={clipPathGroup}
      />
    </div>
  );
};
