import "./style.css";

export const GhoheroWrapper = ({
  text = "Blog",
  className,
  group = "/img/group-54.png",
}) => {
  return (
    <div className={`ghohero-wrapper ${className}`}>
      <img className="group-15" alt="Group" src={group} />
    </div>
  );
};
