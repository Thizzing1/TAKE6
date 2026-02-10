import "./style.css";

export const VariantHoverTrueWrapper = ({
  text = "Blog",
  variant,
  className,
  href,
}) => {
  return (
    <div className={`variant-hover-true-wrapper ${className}`}>
      <div className={`text-9 variant-5-${variant}`}>{text}</div>
    </div>
  );
};
