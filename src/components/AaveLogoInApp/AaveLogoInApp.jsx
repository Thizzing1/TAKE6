import "./style.css";

export const AaveLogoInApp = ({ className, vectorClassName }) => {
  return (
    <div className={`aave-logo-in-app ${className}`}>
      <img className={`vector-3 ${vectorClassName}`} alt="Vector" />

      <img className="vector-4" alt="Vector" />
    </div>
  );
};
