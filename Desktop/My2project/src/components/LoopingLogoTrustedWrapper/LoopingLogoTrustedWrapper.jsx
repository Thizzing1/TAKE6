import PropTypes from "prop-types";
import React, { useRef, useEffect } from "react";
import { BancoCentralDoWrapper } from "../BancoCentralDoWrapper";
import { CentrifugeLogoWrapper } from "../CentrifugeLogoWrapper";
import { ConsensysLogoWrapper } from "../ConsensysLogoWrapper";
import { FireBlocksTrusted } from "../FireBlocksTrusted";
import { JpMorganChase } from "../JpMorganChase";
import { MonetaryAuthorityWrapper } from "../MonetaryAuthorityWrapper";
import "./style.css";

export const LoopingLogoTrustedWrapper = ({
  className,
  JPMorganChaseJpMorganChase,
  monetaryAuthorityWrapperMonetaryAuthority,
  fireBlocksTrustedFireBlocksTrusted,
  consensysLogoWrapperConsensysLogo,
  bancoCentralDoWrapperBancoCentralDo,
  centrifugeLogoWrapperCentrifugeLogo,
  override = <JpMorganChase className="jp-morgan-chase-trusted-by-the-best-991" />,
  override1 = <MonetaryAuthorityWrapper className="monetary-authority-of-singapore-trusted-by-the-best-991" />,
  override2 = <FireBlocksTrusted className="fire-blocks-trusted-by-the-best-991" />,
  override3 = <ConsensysLogoWrapper className="consensys-logo-trusted-by-the-best-991" />,
  override4 = <BancoCentralDoWrapper className="banco-central-do-brasil-logo-trusted-by-the-best-991" />,
  override5 = <CentrifugeLogoWrapper className="centrifuge-logo-trusted-by-the-best-991" />,
  cycleDuration = 89, // Default: 89s (~12.54px/s)
}) => {
  // Define 6 base logos in order; 'width' for CSS, 'renderedWidth' includes gap
  const baseLogos = [
    {
      component: <JpMorganChase JPMorganChase={JPMorganChaseJpMorganChase} className="jp-morgan-chase-trusted-by-the-best-991" />,
      override,
      name: "JP Morgan",
      width: 143.91,
      renderedWidth: 143.91 + 48, // Include 48px gap
    },
    {
      component: <MonetaryAuthorityWrapper monetaryAuthority={monetaryAuthorityWrapperMonetaryAuthority} className="monetary-authority-of-singapore-trusted-by-the-best-991" />,
      override: override1,
      name: "Monetary Auth",
      width: 113.11,
      renderedWidth: 113.11 + 48,
    },
    {
      component: <FireBlocksTrusted fireBlocksTrusted={fireBlocksTrustedFireBlocksTrusted} className="fire-blocks-trusted-by-the-best-991" />,
      override: override2,
      name: "Fireblock",
      width: 98.29,
      renderedWidth: 98.29 + 48,
    },
    {
      component: <ConsensysLogoWrapper consensysLogo={consensysLogoWrapperConsensysLogo} className="consensys-logo-trusted-by-the-best-991" />,
      override: override3,
      name: "Consensys",
      width: 100.67,
      renderedWidth: 100.67 + 48,
    },
    {
      component: <BancoCentralDoWrapper bancoCentralDo={bancoCentralDoWrapperBancoCentralDo} className="banco-central-do-brasil-logo-trusted-by-the-best-991" />,
      override: override4,
      name: "Banco Central",
      width: 68.69,
      renderedWidth: 68.69 + 48,
    },
    {
      component: <CentrifugeLogoWrapper centrifugeLogo={centrifugeLogoWrapperCentrifugeLogo} className="centrifuge-logo-trusted-by-the-best-991" />,
      override: override5,
      name: "Centrifuge",
      width: 82.31,
      renderedWidth: 82.31 + 48,
    },
  ];

  // Calculate width for one cycle (6 logos, including gaps, minus last gap)
  const gap = 48;
  const renderedLogoSetWidth = baseLogos.reduce((sum, logo) => sum + logo.renderedWidth, 0) - gap; // 607.98px

  // Generate 120 logos (20 cycles of 6) for seamless infinite loop
  const numLogos = 120;
  const allLogos = Array.from({ length: numLogos }, (_, index) => ({
    ...baseLogos[index % baseLogos.length],
    uniqueKey: `${baseLogos[index % baseLogos.length].name}-${index}`,
  }));

  const containerRef = useRef(null);
  const wrapperRef = useRef(null);
  // Refs for cycle boundaries
  const logoRefs = useRef(
    Array.from({ length: numLogos }, (_, index) =>
      index % baseLogos.length === 0 || index % baseLogos.length === baseLogos.length - 1 ? React.createRef() : null
    )
  );

  useEffect(() => {
    // Set CSS variable for translation
    document.documentElement.style.setProperty('--logo-set-width-991', `${renderedLogoSetWidth}px`);

    // Log applied duration
    console.log(`Animation Duration Set: ${cycleDuration}s`);

    // Debug positions and animation
    const logPositions = () => {
      if (wrapperRef.current) {
        const wrapperRect = wrapperRef.current.getBoundingClientRect();
        console.log(`Wrapper: x=${wrapperRect.x}, width=${wrapperRect.width}, overflow=${window.getComputedStyle(wrapperRef.current).overflow}, computedWidth=${window.getComputedStyle(wrapperRef.current).width}`);
      }
      if (containerRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const computedStyle = window.getComputedStyle(containerRef.current);
        console.log(`Container: x=${containerRect.x}, width=${containerRect.width}, computedWidth=${computedStyle.width}, transform=${computedStyle.transform}, animation=${computedStyle.animation}, animationDuration=${computedStyle.animationDuration}, viewportWidth=${window.innerWidth}`);
      }
      const parent = wrapperRef.current?.parentElement;
      if (parent) {
        const parentRect = parent.getBoundingClientRect();
        console.log(`Parent: x=${parentRect.x}, width=${parentRect.width}, overflow=${window.getComputedStyle(parent).overflow}, computedWidth=${window.getComputedStyle(parent).width}, className=${parent.className}`);
      }
      logoRefs.current.forEach((ref, index) => {
        if (ref?.current) {
          const rect = ref.current.getBoundingClientRect();
          console.log(`Logo ${allLogos[index].name} (index=${index}): x=${rect.x}, width=${rect.width}, visible=${rect.x < window.innerWidth && rect.x + rect.width > 0}`);
        }
      });
    };
    logPositions();
    window.addEventListener('resize', logPositions);
    return () => window.removeEventListener('resize', logPositions);
  }, [renderedLogoSetWidth, cycleDuration]);

  return (
    <div className={`looping-logo-trusted-wrapper ${className}`} aria-label="Trusted by our partners" ref={wrapperRef}>
      <div
        className="container-43"
        ref={containerRef}
        data-debug="container-43"
        data-cycle-duration={cycleDuration}
        style={{
          width: `${(numLogos * renderedLogoSetWidth) / baseLogos.length}px`,
          animationDuration: `${cycleDuration}s !important`,
        }}
      >
        {allLogos.map((logo, index) => (
          <div
            key={logo.uniqueKey}
            className="container-44"
            data-logo={logo.name}
            data-debug={`logo-${logo.name}-${index}`}
            data-index={index}
            ref={logoRefs.current[index]}
          >
            {logo.override || logo.component}
          </div>
        ))}
      </div>
      <div className="gradient" data-debug="gradient" style={{ width: "100px" }} />
      <div className="gradient-2" data-debug="gradient-2" style={{ width: "100px" }} />
    </div>
  );
};

LoopingLogoTrustedWrapper.propTypes = {
  className: PropTypes.string,
  JPMorganChaseJpMorganChase: PropTypes.string,
  monetaryAuthorityWrapperMonetaryAuthority: PropTypes.string,
  fireBlocksTrustedFireBlocksTrusted: PropTypes.string,
  consensysLogoWrapperConsensysLogo: PropTypes.string,
  bancoCentralDoWrapperBancoCentralDo: PropTypes.string,
  centrifugeLogoWrapperCentrifugeLogo: PropTypes.string,
  cycleDuration: PropTypes.number, // New prop for animation duration
};