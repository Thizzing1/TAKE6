import "./style.css";

export const SwapButton = ({ className, vectorClassName }) => {
  return (
    <div className={`swap-button ${className}`}>
      <div className="container-8">
        <div className="SVG-2">
          <div className="vector-wrapper">
            <img className={`vector-2 ${vectorClassName}`} alt="Vector" />
          </div>
        </div>
      </div>
    </div>
  );
};
