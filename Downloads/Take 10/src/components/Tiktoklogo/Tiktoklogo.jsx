import "./style.css";

export const Tiktoklogo = ({ text = "Blog", className }) => {
  return (
    <div className={`tiktoklogo ${className}`}>
      <img className="vector-56" alt="Vector" src="/img/vector-48.svg" />
    </div>
  );
};
