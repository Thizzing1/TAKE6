import "./style.css";

export const ConnectWallet = ({ text = "Blog", className }) => {
  return (
    <div className={`connect-wallet ${className}`}>
      <div className="text-10">Connect wallet</div>
    </div>
  );
};
