import "./style.css";

export const WhyaaveheroWrapper = ({
  text = "Blog",
  className,
  vectorClassName,
  vector = "/img/vector-89.svg",
}) => {
  return (
    <div className={`whyaavehero-wrapper ${className}`}>
      <img
        className={`vector-33 ${vectorClassName}`}
        alt="Vector"
        src={vector}
      />

      <div className="overlap-group">
        <img className="top" alt="Top" src="/img/top.png" />

        <img className="bottom" alt="Bottom" src="/img/bottom.png" />
      </div>
    </div>
  );
};
