import { useEffect, useState } from "react";

export function useWindowWidth() {
  const [screenWidth, setScreenWidth] = useState(document.documentElement.clientWidth);

  useEffect(() => {
    function handleResize() {
      const newWidth = document.documentElement.clientWidth;
      setScreenWidth(newWidth);
    }

    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
    };
  }, []);

  return screenWidth;
}