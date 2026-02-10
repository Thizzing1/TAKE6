import "./style.css";

export const WhyaaveheroWrapper = ({
  text = "Blog",
  className,
  vectorClassName,
  vector = "/img/vector-389.svg",
  topClassName,
  top = "/img/top-2.png",
  bottomClassName,
  bottom = "/img/bottom-2.png",
}) => {
  return (
    <div className={`whyaavehero-wrapper ${className}`}>
      <img
        className={`vector-33 ${vectorClassName}`}
        alt="Vector"
        src={vector}
      />

      <img className={`top ${topClassName}`} alt="Top" src={top} />

      <img className={`bottom ${bottomClassName}`} alt="Bottom" src={bottom} />
    </div>
  );
};
