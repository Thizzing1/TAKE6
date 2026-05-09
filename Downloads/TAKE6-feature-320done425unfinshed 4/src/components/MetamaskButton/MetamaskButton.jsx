import "./style.css";

export const MetamaskButton = ({
  className,
  container = "/img/container-5.svg",
}) => {
  return (
    <div className={`metamask-button ${className}`}>
      <img className="img" alt="Container" src={container} />

      <div className="div">
        <div className="text-wrapper-2">MetaMask</div>
      </div>
    </div>
  );
};
