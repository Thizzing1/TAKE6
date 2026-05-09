import { useState } from "react";
import "./Actualmodal.css";

const walletOptions = [
  {
    name: "MetaMask",
    alt: "MetaMask",
    src: "https://c.animaapp.com/moo8j8dtP2IfhO/img/container.svg",
  },
  {
    name: "Coinbase",
    alt: "Coinbase",
    src: "https://c.animaapp.com/moo8j8dtP2IfhO/img/container-1.svg",
  },
  {
    name: "Other",
    alt: "Other",
    src: "https://c.animaapp.com/moo8j8dtP2IfhO/img/background.svg",
  },
];

const footerActions = ["Learn More", "Get a Wallet"];

export const ConnectWalletModal = ({ isOpen, onClose }) => {
  const [connecting, setConnecting] = useState(null);
  const [connected, setConnected] = useState(null);

  if (!isOpen) return null;

  const handleConnect = (walletName) => {
    setConnecting(walletName);
    setTimeout(() => {
      setConnecting(null);
      setConnected(walletName);
      setTimeout(() => {
        setConnected(null);
        onClose();
      }, 1200);
    }, 1500);
  };

  const handleFamily = () => {
    setConnecting("Family");
    setTimeout(() => {
      setConnecting(null);
      setConnected("Family");
      setTimeout(() => {
        setConnected(null);
        onClose();
      }, 1200);
    }, 1500);
  };

  return (
    <div className="modal-overlay" aria-modal="true" role="dialog" aria-label="Connect Wallet">
      <div
        className="modal-container animate-slide-up"
        onClick={(e) => e.stopPropagation()}   // Still needed to prevent bubbling
      >
        <section className="modal-sheet">
          {/* Header */}
          <header className="modal-header">
            <h1 className="modal-title">Connect Wallet</h1>
          </header>

          <div className="modal-body">
            {/* Family Button */}
            <button
              type="button"
              className="btn-family"
              onClick={handleFamily}
              disabled={connecting !== null}
            >
              {connecting === "Family" ? (
                <svg className="spin-icon" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                </svg>
              ) : connected === "Family" ? (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414L8.414 15l-4.121-4.121a1 1 0 011.414-1.414L8.414 12.172l6.879-6.879a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <img
                  alt="Family"
                  src="https://c.animaapp.com/moo8j8dtP2IfhO/img/margin.svg"
                />
              )}
              <span className="btn-family-label">
                {connected === "Family"
                  ? "Connected!"
                  : connecting === "Family"
                  ? "Connecting..."
                  : "Continue with Family"}
              </span>
            </button>

            {/* Divider */}
            <p className="modal-divider">or select a wallet from the list below</p>

            {/* Wallet Grid */}
            <nav aria-label="Wallet providers">
              <ul className="wallet-grid">
                {walletOptions.map((wallet) => (
                  <li key={wallet.name}>
                    <button
                      type="button"
                      className="btn-wallet"
                      disabled={connecting !== null}
                      onClick={() => handleConnect(wallet.name)}
                    >
                      <div className="wallet-icon-wrap">
                        <img
                          className={connecting === wallet.name || connected === wallet.name ? "dimmed" : ""}
                          alt={wallet.alt}
                          src={wallet.src}
                        />

                        {connecting === wallet.name && (
                          <div className="wallet-icon-overlay">
                            <svg className="spin-icon" viewBox="0 0 24 24" fill="none">
                              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                            </svg>
                          </div>
                        )}

                        {connected === wallet.name && (
                          <div className="wallet-icon-overlay">
                            <svg width="24" height="24" viewBox="0 0 20 20" fill="#19c6c9">
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414L8.414 15l-4.121-4.121a1 1 0 011.414-1.414L8.414 12.172l6.879-6.879a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                        )}
                      </div>

                      <span className="wallet-name">
                        {connected === wallet.name ? "Connected!" : wallet.name}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Info Card */}
            <div className="info-card">
              <div>
                <h2 className="info-card-title">What is a wallet?</h2>
                <p className="info-card-desc">
                  Wallets are used to send, receive, and store digital assets. 
                  Connecting a wallet lets you interact with apps.
                </p>
              </div>

              <div className="info-card-actions">
                {footerActions.map((action) => (
                  <button key={action} type="button" className="btn-action">
                    {action}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export const Actualmodal = ConnectWalletModal;