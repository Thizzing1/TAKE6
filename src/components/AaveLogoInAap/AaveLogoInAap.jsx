import "./style.css";

export const AaveLogoInAap = ({ className, vectorClassName }) => {
  return (
    <div className={`aave-logo-in-aap ${className}`}>
      <div className="link-go-to-homepage">
        <div className="AAVE">
          <div className="aave-com-logo-header">
            <div className="aave-com-logo-header-2">
              <img className={`img ${vectorClassName}`} alt="Vector" />

              <img className="vector-2" alt="Vector" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
