import "./style.css";

export const Githublogo = ({ text = "Blog", className }) => {
  return (
    <div className={`githublogo ${className}`}>
      <img className="vector-56" alt="Vector" src="/img/vector-354.svg" />
    </div>
  );
};
