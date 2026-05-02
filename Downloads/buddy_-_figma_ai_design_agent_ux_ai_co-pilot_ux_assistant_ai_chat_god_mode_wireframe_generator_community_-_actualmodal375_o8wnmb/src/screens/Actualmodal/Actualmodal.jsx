import { useState } from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";

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
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 backdrop-blur-sm"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
      aria-label="Connect Wallet"
    >
      <div
        className="w-full max-w-[375px] animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        <section className="w-full rounded-t-[20px] bg-[#2a2a2a] text-white shadow-[0px_2px_4px_#00000005]">
          {/* Header */}
          <header className="relative px-6 pt-8 pb-6 text-center">
            <h1 className="[font-family:'Helvetica-Bold',Helvetica] text-[16.7px] font-bold leading-5 tracking-[0] text-white">
              Connect Wallet
            </h1>
          </header>

          <div className="px-6 pb-6">
            {/* Family button */}
            <Button
              type="button"
              onClick={handleFamily}
              disabled={connecting !== null}
              className="h-auto w-full rounded-2xl bg-[#19c6c9] px-4 py-[14px] text-white hover:bg-[#19c6c9]/90 disabled:opacity-70 transition-all"
            >
              <span className="flex items-center justify-center gap-3">
                {connecting === "Family" ? (
                  <svg className="h-5 w-5 animate-spin text-white" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                  </svg>
                ) : connected === "Family" ? (
                  <svg className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414L8.414 15l-4.121-4.121a1 1 0 011.414-1.414L8.414 12.172l6.879-6.879a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <img
                    className="h-5 w-8 shrink-0"
                    alt="Family"
                    src="https://c.animaapp.com/moo8j8dtP2IfhO/img/margin.svg"
                  />
                )}
                <span className="[font-family:'Helvetica-Bold',Helvetica] text-[15.6px] font-bold leading-6 tracking-[0] text-white">
                  {connected === "Family"
                    ? "Connected!"
                    : connecting === "Family"
                    ? "Connecting..."
                    : "Continue with Family"}
                </span>
              </span>
            </Button>

            {/* Divider */}
            <p className="mt-4 text-center [font-family:'Helvetica-Regular',Helvetica] text-[15px] font-normal leading-[21px] tracking-[0] text-[#ffffff66]">
              or select a wallet from the list below
            </p>

            {/* Wallet grid */}
            <nav aria-label="Wallet providers" className="mt-7">
              <ul className="grid grid-cols-3 items-start gap-x-[31px] px-[12.5px]">
                {walletOptions.map((wallet) => (
                  <li key={wallet.name} className="flex justify-center">
                    <Button
                      type="button"
                      variant="ghost"
                      disabled={connecting !== null}
                      onClick={() => handleConnect(wallet.name)}
                      className="relative h-auto w-20 flex-col items-center rounded-2xl px-1.5 py-px text-white hover:bg-white/5 disabled:opacity-60 transition-all"
                    >
                      <div className="relative h-[60px] w-[60px] flex items-center justify-center">
                        <img
                          className={`h-[60px] w-[60px] transition-opacity ${connecting === wallet.name || connected === wallet.name ? "opacity-50" : ""}`}
                          alt={wallet.alt}
                          src={wallet.src}
                        />
                        {connecting === wallet.name && (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <svg className="h-6 w-6 animate-spin text-white" viewBox="0 0 24 24" fill="none">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                            </svg>
                          </div>
                        )}
                        {connected === wallet.name && (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <svg className="h-6 w-6 text-[#19c6c9]" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414L8.414 15l-4.121-4.121a1 1 0 011.414-1.414L8.414 12.172l6.879-6.879a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                        )}
                      </div>
                      <span className="pt-2.5 [font-family:'Helvetica-Regular',Helvetica] text-[13px] font-normal leading-[15px] tracking-[0] text-white opacity-75">
                        {connected === wallet.name ? "Connected!" : wallet.name}
                      </span>
                    </Button>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Info card */}
            <Card className="mt-8 rounded-3xl border-0 bg-[#333333] shadow-none">
              <CardContent className="space-y-5 px-6 pt-6 pb-4">
                <div className="space-y-1.5">
                  <h2 className="[font-family:'Helvetica-Bold',Helvetica] text-[16.5px] font-bold leading-5 tracking-[0] text-white">
                    What is a wallet?
                  </h2>
                  <p className="max-w-[279px] [font-family:'Helvetica-Regular',Helvetica] text-base font-normal leading-[21px] tracking-[0] text-[#ffffff66]">
                    Wallets are used to send, receive, and store digital assets.
                    Connecting a wallet lets you interact with apps.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {footerActions.map((action) => (
                    <Button
                      key={action}
                      type="button"
                      className="h-auto rounded-2xl bg-[#424242] px-4 py-3 [font-family:'Helvetica-Regular',Helvetica] text-[17px] font-normal leading-6 tracking-[0] text-white hover:bg-[#4e4e4e] transition-colors"
                    >
                      {action}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export const Actualmodal = ConnectWalletModal;
