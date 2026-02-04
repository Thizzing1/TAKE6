import "./style.css";

export const Instagramlogo = ({
  text = "Blog",
  className,
  clipPathGroupClassName,
}) => {
  return (
    <div className={`instagramlogo ${className}`}>
      <img
        className={`clip-path-group ${clipPathGroupClassName}`}
        alt="Clip path group"
        src="/img/clip-path-group-2.png"
      />
    </div>
  );
};
