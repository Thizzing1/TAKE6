import "./style.css";

export const Header = ({ className, vectorClassName }) => {
  return (
    <div className={`header ${className}`}>
      <div className="container">
        <div className="container-wrapper">
          <div className="div-wrapper">
            <p className="text-wrapper">
              Introducing the Aave mobile app, a smarter way to save.
            </p>
          </div>
        </div>

        <div className="JOIN-WAITLIST-wrapper">
          <div className="JOIN-WAITLIST">
            <div className="div">JOIN WAITLIST</div>
          </div>
        </div>

        <div className="close-button">
          <div className="SVG-wrapper">
            <div className="SVG">
              <img className={`vector ${vectorClassName}`} alt="Vector" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
