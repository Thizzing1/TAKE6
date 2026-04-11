import "./style.css";

export const Whyaavehero = ({
  text = "Blog",
  className,
  groupClassName,
  group = "/img/group-67.png",
}) => {
  return (
    <div className={`whyaavehero ${className}`}>
      <img className={`group-5 ${groupClassName}`} alt="Group" src={group} />
    </div>
  );
};
