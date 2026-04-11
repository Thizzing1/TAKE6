import "./style.css";

export const Tiktoklogo = ({ text = "Blog", className, vectorClassName }) => {
  return (
    <div className={`tiktoklogo ${className}`}>
      <img
        className={`vector-54 ${vectorClassName}`}
        alt="Vector"
        src="/img/vector-356.svg"
      />
    </div>
  );
};
