import "./style.css";

export const ElementOpacity = ({ text = "Blog", className }) => {
  return (
    <div className={`element-opacity ${className}`}>
      <img className="group" alt="Group" src="/img/group-48.png" />

      <img className="group" alt="Group" src="/img/group-49.png" />
    </div>
  );
};
