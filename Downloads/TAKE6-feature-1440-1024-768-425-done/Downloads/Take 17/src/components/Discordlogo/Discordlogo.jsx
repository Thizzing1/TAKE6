import "./style.css";

export const Discordlogo = ({ text = "Blog", className }) => {
  return (
    <div className={`discordlogo ${className}`}>
      <img className="vector-55" alt="Vector" src="/img/vector-355.svg" />
    </div>
  );
};
