import PropTypes from "prop-types";
import React, { useRef, useEffect } from "react";
import { BancoCentralDo } from "../BancoCentralDo";
import { CentrifugeLogo } from "../CentrifugeLogo";
import { ConsensysLogo } from "../ConsensysLogo";
import { FireBlockLogo } from "../FireBlockLogo";
import { JpMorganChaseLogo } from "../JpMorganChaseLogo";
import { MonetaryAuthority } from "../MonetaryAuthority";
import "./style.css";

export const LoopingLogoTrusted = ({
  className,
  useTestImage = false,
  testImageSrc = "/img/test-solid-red.png",
  JPMorganChaseLogoJpMorganChase,
  monetaryAuthorityMonetaryAuthority,
  fireBlockLogoFireBlockLogo,
  consensysLogoConsensysLogo,
  bancoCentralDoBancoCentralDo,
  centrifugeLogoRef,
  override = <JpMorganChaseLogo className="JP-morgan-chase-logo-478-trusted-by-the-best-1" />,
  override1 = <MonetaryAuthority className="monetary-authority-of-singapore-logo-478-trusted-by-the-best-1" />,
  override2 = <FireBlockLogo className="fire-block-logo-text" />,
  consensYsLogoRef,
  bancoCentralDoRef,
  centrifugeLogoRef: centrifugeLogoRefProp,
  screenWidth,
  cycleDuration = 89, // Default: 89s desktop (~12.54px/s), 71.2s mobile (~15.67px/s)
}) => {
  // Define 6 base logos in order; 'width' for CSS, 'renderedWidth' for animation
  const baseLogos = [
    { component: <JpMorganChaseLogo JPMorganChaseLogo={useTestImage ? testImageSrc : JPMorganChaseLogoJpMorganChase} className="JP-morgan-chase-logo-478-trusted-by-the-best-1" />, override, name: "JP Morgan", width: 173.53, renderedWidth: 263.285 },
    { component: <MonetaryAuthority monetaryAuthority={useTestImage ? testImageSrc : monetaryAuthorityMonetaryAuthority} className="monetary-authority-of-singapore-logo-478-trusted-by-the-best-1" />, override: override1, name: "Monetary Auth", width: 136.41, renderedWidth: 207.609 },
    { component: <FireBlockLogo fireBlockLogo={useTestImage ? testImageSrc : fireBlockLogoFireBlockLogo} className="fire-block-logo-text" />, override: override2, name: "Fireblock", width: 118.54, renderedWidth: 180.809 },
    { component: <ConsensysLogo consensysLogo={useTestImage ? testImageSrc : consensysLogoConsensysLogo} className="consensys-logo-478-trusted-by-the-best-1" />, override: <ConsensysLogo consensysLogo={useTestImage ? testImageSrc : consensYsLogoRef} className="consensys-logo-478-trusted-by-the-best-1" />, name: "Consensys", width: 121.41, renderedWidth: 185.109 },
    { component: <BancoCentralDo bancoCentralDo={useTestImage ? testImageSrc : bancoCentralDoBancoCentralDo} className="banco-central-do-brasil-logo-478-trusted-by-the-best-1" />, override: <BancoCentralDo bancoCentralDo={useTestImage ? testImageSrc : bancoCentralDoRef} className="banco-central-do-brasil-logo-478-trusted-by-the-best-1" />, name: "Banco Central", width: 82.84, renderedWidth: 127.254 },
    { component: <CentrifugeLogo centrifugeLogo={useTestImage ? testImageSrc : centrifugeLogoRef} className="centrifuge-logo-478-trusted-by-the-best-1" />, override: <CentrifugeLogo centrifugeLogo={useTestImage ? testImageSrc : centrifugeLogoRefProp} className="centrifuge-logo-478-trusted-by-the-best-1" />, name: "Centrifuge", width: 99.27, renderedWidth: 151.898 },
  ];

  // Gap between logos (0px for seamless)
  const gap = 0;

  // Calculate width for one cycle (6 logos)
  const renderedLogoSetWidth = baseLogos.reduce((sum, logo) => sum + logo.renderedWidth + gap, 0) - gap; // 1115.964px

  // Generate 120 logos (20 cycles of 6) for seamless infinite loop
  const numLogos = 120;
  const allLogos = Array.from({ length: numLogos }, (_, index) => ({
    ...baseLogos[index % baseLogos.length],
    uniqueKey: `${baseLogos[index % baseLogos.length].name}-${index}`,
  }));

  const containerRef = useRef(null);
  const wrapperRef = useRef(null);
  // Optimize: Refs only for cycle boundaries
  const logoRefs = useRef(
    Array.from({ length: numLogos }, (_, index) =>
      index % baseLogos.length === 0 || index % baseLogos.length === baseLogos.length - 1 ? React.createRef() : null
    )
  );

  useEffect(() => {
    // Set CSS variable for translation
    document.documentElement.style.setProperty('--logo-set-width', `${renderedLogoSetWidth}px`);

    // Log applied durations
    const mobileDuration = cycleDuration * 0.8;
    console.log(`Animation Duration Set: Desktop=${cycleDuration}s, Mobile=${mobileDuration}s`);

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
    <div className={`looping-logo-trusted ${className}`} aria-label="Trusted by our partners" ref={wrapperRef}>
      <div
        className="container-14"
        ref={containerRef}
        data-debug="container-14"
        data-cycle-duration={cycleDuration} // For debugging
        style={{
          width: `${(numLogos * renderedLogoSetWidth) / baseLogos.length}px`,
          animationDuration: screenWidth < 991 ? `${cycleDuration * 0.8}s !important` : `${cycleDuration}s !important`,
        }}
      >
        {allLogos.map((logo, index) => (
          <div
            key={logo.uniqueKey}
            className="container-15"
            data-logo={logo.name}
            data-debug={`logo-${logo.name}-${index}`}
            data-index={index}
            ref={logoRefs.current[index]}
          >
            {logo.override || logo.component}
          </div>
        ))}
      </div>
      <div
        className="gradient"
        data-debug="gradient"
        style={{ height: screenWidth < 991 ? "126px" : screenWidth < 1440 ? "118px" : "100px", width: "15%" }}
      />
      <div
        className="gradient-2"
        data-debug="gradient-2"
        style={{ height: screenWidth < 991 ? "126px" : screenWidth < 1440 ? "118px" : "100px", width: "15%" }}
      />
    </div>
  );
};

LoopingLogoTrusted.propTypes = {
  className: PropTypes.string,
  useTestImage: PropTypes.bool,
  testImageSrc: PropTypes.string,
  JPMorganChaseLogoJpMorganChase: PropTypes.string,
  monetaryAuthorityMonetaryAuthority: PropTypes.string,
  fireBlockLogoFireBlockLogo: PropTypes.string,
  consensysLogoConsensysLogo: PropTypes.string,
  bancoCentralDoBancoCentralDo: PropTypes.string,
  centrifugeLogoRef: PropTypes.string,
  consensYsLogoRef: PropTypes.string,
  bancoCentralDoRef: PropTypes.string,
  screenWidth: PropTypes.number,
  cycleDuration: PropTypes.number,
};