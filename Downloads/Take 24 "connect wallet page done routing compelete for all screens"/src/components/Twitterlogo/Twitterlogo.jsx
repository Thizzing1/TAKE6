import "./style.css";

export const Twitterlogo = ({ text = "Blog", className }) => {
  return (
    <div className={`twitterlogo ${className}`}>
      <img className="vector-53" alt="Vector" src="/img/vector-357.svg" />
    </div>
  );
};
