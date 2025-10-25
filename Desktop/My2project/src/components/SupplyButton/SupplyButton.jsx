import React, { useState, useEffect } from "react";
import "./style.css";

export const SupplyButton = ({ className }) => {
  const [width, setWidth] = useState(
    typeof document !== "undefined" ? document.documentElement.clientWidth : 0
  );

  useEffect(() => {
    const handleResize = () => {
      setWidth(document.documentElement.clientWidth);
    };
    window.addEventListener("resize", handleResize);
    handleResize(); // Initial call to ensure correct width
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getEarnInterestText = () => {
    if (width <= 320) {
      return (
        <>
          Earn interest by
          <br />
          supplying assets
          <br />
          to liquidity pools.
        </>
      );
    } else if (width >= 321 && width <= 375) {
      return (
        <>
          Earn interest by
          <br />
          supplying assets to
          <br />
          liquidity pools.
        </>
      );
    } else if (width >= 376 && width <= 767) {
      return (
        <>
          Earn interest by supplying
          <br />
          assets to liquidity pools.
        </>
      );
    } else {
      // For ≥768px
      return <>Earn interest by supplying assets to liquidity pools.</>;
    }
  };

  return (
    <div className={`supply-button ${className}`}>
      <div className="div" />
      <div className="text-wrapper-2">Supply</div>
      <div className="earn-interest-by-wrapper">
        <p className="earn-interest-by">{getEarnInterestText()}</p>
      </div>
    </div>
  );
};