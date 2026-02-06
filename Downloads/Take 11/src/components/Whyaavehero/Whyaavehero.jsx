import "./style.css";

export const Whyaavehero = ({
  text = "Blog",
  className,
  groupClassName,
  group = "/img/group-28.png",
}) => {
  return (
    <div className={`whyaavehero ${className}`}>
      <img className={`group-32 ${groupClassName}`} alt="Group" src={group} />
    </div>
  );
};
