import "./style.css";

export const Twitterlogo = ({ text = "Blog", className }) => {
  return (
    <div className={`twitterlogo ${className}`}>
      <img className="vector-55" alt="Vector" src="/img/vector-49.svg" />
    </div>
  );
};
