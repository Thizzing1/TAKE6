import "./style.css";

export const ConnectWallet = ({
  text = "Connect wallet",
  className = "",
  ...props
}) => {
  return (
    <div
      className={`connect-wallet ${className}`}
      {...props}
    >
      <div className="text-10">{text}</div>
    </div>
  );
};
