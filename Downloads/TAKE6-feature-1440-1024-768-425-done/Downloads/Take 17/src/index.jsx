import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { Desktop } from "./screens/Desktop";
import { TabletBig } from "./screens/TabletBig/TabletBig";
import { TabletSmall } from "./screens/TabletSmall/TabletSmall";
import { MobileBig } from "./screens/MobileBig/MobileBig";
import { MobileMediumSmall } from "./screens/MobileMediumSmall/MobileMediumSmall";
import { MobileSmall } from "./screens/MobileSmall/MobileSmall";


import { useMediaQuery } from "./hooks/useMediaQuery";

function App() {
  const isVerySmallMobile = useMediaQuery("(max-width: 320px)");           // ≤ 320px
  const isMobileMedium    = useMediaQuery("(min-width: 321px) and (max-width: 375px)"); // 321–375px
  const isMobileBig       = useMediaQuery("(min-width: 376px) and (max-width: 425px)"); // 376–430px
  const isTabletSmall     = useMediaQuery("(min-width: 426px) and (max-width: 768px)");
  const isTabletBig       = useMediaQuery("(min-width: 769px) and (max-width: 1024px)");
  const isDesktop         = useMediaQuery("(min-width: 1025px)");

   if (isVerySmallMobile) return <MobileSmall />;
  if (isMobileMedium)    return <MobileMediumSmall />;
  if (isMobileBig)       return <MobileBig />;
  if (isTabletSmall)     return <TabletSmall />;
  if (isTabletBig)       return <TabletBig />;
  if (isDesktop)         return <Desktop />;

  // Fallback (should almost never happen)
  return null;
}

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
