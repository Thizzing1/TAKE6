import "./style.css";

export const GhoheroWrapper = ({
  text = "Blog",
  className,
  group = "/img/group-24.png",
}) => {
  return (
    <div className={`ghohero-wrapper ${className}`}>
      <img className="group-52" alt="Group" src={group} />
    </div>
  );
};
