import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import { ConnectWalletModal } from "./screens/Actualmodal";
import "/tailwind.css";

function App() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="min-h-screen bg-[#1a1a1a] flex flex-col items-center justify-center gap-6">
      <div className="text-center space-y-2 pointer-events-none select-none">
        <div className="text-white/10 text-6xl font-bold tracking-tight">Web3 App</div>
        <div className="text-white/10 text-sm">Click the button below to open the wallet modal</div>
      </div>

      <button
        onClick={() => setIsOpen(true)}
        className="px-6 py-3 rounded-2xl bg-[#19c6c9] text-white font-bold text-[15px] hover:bg-[#19c6c9]/90 transition-colors shadow-lg"
      >
        Connect Wallet
      </button>

      <ConnectWalletModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
}

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
