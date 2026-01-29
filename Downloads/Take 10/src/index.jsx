import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { Desktop } from "./screens/Desktop";
import { TabletBig } from "./screens/TabletBig/TabletBig";
import { MobileBig } from "./screens/MobileBig/MobileBig";
import { useMediaQuery } from "./hooks/useMediaQuery";

function App() {
  // IMPORTANT: mobile FIRST
  const isMobile = useMediaQuery("(max-width: 430px)");
  const isTablet = useMediaQuery("(min-width: 431px) and (max-width: 1024px)");
  const isDesktop = useMediaQuery("(min-width: 1025px)");

  if (isMobile) return <MobileBig />;
  if (isTablet) return <TabletBig />;
  if (isDesktop) return <Desktop />;

  return null; // safety
}

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <App />
  </StrictMode>
);