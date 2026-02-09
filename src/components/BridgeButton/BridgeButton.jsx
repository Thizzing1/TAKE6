import "./style.css";

export const BridgeButton = ({ className, vectorClassName }) => {
  return (
    <div className={`bridge-button ${className}`}>
      <div className="frame-wrapper">
        <div className="frame">
          <img className={`img ${vectorClassName}`} alt="Vector" />
        </div>
      </div>
    </div>
  );
};
