import "./style.css";

export const GitHublogo = ({ text = "Blog", className }) => {
  return (
    <div className={`git-hublogo ${className}`}>
      <img className="vector-58" alt="Vector" src="/img/vector-46.svg" />
    </div>
  );
};
