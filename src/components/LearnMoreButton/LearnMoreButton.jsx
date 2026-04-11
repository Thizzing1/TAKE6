import "./style.css";

export const LearnMoreButton = ({ className = "", containerClassName = "" }) => {
  return (
    <button className={`learn-more-button ${className}`}>
      <div className={`container-4 ${containerClassName}`}>
        <div className="container-5">
          <div className="container-6">
            <div className="text-wrapper-5">Learn More</div>
          </div>
        </div>
      </div>
    </button>
  );
};
