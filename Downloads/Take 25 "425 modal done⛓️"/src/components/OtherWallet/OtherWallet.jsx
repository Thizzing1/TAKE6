import "./style.css";

export const OtherWallet = ({
  className,
  background = "/img/background-5.svg",
}) => {
  return (
    <div className={`other-wallet ${className}`}>
      <img className="background" alt="Background" src={background} />

      <div className="container-3">
        <div className="text-wrapper-4">Other</div>
      </div>
    </div>
  );
};
