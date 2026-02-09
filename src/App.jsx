import { Routes, Route, useNavigate } from "react-router-dom";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { Desktop } from "./screens/Desktop";
import { TabletBig } from "./screens/TabletBig/TabletBig";
import { TabletSmall } from "./screens/TabletSmall/TabletSmall";
import { MobileBig } from "./screens/MobileBig/MobileBig";
import { MobileMediumSmall } from "./screens/MobileMediumSmall/MobileMediumSmall";
import { MobileSmall } from "./screens/MobileSmall/MobileSmall";

import { DesktopConnect } from "./screens/DesktopConnect/DesktopConnect";
import { TabletBigConnect } from "./screens/TabletBigConnect/TabletBigConnect";
import { TabletSmallConnect } from "./screens/TabletSmallConnect/TabletSmallConnect";
import { MobileBigConnect } from "./screens/MobileBigConnect/MobileBigConnect";

import { useMediaQuery } from "./hooks/useMediaQuery";

function Homepage() {
  const navigate = useNavigate();
  const handleConnectWalletClick = () => {
    navigate("/connect");
  };

  const isVerySmallMobile = useMediaQuery("(max-width: 320px)");
  const isMobileMedium = useMediaQuery("(min-width: 321px) and (max-width: 375px)");
  const isMobileBig = useMediaQuery("(min-width: 376px) and (max-width: 425px)");
  const isTabletSmall = useMediaQuery("(min-width: 426px) and (max-width: 768px)");
  const isTabletBig = useMediaQuery("(min-width: 769px) and (max-width: 1024px)");
  const isDesktop = useMediaQuery("(min-width: 1025px)");

  if (isVerySmallMobile) return <MobileSmall />;
  if (isMobileMedium) return <MobileMediumSmall />;
  if (isMobileBig) return <MobileBig />;
  if (isTabletSmall) return <TabletSmall />;
  if (isTabletBig) return <TabletBig />;
  if (isDesktop) return <Desktop />;

  return null;
}

// Function to dynamically choose the Connect component
function ConnectRoute() {
  const isMobileBig = useMediaQuery("(min-width: 376px) and (max-width: 425px)");
   const isTabletSmall = useMediaQuery("(min-width: 426px) and (max-width: 768px)");
  const isTabletBig = useMediaQuery("(min-width: 769px) and (max-width: 1024px)");
  const isDesktop = useMediaQuery("(min-width: 1025px)");

  if (isMobileBig) return <MobileBigConnect />;
  if (isTabletSmall) return <TabletSmallConnect />;
  if (isTabletBig) return <TabletBigConnect />;
  if (isDesktop) return <DesktopConnect />;

  // Fallback for other screen sizes
  return <DesktopConnect />;
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/connect" element={<ConnectRoute />} />
    </Routes>
  );
}

export default App;
