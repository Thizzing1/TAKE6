import "./style.css";

export const Krakenlogo = ({ className, vectorClassName }) => {
  return (
    <div className={`krakenlogo ${className}`}>
      <img className="vector-20" alt="Vector" src="/img/vector-114.svg" />

      <img className="vector-21" alt="Vector" src="/img/vector-115.svg" />

      <img
        className={`vector-22 ${vectorClassName}`}
        alt="Vector"
        src="/img/vector-116.svg"
      />
    </div>
  );
};
