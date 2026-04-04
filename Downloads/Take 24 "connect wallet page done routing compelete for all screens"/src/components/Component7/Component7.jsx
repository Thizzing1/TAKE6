import "./style.css";

export const Component7 = ({ text = "Blog", variant, className, href }) => {
  return (
    <div className={`component-7 ${className}`}>
      <div className="text-11">{text}</div>
    </div>
  );
};
