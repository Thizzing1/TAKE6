import PropTypes from "prop-types";
import React, { useRef, useEffect } from "react";
import { CentrifugeLogoOn } from "../CentrifugeLogoOn";
import { ConsensysTrustedBy } from "../ConsensysTrustedBy";
import { FireBlocksTrustedWrapper } from "../FireBlocksTrustedWrapper";
import { ImgWrapper } from "../ImgWrapper";
import { JpMorganChaseWrapper } from "../JpMorganChaseWrapper";
import { MonetaryOf } from "../MonetaryOf";
import "./style.css";

export const LoopingLogoTrustedByTheBest1440 = ({
  className,
  JPMorganChaseWrapperJpMorganChase,
  monetaryOfMonetaryOf,
  fireBlocksTrustedWrapperFireBlocksTrusted,
  consensysTrustedByConsensysTrustedBy,
  imgWrapperBancoCentralDo,
  centrifugeLogoOnCentrifugeLogoOn,
  override = <JpMorganChaseWrapper className="jp-morgan-chase-trusted-by-the-best-1440" />,
  override1 = <MonetaryOf className="monetary-of-authority-of-singapore-trusted-by-the-best-1440" />,
  override2 = <FireBlocksTrustedWrapper className="fire-blocks-trusted-by-the-best-1440" />,
  override3 = <ConsensysTrustedBy className="consensys-trusted-by-the-best-1440" />,
  override4 = <ImgWrapper className="banco-central-do-brasil-trusted-by-the-best-1440" />,
  override5 = <CentrifugeLogoOn className="centrifuge-logo-on-trusted-by-the-best-1440" />,
  cycleDuration = 89, // Default: 89s (~12.54px/s)
}) => {
  // Define 6 base logos in order; 'width' for CSS, 'renderedWidth' includes gap
  const baseLogos = [
    {
      component: <JpMorganChaseWrapper JPMorganChase={JPMorganChaseWrapperJpMorganChase} className="jp-morgan-chase-trusted-by-the-best-1440" />,
      override,
      name: "JP Morgan",
      width: 165.48,
      renderedWidth: 165.48 + 48,
    },
    {
      component: <MonetaryOf monetaryOf={monetaryOfMonetaryOf} className="monetary-of-authority-of-singapore-trusted-by-the-best-1440" />,
      override: override1,
      name: "Monetary Auth",
      width: 130.07,
      renderedWidth: 130.07 + 48,
    },
    {
      component: <FireBlocksTrustedWrapper fireBlocksTrusted={fireBlocksTrustedWrapperFireBlocksTrusted} className="fire-blocks-trusted-by-the-best-1440" />,
      override: override2,
      name: "Fireblock",
      width: 113.04,
      renderedWidth: 113.04 + 48,
    },
    {
      component: <ConsensysTrustedBy consensysTrustedBy={consensysTrustedByConsensysTrustedBy} className="consensys-trusted-by-the-best-1440" />,
      override: override3,
      name: "Consensys",
      width: 115.77,
      renderedWidth: 115.77 + 48,
    },
    {
      component: <ImgWrapper bancoCentralDo={imgWrapperBancoCentralDo} className="banco-central-do-brasil-trusted-by-the-best-1440" />,
      override: override4,
      name: "Banco Central",
      width: 78.91,
      renderedWidth: 78.91 + 48,
    },
    {
      component: <CentrifugeLogoOn centrifugeLogoOn={centrifugeLogoOnCentrifugeLogoOn} className="centrifuge-logo-on-trusted-by-the-best-1440" />,
      override: override5,
      name: "Centrifuge",
      width: 94.66,
      renderedWidth: 94.66 + 48,
    },
  ];

  // Calculate width for one cycle (6 logos, including gaps, minus last gap)
  const gap = 48;
  const renderedLogoSetWidth = baseLogos.reduce((sum, logo) => sum + logo.renderedWidth, 0) - gap; // 697.93px

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
    document.documentElement.style.setProperty('--logo-set-width-1440', `${renderedLogoSetWidth}px`);

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
    <div className={`looping-logo-trusted-by-the-best-1440 ${className}`} aria-label="Trusted by our partners" ref={wrapperRef}>
      <div
        className="container-77"
        ref={containerRef}
        data-debug="container-77"
        data-cycle-duration={cycleDuration}
        style={{
          width: `${(numLogos * renderedLogoSetWidth) / baseLogos.length}px`,
          animationDuration: `${cycleDuration}s !important`,
        }}
      >
        {allLogos.map((logo, index) => (
          <div
            key={logo.uniqueKey}
            className="container-78"
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

LoopingLogoTrustedByTheBest1440.propTypes = {
  className: PropTypes.string,
  JPMorganChaseWrapperJpMorganChase: PropTypes.string,
  monetaryOfMonetaryOf: PropTypes.string,
  fireBlocksTrustedWrapperFireBlocksTrusted: PropTypes.string,
  consensysTrustedByConsensysTrustedBy: PropTypes.string,
  imgWrapperBancoCentralDo: PropTypes.string,
  centrifugeLogoOnCentrifugeLogoOn: PropTypes.string,
  cycleDuration: PropTypes.number, // New prop for animation duration
};