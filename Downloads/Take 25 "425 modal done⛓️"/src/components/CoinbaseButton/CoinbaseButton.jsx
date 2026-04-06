import "./style.css";

export const CoinbaseButton = ({ className }) => {
  return (
    <div className={`coinbase-button ${className}`}>
      <div className="SVG-wrapper">
        <div className="SVG-2">
          <img className="vector" alt="Vector" src="/img/vector-16.svg" />

          <img className="vector-2" alt="Vector" src="/img/vector-17.svg" />
        </div>
      </div>

      <div className="container-2">
        <div className="text-wrapper-3">Coinbase</div>
      </div>
    </div>
  );
};
