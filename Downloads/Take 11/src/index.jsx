import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { Desktop } from "./screens/Desktop";
import { TabletBig } from "./screens/TabletBig/TabletBig";
import { TabletSmall } from "./screens/TabletSmall/TabletSmall";
import { MobileBig } from "./screens/MobileBig/MobileBig";

import { useMediaQuery } from "./hooks/useMediaQuery";

function App() {
  // ✅ mobile FIRST
  const isMobile = useMediaQuery("(max-width: 430px)");
  const isTabletSmall = useMediaQuery(
    "(min-width: 431px) and (max-width: 768px)"
  );
  const isTabletBig = useMediaQuery(
    "(min-width: 769px) and (max-width: 1024px)"
  );
  const isDesktop = useMediaQuery("(min-width: 1025px)");

  if (isMobile) return <MobileBig />;
  if (isTabletSmall) return <TabletSmall />;
  if (isTabletBig) return <TabletBig />;
  if (isDesktop) return <Desktop />;

  return null; // safety fallback
}

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
