import React from "react";
import { useWindowWidth } from "../../breakpoints";
import { AaveByTheNumber } from "../../components/AaveByTheNumber";
import { AaveByTheNumberWrapper } from "../../components/AaveByTheNumberWrapper";
import { BrandFooter } from "../../components/BrandFooter";
import { ComponentFalse } from "../../components/ComponentFalse";
import { ComponentFalseWrapper } from "../../components/ComponentFalseWrapper";
import { ContactFooter } from "../../components/ContactFooter";
import { DefiUnlocked } from "../../components/DefiUnlocked";
import { DefiUnlocked1440 } from "../../components/DefiUnlocked1440";
import { DefiUnlockedUnder } from "../../components/DefiUnlockedUnder";
import { DefiUnlockedUnderTheFirstOne1440 } from "../../components/DefiUnlockedUnderTheFirstOne1440";
import { DefiUnlockedUnderWrapper } from "../../components/DefiUnlockedUnderWrapper";
import { DefiUnlockedWrapper } from "../../components/DefiUnlockedWrapper";
import { DivWrapper } from "../../components/DivWrapper";
import { DocumentationFooter } from "../../components/DocumentationFooter";
import { Faq } from "../../components/Faq";
import { FaqContainer } from "../../components/FaqContainer";
import { FaqContainerWrapper } from "../../components/FaqContainerWrapper";
import { FaqFooter } from "../../components/FaqFooter";
import { GetStarted } from "../../components/GetStarted";
import { GhoContainer } from "../../components/GhoContainer";
import { GhoContainer1440 } from "../../components/GhoContainer1440";
import { GhoContainerWrapper } from "../../components/GhoContainerWrapper";
import { GoToForumInside } from "../../components/GoToForumInside";
import { Governance } from "../../components/Governance";
import { GradientInThe } from "../../components/GradientInThe";
import { GradientInTheFooter4ThMostObviousLeast } from "../../components/GradientInTheFooter4ThMostObviousLeast";
import { GradientInTheWrapper } from "../../components/GradientInTheWrapper";
import { HelpSupport } from "../../components/HelpSupport";
import { HelpSupportFooter } from "../../components/HelpSupportFooter";
import { IntroductionAave } from "../../components/IntroductionAave";
import { LearnMore } from "../../components/LearnMore";
import { LoopingLogoTrusted } from "../../components/LoopingLogoTrusted";
import { LoopingLogoTrustedByTheBest1440 } from "../../components/LoopingLogoTrustedByTheBest1440";
import { LoopingLogoTrustedWrapper } from "../../components/LoopingLogoTrustedWrapper";
import { NavBar } from "../../components/NavBar";
import { NavBarDevelopers } from "../../components/NavBarDevelopers";
import { NavBarIncludes } from "../../components/NavBarIncludes";
import { NavBarProducts } from "../../components/NavBarProducts";
import { NavBarResources } from "../../components/NavBarResources";
import { OpenAppButton } from "../../components/OpenAppButton";
import { PrivacyPolicy } from "../../components/PrivacyPolicy";
import { SecurityFooter } from "../../components/SecurityFooter";
import { SeeMore } from "../../components/SeeMore";
import { SubscribeButton } from "../../components/SubscribeButton";
import { SupplyAndBorrow } from "../../components/SupplyAndBorrow";
import { SupplyBorrow } from "../../components/SupplyBorrow";
import { SupplyBorrowAt } from "../../components/SupplyBorrowAt";
import { TechnicalPaper } from "../../components/TechnicalPaper";
import { TermsOfUseFooter } from "../../components/TermsOfUseFooter";
import { TermsOfUseFooterWrapper } from "../../components/TermsOfUseFooterWrapper";
import { VariantHover } from "../../components/VariantHover";
import { VariantHoverWrapper } from "../../components/VariantHoverWrapper";
import { AaveLogoFooter6 } from "../../icons/AaveLogoFooter6";
import { BancoCentralDoBrasilLogoTrustedByTheBest991_4 } from "../../icons/BancoCentralDoBrasilLogoTrustedByTheBest991_4";
import { BancoCentralDoBrasilTrustedByTheBest1440_4 } from "../../icons/BancoCentralDoBrasilTrustedByTheBest1440_4";
import { BrandNameAaveLogo4 } from "../../icons/BrandNameAaveLogo4";
import { BugBounty1 } from "../../icons/BugBounty1";
import { BugBounty991_1 } from "../../icons/BugBounty991_1";
import { BugBounty1440_1 } from "../../icons/BugBounty1440_1";
import { CentrifugeLogoTrustedByTheBest991_4 } from "../../icons/CentrifugeLogoTrustedByTheBest991_4";
import { CommunityGovernedAnimation5 } from "../../icons/CommunityGovernedAnimation5";
import { ComposabilityAnimation5 } from "../../icons/ComposabilityAnimation5";
import { ConsensysLogoTrustedByTheBest991_4 } from "../../icons/ConsensysLogoTrustedByTheBest991_4";
import { DiscordLogoInFooter5 } from "../../icons/DiscordLogoInFooter5";
import { DiscordLogoInFooter6 } from "../../icons/DiscordLogoInFooter6";
import { DotInside245Collateralisation9 } from "../../icons/DotInside245Collateralisation9";
import { ExtensiveAudit991_1 } from "../../icons/ExtensiveAudit991_1";
import { ExtensiveAudit1440_1 } from "../../icons/ExtensiveAudit1440_1";
import { ExtensiveAuditAnimation478_1 } from "../../icons/ExtensiveAuditAnimation478_1";
import { FireBlockLogoTrustedByTheBest478_4 } from "../../icons/FireBlockLogoTrustedByTheBest478_4";
import { FireBlocksTrustedByTheBest991_4 } from "../../icons/FireBlocksTrustedByTheBest991_4";
import { FireBlocksTrustedByTheBest1440_4 } from "../../icons/FireBlocksTrustedByTheBest1440_4";
import { FiveYearsStrong991_1 } from "../../icons/FiveYearsStrong991_1";
import { FiveYearsStrong1440Component1 } from "../../icons/FiveYearsStrong1440Component1";
import { GithubLogoInTheFooter5 } from "../../icons/GithubLogoInTheFooter5";
import { GovernedAnimation1 } from "../../icons/GovernedAnimation1";
import { GovernedByYouAnimation991_1 } from "../../icons/GovernedByYouAnimation991_1";
import { GovernedByYouAnimation1440_1 } from "../../icons/GovernedByYouAnimation1440_1";
import { HealthFactorAnimationUnderDefi1 } from "../../icons/HealthFactorAnimationUnderDefi1";
import { HealthFactorAnimationUnderDefi478_1 } from "../../icons/HealthFactorAnimationUnderDefi478_1";
import { HealthFactorAnimationUnderDefi991_1 } from "../../icons/HealthFactorAnimationUnderDefi991_1";
import { JpMorganChaseLogo478TrustedByTheBest478_4 } from "../../icons/JpMorganChaseLogo478TrustedByTheBest478_4";
import { JpMorganChaseTrustedByTheBest991_4 } from "../../icons/JpMorganChaseTrustedByTheBest991_4";
import { MeetAaveBlueAnimation478_1 } from "../../icons/MeetAaveBlueAnimation478_1";
import { MeetAaveBlueAnimation1440_991_2 } from "../../icons/MeetAaveBlueAnimation1440_991_2";
import { MeetAaveBlueAnimation1440_991_3 } from "../../icons/MeetAaveBlueAnimation1440_991_3";
import { MonetaryAuthorityOfSingaporeLogoTrustedByTheBest478_4 } from "../../icons/MonetaryAuthorityOfSingaporeLogoTrustedByTheBest478_4";
import { MonetaryAuthorityOfSingaporeTrustedByTheBest991_4 } from "../../icons/MonetaryAuthorityOfSingaporeTrustedByTheBest991_4";
import { NonCustodialWalletAnimation6 } from "../../icons/NonCustodialWalletAnimation6";
import { PurpleRadarCloseToGetStarted4 } from "../../icons/PurpleRadarCloseToGetStarted4";
import { RainbowLikeAnimationCloseToTheGetStarted2 } from "../../icons/RainbowLikeAnimationCloseToTheGetStarted2";
import { RainbowLikeAnimationCloseToTheGetStarted3 } from "../../icons/RainbowLikeAnimationCloseToTheGetStarted3";
import { RainbowLikeAnimationCloseToTheGetStarted478_1 } from "../../icons/RainbowLikeAnimationCloseToTheGetStarted478_1";
import { ShortfallSecured1 } from "../../icons/ShortfallSecured1";
import { ShortfallSecured991_1 } from "../../icons/ShortfallSecured991_1";
import { Transparent991_2 } from "../../icons/Transparent991_2";
import { TransparentAnimation3 } from "../../icons/TransparentAnimation3";
import { TransparentAnimation991_1 } from "../../icons/TransparentAnimation991_1";
import { UnknownLogo2Footer5 } from "../../icons/UnknownLogo2Footer5";
import { UnkownLogo1Footer6 } from "../../icons/UnkownLogo1Footer6";
import { UnusedComponents131 } from "../../icons/UnusedComponents131";
import { UnusedComponents136 } from "../../icons/UnusedComponents136";
import { UnusedComponents139 } from "../../icons/UnusedComponents139";
import { UnusedComponents143 } from "../../icons/UnusedComponents143";
import { UnusedComponents145 } from "../../icons/UnusedComponents145";
import { UnusedComponents146 } from "../../icons/UnusedComponents146";
import { UnusedComponents149 } from "../../icons/UnusedComponents149";
import { UnusedComponents150 } from "../../icons/UnusedComponents150";
import { UnusedComponents160 } from "../../icons/UnusedComponents160";
import { UnusedComponents165 } from "../../icons/UnusedComponents165";
import { UnusedComponents172 } from "../../icons/UnusedComponents172";
import { UnusedComponents177 } from "../../icons/UnusedComponents177";
import { UnusedComponents180 } from "../../icons/UnusedComponents180";
import { UnusedComponents181 } from "../../icons/UnusedComponents181";
import { UnusedComponents183 } from "../../icons/UnusedComponents183";
import { UnusedComponents184 } from "../../icons/UnusedComponents184";
import { UnusedComponents191 } from "../../icons/UnusedComponents191";
import { UnusedComponents209 } from "../../icons/UnusedComponents209";
import { UnusedComponents213 } from "../../icons/UnusedComponents213";
import { UnusedComponents214 } from "../../icons/UnusedComponents214";
import { UnusedComponents215 } from "../../icons/UnusedComponents215";
import { UnusedComponents216 } from "../../icons/UnusedComponents216";
import { UnusedComponents218 } from "../../icons/UnusedComponents218";
import { UnusedComponents219 } from "../../icons/UnusedComponents219";
import { UnusedComponents222 } from "../../icons/UnusedComponents222";
import { Variant24_1 } from "../../icons/Variant24_1";
import { Variant25_1 } from "../../icons/Variant25_1";
import { Variant31_1 } from "../../icons/Variant31_1";
import { Variant36_1 } from "../../icons/Variant36_1";
import { Variant39_1 } from "../../icons/Variant39_1";
import { Variant42_1 } from "../../icons/Variant42_1";
import { Variant44_1 } from "../../icons/Variant44_1";
import { Variant97_1 } from "../../icons/Variant97_1";
import { Variant131_1 } from "../../icons/Variant131_1";
import { Variant132_1 } from "../../icons/Variant132_1";
import { Variant134_1 } from "../../icons/Variant134_1";
import { Variant138_1 } from "../../icons/Variant138_1";
import { XLogoInFooter6 } from "../../icons/XLogoInFooter6";
import "./style.css";

export const ElementLight = () => {
  const screenWidth = useWindowWidth();

  return (
    <div
      className="element-light"
      style={{
        minWidth:
          screenWidth >= 991 && screenWidth < 1440
              ? "991px"
              : screenWidth >= 1440
                ? "1440px"
                : "auto",
      }}
    >
      {screenWidth >= 991 && screenWidth < 1440 && (
        <div className="nav-bar-includes-2">
          <header className="header-3">
            <div className="container-80">
              <a
                className="brand-name-aave-logo-4-wrapper"
                href="http://localhost:5173"
                rel="noopener noreferrer"
                target="_blank"
              >
                <BrandNameAaveLogo4 className="brand-name-aave-logo-4-instance" />
              </a>
            </div>

            <NavBarProducts className="nav-bar-products-instance" />
            <div className="nav-2">
              <OpenAppButton
                className="open-app-button-1440-991-instance"
                href="  http://127.0.0.1:3000"
              />
              <NavBarDevelopers className="nav-bar-developers-instance" />
            </div>
          </header>

          <NavBarResources className="nav-bar-resources-instance" />
        </div>
      )}

      {((screenWidth >= 991 && screenWidth < 1440) || screenWidth < 991) && (
        <div className="main-wrapper">
          <div
            className="main"
            style={{
              minHeight:
                screenWidth >= 991 && screenWidth < 1440
                  ? "619px"
                  : screenWidth < 991
                    ? "956px"
                    : undefined,
            }}
          >
            <div
              className="section"
              style={{
                padding:
                  screenWidth >= 991 && screenWidth < 1440
                    ? "1px 48px 0px"
                    : screenWidth < 991
                      ? "96px 20px 0px"
                      : undefined,
              }}
            >
              <div
                className="container-81"
                style={{
                  width:
                    screenWidth >= 991 && screenWidth < 1440
                      ? "895px"
                      : screenWidth < 991
                        ? "438px"
                        : undefined,
                }}
              >
                <div className="introduction-aave-wrapper">
                  <IntroductionAave
                    className="introduction-aave-new-visual-identity"
                    href="https://aave.com/brand"
                    href1="https://aave.com/brand"
                    href2="https://aave.com/brand"
                  />
                </div>

                <div className="access-the-full-wrapper">
  <div
    className="access-the-full"
    style={{
      fontFamily:
        (screenWidth >= 991 && screenWidth < 1440) || (screenWidth >= 550 && screenWidth < 991)
          ? "'FT Regola Neue-Medium', Helvetica"
          : screenWidth <= 550
          ? "'FT Regola Neue-Medium', Helvetica"
          : "'FT Regola Neue-Medium', Helvetica",
      fontSize:
        screenWidth >= 991 && screenWidth < 1440
          ? "48px"
          : screenWidth >= 550 && screenWidth < 991
          ? "40px" // Slightly reduced to ensure fit (adjust as needed)
          : screenWidth >= 425 && screenWidth <= 550
          ? "40px"
          : screenWidth >= 376 && screenWidth <= 424
          ? "45px"
          : screenWidth < 376
          ? "41px"
          : undefined,
      fontStyle:
        screenWidth <= 550
          ? "var(--aave-com-semantic-heading-1-font-style)"
          : undefined,
      fontWeight:
        screenWidth >= 991 && screenWidth < 1440
          ? "500"
          : screenWidth >= 550 && screenWidth < 991
          ? "500"
          : screenWidth <= 550
          ? "500"
          : undefined,
      letterSpacing:
        (screenWidth >= 991 && screenWidth < 1440) || (screenWidth >= 550 && screenWidth < 991)
          ? "-1.2px"
          : screenWidth <= 550
          ? "-1.5px"
          : undefined,
      lineHeight:
        screenWidth >= 991 && screenWidth < 1440
          ? "55px"
          : screenWidth >= 550 && screenWidth < 991
          ? "48px"
          : screenWidth >= 425 && screenWidth <= 550
          ? "52px"
          : screenWidth >= 376 && screenWidth <= 424
          ? "52px"
          : screenWidth < 376
          ? "50px"
          : undefined,
      whiteSpace:
        screenWidth >= 550 && screenWidth < 991
          ? "nowrap"
          : screenWidth <= 550
          ? "pre-line"
          : "nowrap",
      wordBreak:
        screenWidth <= 550
          ? "keep-all"
          : undefined,
      overflowWrap:
        screenWidth <= 550
          ? "normal"
          : undefined,
      display:
        screenWidth <= 550
          ? "block"
          : undefined,
      minHeight:
        screenWidth <= 550
          ? "110px"
          : undefined,
      textShadow:
        screenWidth < 550 || screenWidth > 1440
          ? "0.7px 0.7px 0 #201c1c"
          : screenWidth >= 550 && screenWidth <= 1440
          ? "0.7px 0.7px 0 #201c1c"
          : undefined,
      maxWidth:
        screenWidth <= 550
          ? "100%"
          : screenWidth >= 550 && screenWidth < 991
          ? "100%" // Ensure full width
          : undefined,
      width:
        screenWidth >= 550 && screenWidth < 991
          ? "100%" // Force full width
          : undefined,
      padding:
        screenWidth >= 550 && screenWidth < 991
          ? "0 10px" // Add padding to ensure text fits
          : undefined,
      marginTop:
        screenWidth >= 991 && screenWidth <= 1440
          ? "0px"
          : screenWidth >= 550 && screenWidth < 991
          ? "0px"
          : screenWidth >= 425 && screenWidth < 551
          ? "0px"
          : screenWidth >= 376 && screenWidth <= 424
          ? "0px"
          : screenWidth < 376
          ? "15px"
          : undefined,
    }}
  >
    {(() => {
      // Debugging: Log screenWidth and computed width
      console.log("screenWidth:", screenWidth);

      if (screenWidth >= 550) {
        return <p className="text-wrapper-105">Access the full power of DeFi.</p>; // No <br> for >= 550
      }
      if (screenWidth >= 376 && screenWidth < 550) {
        return (
          <p className="text-wrapper-105">
            Access the full power
            <br />
            of DeFi.
          </p>
        );
      }
      if (screenWidth < 376) {
        return (
          <p className="text-wrapper-105">
            Access the full
            <br />
            power of DeFi.
          </p>
        );
      }
      return <p className="text-wrapper-105">Access the full power of DeFi.</p>;
    })()}
  </div>
</div>
<div className="aave-is-the-world-s-wrapper">
  <p
    className="aave-is-the-world-s"
    style={{
      fontSize:
        screenWidth > 450
          ? "21px" // Increased font size
          : screenWidth >= 376 && screenWidth <= 450
          ? "19px"
          : screenWidth >= 321 && screenWidth <= 375
          ? "20px"
          : "20px",
      lineHeight:
        screenWidth > 450
          ? "32px" // Adjusted for larger font
          : screenWidth >= 376 && screenWidth <= 450
          ? "30px"
          : screenWidth >= 321 && screenWidth <= 375
          ? "30px"
          : "30px",
      letterSpacing:
        screenWidth >= 991 && screenWidth < 1440
          ? "-0.47px"
          : screenWidth >= 550 && screenWidth < 991
          ? "-0.36px"
          : screenWidth < 550
          ? "-0.01px"
          : undefined,
      fontWeight: "500",
      textShadow:
        screenWidth > 450
          ? "1px 1px 2px rgba(0, 0, 0, 0.1)"
          : screenWidth >= 376 && screenWidth <= 450
          ? "1px 1px 1.5px rgba(0, 0, 0, 0.1)"
          : screenWidth >= 321 && screenWidth <= 375
          ? "0.5px 0.5px 1px rgba(0, 0, 0, 0.1)"
          : "0.5px 0.5px 0.5px rgba(0, 0, 0, 0.1)",
      wordBreak: "normal",
      whiteSpace:
        screenWidth > 450
          ? "pre-line" // Respect <br> but prevent wrapping
          : "pre-line", // Maintain for smaller screens
      maxWidth:
        screenWidth > 450
          ? "100%" // Allow more space for larger font
          : undefined,
      overflow: "visible", // Ensure no clipping
    }}
  >
    {screenWidth > 450 ? (
      <>
        Aɑve is the world’s lɑrgest liquidity protocol.
        <br />
        Supply, borrow, swɑp, stɑke ɑnd more.
      </>
    ) : screenWidth >= 376 && screenWidth <= 450 ? (
      <>
        Aave is the world’s lɑrgest liquidity
        <br />
        protocol. Supply, borrow, swɑp, stɑke ɑnd
        <br />
        more.
      </>
    ) : screenWidth >= 321 && screenWidth <= 375 ? (
      <>
        Aɑve is the world’s lɑrgest liquidity
        <br />
        protocol. Supply, borrow, swɑp,
        <br />
        stɑke ɑnd more.
      </>
    ) : (
      <>
        Aɑve is the world’s lɑrgest
        <br />
        liquidity protocol. Supply,
        <br />
        borrow, swɑp, stɑke ɑnd more.
      </>
    )}
  </p>
</div>
 <div className="get-started-wrapper">
                  <GetStarted
                    className="instance-node"
                    href="  http://127.0.0.1:3000"
                    
                    text="Get Started"
                  />
                </div>

                <div className="container-82">
                  <div
                    className="SVG-margin"
                    style={{
                      maxWidth:
                        screenWidth >= 991 && screenWidth < 1440
                          ? "895px"
                          : screenWidth < 991
                            ? "438px"
                            : undefined,
                    }}
                  >
                    <div
                      className="SVG"
                      style={{
                        maxWidth:
                          screenWidth >= 991 && screenWidth < 1440
                            ? "895px"
                            : screenWidth < 991
                              ? "438px"
                              : undefined,
                      }}
                    >
                      <PurpleRadarCloseToGetStarted4 className="purple-radar-close" />
                    </div>
                  </div>

                  <div className="div-3">
      {screenWidth <= 320 ? (
        <p className="billion-of-liquidity">
          <span className="text-wrapper-79">$ 27.91</span>{" "}
          <span className="span">billion</span>
          <span className="text-wrapper-80">
            {" "}
            of liquidity currently <br /> supplied in Aave.
          </span>
        </p>
      ) : screenWidth <= 375 ? (
        <p className="billion-of-liquidity">
          <span className="text-wrapper-79">$ 27.91</span>{" "}
          <span className="span"> billion</span>
          <span className="text-wrapper-80">
            {" "}
            of liquidity currently supplied in <br /> Aave.
          </span>
        </p>
      ) : (
        <>


          <div className="container-83">
            <div className="container-84">
              <div className="text-wrapper-79">$27.91</div>
            </div>
          </div>

          <p className="billion-of-liquidity">
            <span className="span">billion</span>
            <span className="text-wrapper-80">
              {" "}
              of liquidity currently supplied in Aave.
            </span>
          </p>
        </>
      )}
    </div>

                </div>
              </div>

              <div
                className="container-85"
                style={{
                  alignSelf: screenWidth < 991 ? "stretch" : undefined,
                  marginRight:
                    screenWidth >= 991 && screenWidth < 1440
                      ? "-187.00px"
                      : undefined,
                  marginTop:
                    screenWidth >= 991 && screenWidth < 1440
                      ? "-110px"
                      : undefined,
                  padding: screenWidth < 991 ? "64px 0px 0px" : undefined,
                  width:
                    screenWidth >= 991 && screenWidth < 1440
                      ? "1082px"
                      : screenWidth < 991
                        ? "100%"
                        : undefined,
                }}
              >
                {screenWidth >= 701 && screenWidth < 1440 && (
                  <RainbowLikeAnimationCloseToTheGetStarted3 className="rainbow-like" />
                )}

                {screenWidth <= 700 && (
                  <RainbowLikeAnimationCloseToTheGetStarted478_1 className="rainbow-like-animation-close-to-the-get-started-478-1" />
                )}

                <div className="overlay-gradient-wrapper">
                  <div className="overlay-gradient-5" />
                </div>
              </div>
            </div>

            <div
              className="section-2"
              style={{
                padding:
                  screenWidth >= 991 && screenWidth < 1440
                    ? "150px 48px 100px"
                    : screenWidth < 991
                      ? "48px 20px"
                      : undefined,
              }}
            >
              <div
                className="container-86"
                style={{
                  gap:
                    screenWidth >= 991 && screenWidth < 1440
                      ? "12px"
                      : screenWidth < 991
                        ? "11px"
                        : undefined,
                  width:
                    screenWidth >= 991 && screenWidth < 1440
                      ? "895px"
                      : screenWidth < 991
                        ? "438px"
                        : undefined,
                }}
              >
               <div className="heading-23">
  <div
    className="text-wrapper-81"
    style={{
      letterSpacing:
        screenWidth < 991
          ? "-1.20px"
          : screenWidth >= 991 && screenWidth < 1440
            ? "-0.80px"
            : undefined,
      lineHeight:
        screenWidth < 991
          ? "55px"
          : screenWidth >= 991 && screenWidth < 1440
            ? "54px"
            : undefined,
      fontWeight: screenWidth < 991 ? "500" : undefined,
      textShadow: screenWidth < 991 ? "0.5px 0.5px 0 #000" : undefined,
    }}
  >
    Meet Aave.
  </div>
</div>

                <div className="container-87">
                  <p
                    className="text-wrapper-82"
                    style={{
                      fontSize:
                        screenWidth >= 991 && screenWidth < 1440
                          ? "20px"
                          : screenWidth < 991
                            ? "18px"
                            : undefined,
                      lineHeight:
                        screenWidth >= 991 && screenWidth < 1440
                          ? "27px"
                          : screenWidth < 991
                            ? "24.3px"
                            : undefined,
                    }}
                  >
                    Earn interest and borrow assets.
                  </p>
                </div>

                <div
                  className="SVG-wrapper"
                  style={{
                    padding:
                      screenWidth >= 991 && screenWidth < 1440
                        ? "36px 0px 0px"
                        : screenWidth < 991
                          ? "36.99px 0px 0px"
                          : undefined,
                          overflow: screenWidth < 991 ? "visible" : undefined, // Prevent clipping of scaled content
                  }}
                >
                  <div
                    className="meet-aave-blue-wrapper"
                    style={{
                      maxWidth:
                        screenWidth >= 991 && screenWidth < 1440
                          ? "895px"
                          : screenWidth < 991
                            ? "430px"
                            : undefined,
                      width:
                        screenWidth >= 991 && screenWidth < 1440
                          ? "895px"
                          : screenWidth < 991
                            ? "100%"
                            : undefined,
                    }}
                  >
                    {screenWidth >= 991 && screenWidth < 1440 && (
                      <MeetAaveBlueAnimation1440_991_3 className="meet-aave-blue" />
                    )}

                    {screenWidth < 991 && (
                      <MeetAaveBlueAnimation478_1 className="meet-aave-blue-animation-478-1" />
                    )}
                  </div>
                </div>

                {screenWidth >= 991 && screenWidth < 1440 && (
                  <SupplyAndBorrow className="instance-node-2" />
                )}

                {screenWidth < 991 && (
                  <SupplyBorrow className="instance-node-2" />
                )}
              </div>

              <div
                className="horizontal-divider-4"
                style={{
                  top:
                    screenWidth >= 991 && screenWidth < 1440
                      ? "939px"
                      : screenWidth < 991
                        ? "596px"
                        : undefined,
                  width:
                    screenWidth >= 991 && screenWidth < 1440
                      ? "991px"
                      : screenWidth < 991
                        ? "478px"
                        : undefined,
                }}
              />
            </div>

            <div
              className="section-3"
              style={{
                padding:
                  screenWidth >= 991 && screenWidth < 1440
                    ? "100px 48px"
                    : screenWidth < 991
                      ? "48px 20px"
                      : undefined,
              }}
            >
              <div
                className="container-88"
                style={{
                  width:
                    screenWidth >= 991 && screenWidth < 1440
                      ? "895px"
                      : screenWidth < 991
                        ? "438px"
                        : undefined,
                }}
              >
                {screenWidth >= 991 && screenWidth < 1440 && (
                  <AaveByTheNumber
                    className="instance-node-2"
                    componentClassName="aave-by-the-number-instance"
                    frameClassName="aave-by-the-number-991"
                  />
                )}

                {screenWidth < 991 && (
                  <div className="container-89">
                    <div className="container-90">
                    <div className="heading-24">
                      <div className="text-wrapper-83">
                        {screenWidth <= 375 ? (
                          <>
                           Aave by the <br /> numbers.
                         </>
                       ) : (
                            "Aave by the numbers."
                          )}
                      </div>
                    </div>

                    <div className="aave-is-one-of-the-wrapper">
              <p className="aave-is-one-of-the-3" key={Math.floor(screenWidth)}>
                {(() => {
                  const flooredWidth = Math.floor(screenWidth);
                  console.log('Paragraph rendering - screenWidth:', screenWidth, 'flooredWidth:', flooredWidth);

                  if (flooredWidth >= 768) {
                    console.log('Applying >= 768px format');
                    return (
                      <>
                        Aave is one of the largest DeFi protocols with billions of dollars in weekly volume across <br /> Ethereum and 12+ networks.
                      </>
                    );
                  }
                  if (flooredWidth <= 320) {
                    console.log('Applying <= 320px format');
                    return (
                      <>
                        Aave is one of the largest DeFi <br /> protocols with billions of dollars in <br /> weekly volume across Ethereum <br /> and 12+ networks.
                      </>
                    );
                  }
                  if (flooredWidth <= 375) {
                    console.log('Applying <= 375px format');
                    return (
                      <>
                        Aave is one of the largest DeFi protocols <br /> with billions of dollars in weekly volume <br /> across Ethereum and 12+ networks.
                      </>
                    );
                  }
                  if (flooredWidth <= 425) {
                    console.log('Applying <= 425px format');
                    return (
                      <>
                        Aave is one of the largest DeFi protocols with <br /> billions of dollars in weekly volume across <br /> Ethereum and 12+ networks.
                      </>
                    );
                  }
                  console.log('Applying default (425 < screenWidth < 768) format');
                  return (
                    <>
                      Aave is one of the largest DeFi protocols with billions of dollars in weekly volume across <br /> Ethereum and 12+ networks.
                    </>
                  );
                })()}
              </p>
            </div>
          </div>
                    <div className="container-91">
                      <div className="container-92">
                        <div className="background-29">
                          <UnusedComponents184 className="unused-components-3" />
                        </div>

                        <div className="container-93">
        <div className="container-94">
          <div className="text-wrapper-84">$</div>
          <div className="container-95">
            <div className="container-84">
              <div className="text-wrapper-85">27.64</div>
            </div>
          </div>
          <div className="text-wrapper-84">B</div>
        </div>
        <p className="text-wrapper-86">
          {screenWidth > 425 ? (
            <>Net deposits supplied across 14 networks.</>
          ) : screenWidth >= 376 && screenWidth <= 425 ? (
            <>
              Net deposits supplied across 14
              <br />
              networks.
            </>
          ) : screenWidth >= 321 && screenWidth <= 375 ? (
            <>
              Net deposits supplied across
              <br />
              14 networks.
            </>
          ) : (
            <>
              Net deposits supplied
              <br />
              across 14 networks.
            </>
          )}
        </p>
      </div>
    </div>

                      <div className="div-4">
                        <div className="background-29">
                          <UnusedComponents183 className="unused-components-3" />
                        </div>

                        <div className="container-93">
                          <div className="container-94">
                            <div className="text-wrapper-84">$</div>

                            <div className="container-96">
                              <div className="container-84">
                                <div className="text-wrapper-85">190.93</div>
                              </div>
                            </div>

                            <div className="text-wrapper-84">B</div>
                          </div>

                          <div className="text-wrapper-86">
                            Volume, past 30 days.
                          </div>
                        </div>
                      </div>

                      <div className="div-4">
                        <div className="background-30">
                          <div className="frame-3">
                            <div className="overlap-group-4">
                              <div className="group-6">
                                <div className="group-7">
                                  <img
                                    className="group-8"
                                    alt="Group"
                                    src="/img/group-200.png"
                                  />
                                </div>
                              </div>

                              <img
                                className="far-left-sky-blue-3"
                                alt="Far left sky blue"
                                src="/img/far-left-sky-blue-4.png"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="container-97">
        <div className="container-98">
          <div className="container-99">
            <div className="container-84">
              <div className="text-wrapper-85">6.10</div>
            </div>
          </div>
          <div className="text-wrapper-84">%</div>
        </div>
        <div className="container-100">
          <p className="average-stablecoin-2">
            {screenWidth >= 768 ? (
              <>Average stablecoin supply APY Ethereum network, past year.</>
            ) : screenWidth >= 376 && screenWidth <= 425 ? (
              <>
                Average stablecoin supply APY
                <br />
                Ethereum network, past year.
              </>
            ) : screenWidth >= 321 && screenWidth <= 375 ? (
              <>
                Average stablecoin supply
                <br />
                APY Ethereum network, past
                <br />
                year.
              </>
            ) : (
              <>
                Average stablecoin
                <br />
                supply APY Ethereum
                <br />
                network, past year.
              </>
            )}
          </p>
        </div>
      </div>

                      </div>

                      <div className="container-101">
                        <div className="background-31">
                          <div className="middle-blue-wrapper">
                            <img
                              className="middle-blue-3"
                              alt="Middle blue"
                              src="/img/middle-blue-4.png"
                            />
                          </div>
                        </div>

                        <div className="container-97">
                          <div className="container-98">
                            <div className="container-102">
                              <div className="container-84">
                                <div className="text-wrapper-85">8.96</div>
                              </div>
                            </div>

                            <div className="text-wrapper-84">%</div>
                          </div>

                          <div className="container-103">
                          <p className="average-stablecoin-2">
            {screenWidth >= 768 ? (
              <>Average stablecoin borrow APR Ethereum network, past year.</>
            ) : screenWidth >= 376 && screenWidth <= 425 ? (
              <>
                Average stablecoin borrow APR
                <br />
                Ethereum network, past year.
              </>
            ) : screenWidth >= 321 && screenWidth <= 375 ? (
              <>
                Average stablecoin borrow
                <br />
                APR Ethereum network, past
                <br />
                year.
              </>
            ) : (
              <>
                Average stablecoin
                <br />
                borrow APR Ethereum
                <br />
                network, past year.
              </>
            )}
          </p>

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div
                className="horizontal-divider-5"
                style={{
                  top:
                    screenWidth >= 991 && screenWidth < 1440
                      ? "1622px"
                      : screenWidth < 991
                        ? "1754px"
                        : undefined,
                  width:
                    screenWidth >= 991 && screenWidth < 1440
                      ? "991px"
                      : screenWidth < 991
                        ? "478px"
                        : undefined,
                }}
              />
            </div>

            <div
              className="section-4"
              style={{
                padding:
                  screenWidth >= 991 && screenWidth < 1440
                    ? "100px 48px"
                    : screenWidth < 991
                      ? "48px 20px"
                      : undefined,
              }}
            >
              <div
                className="container-104"
                style={{
                  width:
                    screenWidth >= 991 && screenWidth < 1440
                      ? "895px"
                      : screenWidth < 991
                        ? "438px"
                        : undefined,
                }}
              >
                {screenWidth >= 991 && screenWidth < 1440 && (
                  <>
                    <div className="heading-25">
                      <div className="text-wrapper-83">DeFi, unlocked.</div>
                    </div>

                    <DefiUnlockedWrapper
                      className="defi-unlocked-instance"
                      override={
                        <HealthFactorAnimationUnderDefi991_1 className="health-factor-animation-under-defi-991-1" />
                      }
                    />
                    <DefiUnlockedUnderWrapper
                      className="instance-node-2"
                      override={
                        <NonCustodialWalletAnimation6 className="instance-node-3" />
                      }
                      override1={
                        <Transparent991_2 className="instance-node-3" />
                      }
                      override2={
                        <CommunityGovernedAnimation5 className="instance-node-3" />
                      }
                      override3={
                        <ComposabilityAnimation5 className="instance-node-3" />
                      }
                    />
                  </>
                )}

                {screenWidth < 991 && (
                  <>
                    <div className="heading-26">
                      <div className="text-wrapper-83">DeFi, unlocked.</div>
                    </div>

                    <DefiUnlocked
                      className="instance-node-2"
                      override={
                        <HealthFactorAnimationUnderDefi478_1 className="health-factor-animation-under-defi-478-1" />
                      }
                    />
                    <DefiUnlockedUnder
                      className="instance-node-2"
                      override={
                        <NonCustodialWalletAnimation6 className="instance-node-3" />
                      }
                      override1={
                        <TransparentAnimation3 className="instance-node-3" />
                      }
                      override2={
                        <CommunityGovernedAnimation5 className="instance-node-3" />
                      }
                      override3={
                        <ComposabilityAnimation5 className="instance-node-3" />
                      }
                    />
                  </>
                )}
              </div>
            </div>

            <div
              className="section-5"
              style={{
                padding:
                  screenWidth >= 991 && screenWidth < 1440
                    ? "100px 48px"
                    : screenWidth < 991
                      ? "48px 20px"
                      : undefined,
              }}
            >
              {screenWidth >= 991 && screenWidth < 1440 && (
                <GhoContainerWrapper
                  className="instance-node"
                  href="https://aave.com/gho"
                  override={
                    <DotInside245Collateralisation9 className="dot-inside" />
                  }
                  override1={
                    <DotInside245Collateralisation9 className="dot-inside" />
                  }
                />
              )}

              {screenWidth < 991 && (
                <GhoContainer
                  className="instance-node"
                  href="https://aave.com/gho"
                  override={
                    <DotInside245Collateralisation9 className="dot-inside" />
                  }
                  override1={
                    <DotInside245Collateralisation9 className="dot-inside" />
                  }
                />
              )}
            </div>

            <div
              className="section-6"
              style={{
                padding:
                  screenWidth >= 991 && screenWidth < 1440
                    ? "100px 48px"
                    : screenWidth < 991
                      ? "48px 20px"
                      : undefined,
              }}
            >
              <div
                className="container-105"
                style={{
                  gap:
                    screenWidth >= 991 && screenWidth < 1440
                      ? "72px"
                      : screenWidth < 991
                        ? "71.99px"
                        : undefined,
                  width:
                    screenWidth >= 991 && screenWidth < 1440
                      ? "895px"
                      : screenWidth < 991
                        ? "438px"
                        : undefined,
                }}
              >
                <div
                  className="container-106"
                  style={{
                    gap:
                      screenWidth >= 991 && screenWidth < 1440
                        ? "12px"
                        : screenWidth < 991
                          ? "11px"
                          : undefined,
                    padding:
                      screenWidth >= 991 && screenWidth < 1440
                        ? "0px 24px"
                        : undefined,
                  }}
                >
                  <div className="heading-27">
                    <div className="text-wrapper-83"> {screenWidth <= 320 ? (
          <>
            Aave <br /> everywhere.
          </>
        ) : (
          'Aave everywhere.'
        )} </div>
                  </div>

                  <div className="container-107">
                    <p
                      className="text-wrapper-87 x11"
                      style={{
                        fontSize:
                          screenWidth >= 991 && screenWidth < 1440
                            ? "20px"
                            : screenWidth < 991
                              ? "18px"
                              : undefined,
                        lineHeight:
                          screenWidth >= 991 && screenWidth < 1440
                            ? "27px"
                            : screenWidth < 991
                              ? "24.3px"
                              : undefined,
                      }}
                    >
                     {screenWidth <= 320 ? (
              <>
               Join Aave's growing constellation
               <br />
               of builders.
              </>
            ) : screenWidth <= 375 ? (
              <>
               Join Aave's growing constellation of
               <br />
               builders.
              </>
            ) : (
              <>
              Join Aave's growing constellation of builders.
              </>
            )}

                    </p>
                  </div>
                </div>

                <div
                  className="container-108"
                  style={{
                    flexDirection: screenWidth < 991 ? "column" : undefined,
                  }}
                >
                  <div
                    className="container-109"
                    style={{
                      height: screenWidth < 991 ? "289px" : undefined,
                      width:
                        screenWidth >= 991 && screenWidth < 1440
                          ? "292.33px"
                          : screenWidth < 991
                            ? "100%"
                            : undefined,
                    }}
                  >
                    <div
                      className="container-110"
                      style={{
                        height:
                          screenWidth < 991
                            ? "140px"
                            : screenWidth >= 991 && screenWidth < 1440
                              ? "91px"
                              : undefined,
                        width:
                          screenWidth < 991
                            ? "140px"
                            : screenWidth >= 991 && screenWidth < 1440
                              ? "91px"
                              : undefined,
                      }}
                    >
                      <a
                        className="link-2"
                        href="https://www.aavechan.com/"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <div className="container-111">
                          <UnusedComponents160
                            className={`${screenWidth < 991 && "variant-25-1"} ${screenWidth >= 991 && screenWidth < 1440 && "unused-components-4"}`}
                          />
                          <div className="container-112 unique-container-110">
                            <Variant24_1
                              className={`${screenWidth < 991 && "variant-25-1"} ${screenWidth >= 991 && screenWidth < 1440 && "unused-components-4"}`}
                            />
                          </div>
                        </div>
                      </a>
                    </div>

                    <div
                      className="container-113"
                      style={{
                        height:
                          screenWidth >= 991 && screenWidth < 1440
                            ? "91px"
                            : screenWidth < 991
                              ? "140px"
                              : undefined,
                        left:
                          screenWidth >= 991 && screenWidth < 1440
                            ? "100px"
                            : screenWidth < 991
                              ? "149px"
                              : undefined,
                        width:
                          screenWidth >= 991 && screenWidth < 1440
                            ? "91px"
                            : screenWidth < 991
                              ? "140px"
                              : undefined,
                      }}
                    >
                      <a
                        className="link-3"
                        href="https://paladin.vote/"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <div className="container-111">
                          <UnusedComponents160
                            className={`${screenWidth >= 991 && screenWidth < 1440 && "unused-components-4"} ${screenWidth < 991 && "variant-25-1"}`}
                          />
                          <div className="container-112">
                            {screenWidth >= 991 && screenWidth < 1440 && (
                              <UnusedComponents216 className="unused-components-4" />
                            )}

                            {screenWidth < 991 && (
                              <Variant25_1 className="variant-25-1" />
                            )}
                          </div>
                        </div>
                      </a>
                    </div>

                    <div
                      className="container-114"
                      style={{
                        height:
                          screenWidth >= 991 && screenWidth < 1440
                            ? "91px"
                            : screenWidth < 991
                              ? "140px"
                              : undefined,
                        left:
                          screenWidth >= 991 && screenWidth < 1440
                            ? "201px"
                            : screenWidth < 991
                              ? "298px"
                              : undefined,
                        width:
                          screenWidth >= 991 && screenWidth < 1440
                            ? "91px"
                            : screenWidth < 991
                              ? "140px"
                              : undefined,
                      }}
                    >
                      <a
                        className="link-4"
                        href="https://www.tokenlogic.xyz/"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <div className="container-111">
                          <UnusedComponents160
                            className={`${screenWidth >= 991 && screenWidth < 1440 && "unused-components-215"} ${screenWidth < 991 && "variant-25-1"}`}
                          />
                          <div className="container-112 unique-container-114">
                            <Variant131_1
                              className={`${screenWidth >= 991 && screenWidth < 1440 && "unused-components-215"} ${screenWidth < 991 && "variant-25-1"}`}
                            />
                          </div>
                        </div>
                      </a>
                    </div>

                    <div
                      className="container-115"
                      style={{
                        height:
                          screenWidth >= 991 && screenWidth < 1440
                            ? "91px"
                            : screenWidth < 991
                              ? "140px"
                              : undefined,
                        top:
                          screenWidth >= 991 && screenWidth < 1440
                            ? "100px"
                            : screenWidth < 991
                              ? "149px"
                              : undefined,
                        width:
                          screenWidth >= 991 && screenWidth < 1440
                            ? "91px"
                            : screenWidth < 991
                              ? "140px"
                              : undefined,
                      }}
                    >
                      <a
                        className="link-5"
                        href="https://tokenterminal.com/"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <div className="container-111">
                          <UnusedComponents160
                            className={`${screenWidth >= 991 && screenWidth < 1440 && "unused-components-4"} ${screenWidth < 991 && "unused-components-180"}`}
                          />
                          <div className="container-112 unique-container-115">
                            <Variant132_1
                              className={`${screenWidth >= 991 && screenWidth < 1440 && "unused-components-4"} ${screenWidth < 991 && "unused-components-180"}`}
                            />
                          </div>
                        </div>
                      </a>
                    </div>

                    <div
                      className="container-116"
                      style={{
                        height:
                          screenWidth >= 991 && screenWidth < 1440
                            ? "91px"
                            : screenWidth < 991
                              ? "140px"
                              : undefined,
                        left:
                          screenWidth >= 991 && screenWidth < 1440
                            ? "100px"
                            : screenWidth < 991
                              ? "149px"
                              : undefined,
                        top:
                          screenWidth >= 991 && screenWidth < 1440
                            ? "100px"
                            : screenWidth < 991
                              ? "149px"
                              : undefined,
                        width:
                          screenWidth >= 991 && screenWidth < 1440
                            ? "91px"
                            : screenWidth < 991
                              ? "140px"
                              : undefined,
                      }}
                    >
                      <a
                        className="link-6"
                        href="https://instadapp.io/"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <div className="container-111">
                          <UnusedComponents160
                            className={`${screenWidth >= 991 && screenWidth < 1440 && "unused-components-4"} ${screenWidth < 991 && "variant-25-1"}`}
                          />
                          <div className="container-112 unique-container-116">
                            <UnusedComponents191
                              className={`${screenWidth >= 991 && screenWidth < 1440 && "unused-components-4"} ${screenWidth < 991 && "variant-25-1"}`}
                            />
                          </div>
                        </div>
                      </a>
                    </div>

                    <div
                      className="container-117"
                      style={{
                        height:
                          screenWidth >= 991 && screenWidth < 1440
                            ? "91px"
                            : screenWidth < 991
                              ? "140px"
                              : undefined,
                        left:
                          screenWidth >= 991 && screenWidth < 1440
                            ? "201px"
                            : screenWidth < 991
                              ? "298px"
                              : undefined,
                        top:
                          screenWidth >= 991 && screenWidth < 1440
                            ? "100px"
                            : screenWidth < 991
                              ? "149px"
                              : undefined,
                        width:
                          screenWidth >= 991 && screenWidth < 1440
                            ? "91px"
                            : screenWidth < 991
                              ? "140px"
                              : undefined,
                      }}
                    >
                      <a
                        className="link-7"
                        href="https://www.skatechain.org/"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <div className="container-111">
                          <UnusedComponents160
                            className={`${screenWidth >= 991 && screenWidth < 1440 && "unused-components-4"} ${screenWidth < 991 && "variant-25-1"}`}
                          />
                          <div className="container-112 unique-container-117">
                            <Variant134_1
                              className={`${screenWidth >= 991 && screenWidth < 1440 && "unused-components-4"} ${screenWidth < 991 && "variant-25-1"}`}
                            />
                          </div>
                        </div>
                      </a>
                    </div>

                    {screenWidth >= 768 && screenWidth < 1440 && (
                      <>
                        <div className="container-118">
                          <a
                            className="link-8"
                            href="https://messari.io/"
                            rel="noopener noreferrer"
                            target="_blank"
                          >
                            <div className="container-111">
                              <UnusedComponents160 className="unused-components-5" />
                              <div className="container-112">
                                <Variant31_1 className="unused-components-5" />
                              </div>
                            </div>
                          </a>
                        </div>

                        <div className="container-119">
                          <a
                            className="link-9"
                            href="https://dune.com/"
                            rel="noopener noreferrer"
                            target="_blank"
                          >
                            <div className="container-111">
                              <UnusedComponents160 className="unused-components-4" />
                              <div className="container-112">
                                <UnusedComponents213 className="unused-components-4" />
                              </div>
                            </div>
                          </a>
                        </div>

                        <div className="container-120">
                          <a
                            className="link-10"
                            href="https://www.notional.finance/"
                            rel="noopener noreferrer"
                            target="_blank"
                          >
                            <div className="container-111">
                              <UnusedComponents160 className="unused-components-6" />
                              <div className="container-112">
                                <UnusedComponents150 className="unused-components-6" />
                              </div>
                            </div>
                          </a>
                        </div>
                      </>
                    )}
                  </div>

                  <div
                    className="container-121"
                    style={{
                      height: screenWidth < 991 ? "262.81px" : undefined,
                      width:
                        screenWidth >= 991 && screenWidth < 1440
                          ? "292.33px"
                          : screenWidth < 991
                            ? "100%"
                            : undefined,
                    }}
                  >
                    <div
                      className="container-122"
                      style={{
                        flex:
                          screenWidth >= 991 && screenWidth < 1440
                            ? "0 0 auto"
                            : undefined,
                        height: screenWidth <= 768 ? "279px" : undefined,
                      }}
                    >
                      <UnusedComponents165
                        className={`${screenWidth >= 991 && screenWidth < 1440 && "unused-components-219"} ${screenWidth < 991 && "class"}`}
                      />
                      <div className="container-112 unique-container-122 ">
                        {screenWidth >= 991 && screenWidth < 1440 && (
                          <UnusedComponents219 className="unused-components-219" />
                        )}

                        {screenWidth < 991 && (
                          <UnusedComponents181 className="unused-components-181" />
                        )}
                      </div>
                    </div>
                  </div>

                  <div
                    className="container-123"
                    style={{
                      height: screenWidth < 991 ? "289px" : undefined,
                      width:
                        screenWidth >= 991 && screenWidth < 1440
                          ? "292.34px"
                          : screenWidth < 991
                            ? "100%"
                            : undefined,
                    }}
                  >
                    <div
                      className="container-124"
                      style={{
                        height:
                          screenWidth < 991
                            ? "140px"
                            : screenWidth >= 991 && screenWidth < 1440
                              ? "91px"
                              : undefined,
                        width:
                          screenWidth < 991
                            ? "140px"
                            : screenWidth >= 991 && screenWidth < 1440
                              ? "91px"
                              : undefined,
                      }}
                    >
                      <a
                        className="link-11"
                        style={{
                          marginBottom:
                            screenWidth < 991 ? "-0.01px" : undefined,
                        }}
                        href="https://chaoslabs.xyz/"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <div className="container-111">
                          <UnusedComponents160
                            className={`${screenWidth < 991 && "unused-components-7"} ${screenWidth >= 991 && screenWidth < 1440 && "unused-components-4"}`}
                          />
                          <div className="container-112">
                            {screenWidth < 991 && (
                              <UnusedComponents177 className="unused-components-7" />
                            )}

                            {screenWidth >= 991 && screenWidth < 1440 && (
                              <UnusedComponents214 className="unused-components-4" />
                            )}
                          </div>
                        </div>
                      </a>
                    </div>

                    <div
                      className="container-125"
                      style={{
                        height:
                          screenWidth >= 991 && screenWidth < 1440
                            ? "91px"
                            : screenWidth < 991
                              ? "140px"
                              : undefined,
                        left:
                          screenWidth >= 991 && screenWidth < 1440
                            ? "100px"
                            : screenWidth < 991
                              ? "149px"
                              : undefined,
                        width:
                          screenWidth >= 991 && screenWidth < 1440
                            ? "91px"
                            : screenWidth < 991
                              ? "140px"
                              : undefined,
                      }}
                    >
                      <a
                        className="link-12"
                        style={{
                          marginBottom:
                            screenWidth < 991 ? "-0.01px" : undefined,
                        }}
                        href="https://bgdlabs.com/"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <div className="container-111">
                          <UnusedComponents160
                            className={`${screenWidth >= 991 && screenWidth < 1440 && "unused-components-215"} ${screenWidth < 991 && "unused-components-7"}`}
                          />
                          <div className="container-112">
                            {screenWidth >= 991 && screenWidth < 1440 && (
                              <UnusedComponents215 className="unused-components-215" />
                            )}

                            {screenWidth < 991 && (
                              <Variant138_1 className="unused-components-7" />
                            )}
                          </div>
                        </div>
                      </a>
                    </div>

                    <div
                      className="container-126"
                      style={{
                        height:
                          screenWidth >= 991 && screenWidth < 1440
                            ? "91px"
                            : screenWidth < 991
                              ? "140px"
                              : undefined,
                        left:
                          screenWidth >= 991 && screenWidth < 1440
                            ? "201px"
                            : screenWidth < 991
                              ? "298px"
                              : undefined,
                        width:
                          screenWidth >= 991 && screenWidth < 1440
                            ? "91px"
                            : screenWidth < 991
                              ? "140px"
                              : undefined,
                      }}
                    >
                      <a
                        className="link-13"
                        style={{
                          marginBottom:
                            screenWidth < 991 ? "-0.01px" : undefined,
                        }}
                        href="https://defisaver.com/"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <div className="container-111">
                          <UnusedComponents160
                            className={`${screenWidth >= 991 && screenWidth < 1440 && "unused-components-4"} ${screenWidth < 991 && "unused-components-7"}`}
                          />
                          <div className="container-112">
                            {screenWidth >= 991 && screenWidth < 1440 && (
                              <UnusedComponents131 className="unused-components-4" />
                            )}

                            {screenWidth < 991 && (
                              <Variant97_1 className="unused-components-7" />
                            )}
                          </div>
                        </div>
                      </a>
                    </div>

                    <div
                      className="container-127"
                      style={{
                        height:
                          screenWidth >= 991 && screenWidth < 1440
                            ? "91px"
                            : screenWidth < 991
                              ? "140px"
                              : undefined,
                        top:
                          screenWidth >= 991 && screenWidth < 1440
                            ? "100px"
                            : screenWidth < 991
                              ? "149px"
                              : undefined,
                        width:
                          screenWidth >= 991 && screenWidth < 1440
                            ? "91px"
                            : screenWidth < 991
                              ? "140px"
                              : undefined,
                      }}
                    >
                      <a
                        className="link-14"
                        href="https://www.spectra.finance/"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <div className="container-111">
                          <UnusedComponents160
                            className={`${screenWidth >= 991 && screenWidth < 1440 && "unused-components-4"} ${screenWidth < 991 && "unused-components-180"}`}
                          />
                          <div className="container-112">
                            {screenWidth >= 991 && screenWidth < 1440 && (
                              <UnusedComponents218 className="unused-components-4" />
                            )}

                            {screenWidth < 991 && (
                              <UnusedComponents180 className="unused-components-180" />
                            )}
                          </div>
                        </div>
                      </a>
                    </div>

                    <div
                      className="container-128"
                      style={{
                        height:
                          screenWidth >= 991 && screenWidth < 1440
                            ? "91px"
                            : screenWidth < 991
                              ? "140px"
                              : undefined,
                        left:
                          screenWidth >= 991 && screenWidth < 1440
                            ? "100px"
                            : screenWidth < 991
                              ? "149px"
                              : undefined,
                        top:
                          screenWidth >= 991 && screenWidth < 1440
                            ? "100px"
                            : screenWidth < 991
                              ? "149px"
                              : undefined,
                        width:
                          screenWidth >= 991 && screenWidth < 1440
                            ? "91px"
                            : screenWidth < 991
                              ? "140px"
                              : undefined,
                      }}
                    >
                      <a
                        className="link-10"
                        href="https://idle.finance/"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <div className="container-111">
                          <UnusedComponents160
                            className={`${screenWidth >= 991 && screenWidth < 1440 && "unused-components-6"} ${screenWidth < 991 && "unused-components-7"}`}
                          />
                          <div className="container-112 unique-container-112">
                            <UnusedComponents172
                              className={`${screenWidth >= 991 && screenWidth < 1440 && "unused-components-6"} ${screenWidth < 991 && "unused-components-7"}`}
                            />
                          </div>
                        </div>
                      </a>
                    </div>

                    <div
                      className="container-129"
                      style={{
                        height:
                          screenWidth >= 991 && screenWidth < 1440
                            ? "91px"
                            : screenWidth < 991
                              ? "140px"
                              : undefined,
                        left:
                          screenWidth >= 991 && screenWidth < 1440
                            ? "201px"
                            : screenWidth < 991
                              ? "298px"
                              : undefined,
                        top:
                          screenWidth >= 991 && screenWidth < 1440
                            ? "100px"
                            : screenWidth < 991
                              ? "149px"
                              : undefined,
                        width:
                          screenWidth >= 991 && screenWidth < 1440
                            ? "91px"
                            : screenWidth < 991
                              ? "140px"
                              : undefined,
                      }}
                    >
                      <a
                        className="link-15"
                        style={{
                          marginBottom:
                            screenWidth < 991 ? "-0.01px" : undefined,
                        }}
                        href="https://thegraph.com/"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <div className="container-111">
                          <UnusedComponents160
                            className={`${screenWidth >= 991 && screenWidth < 1440 && "unused-components-5"} ${screenWidth < 991 && "unused-components-7"}`}
                          />
                          <div className="container-112  unique-container-112-136">
                            <UnusedComponents136
                              className={`${screenWidth >= 991 && screenWidth < 1440 && "unused-components-5"} ${screenWidth < 991 && "unused-components-7"}`}
                            />
                          </div>
                        </div>
                      </a>
                    </div>

                    {screenWidth >= 768 && screenWidth < 1440 && (
                      <>
                        <div className="container-118 unique-container-118">
                          <a
                            className="link-16"
                            href="https://defillama.com/"
                            rel="noopener noreferrer"
                            target="_blank"
                          >
                            <div className="container-111">
                              <UnusedComponents160 className="unused-components-5" />
                              <div className="container-112">
                                <UnusedComponents222 className="unused-components-5" />
                              </div>
                            </div>
                          </a>
                        </div>

                        <div className="container-119 unique-container-119">
                          <a
                            className="link-10"
                            href="https://www.brahma.fi/"
                            rel="noopener noreferrer"
                            target="_blank"
                          >
                            <div className="container-111">
                              <UnusedComponents160 className="unused-components-6" />
                              <div className="container-112">
                                <UnusedComponents209 className="unused-components-6" />
                              </div>
                            </div>
                          </a>
                        </div>

                        <div className="container-120 unique-container-120">
                          <a
                            className="link-17"
                            href="https://symbiosis.finance/"
                            rel="noopener noreferrer"
                            target="_blank"
                          >
                            <div className="container-111">
                              <UnusedComponents160 className="unused-components-4" />
                              <div className="container-112">
                                <Variant44_1 className="unused-components-4" />
                              </div>
                            </div>
                          </a>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div
              className="section-7"
              style={{
                padding:
                  screenWidth >= 991 && screenWidth < 1440
                    ? "100px 48px"
                    : screenWidth < 991
                      ? "48px 20px"
                      : undefined,
              }}
            >
              <div
                className="container-130"
                style={{
                  gap: screenWidth < 991 ? "1.42e-13px" : undefined,
                  width:
                    screenWidth >= 991 && screenWidth < 1440
                      ? "895px"
                      : screenWidth < 991
                        ? "438px"
                        : undefined,
                }}
              >
                <div
                  className="container-131"
                  style={{
                    gap:
                      screenWidth >= 991 && screenWidth < 1440
                        ? "12px"
                        : screenWidth < 991
                          ? "11.15px"
                          : undefined,
                    padding:
                      screenWidth >= 991 && screenWidth < 1440
                        ? "0px 24px"
                        : undefined,
                  }}
                >
                  <div className="heading-28 unique-heading-28">
                    <div className="text-wrapper-83">
                      {screenWidth <= 320 ? (
              <>
              Trusted by the
                <br />
               best.
              </>
            ) : screenWidth <= 375 ? (
              <>
               Trusted by the
                <br />
               best.
              </>
            ) : (
              <>
                Trusted by the best.
              </>
            )}
          </div>
                  </div>

                  <div className="aave-protocol-has-wrapper">
                    <div
                      className="aave-protocol-has"
                      style={{
                        fontSize:
                          screenWidth >= 991 && screenWidth < 1440
                            ? "20px"
                            : screenWidth < 991
                              ? "18px"
                              : undefined,
                        lineHeight:
                          screenWidth >= 991 && screenWidth < 1440
                            ? "27px"
                            : screenWidth < 991
                              ? "24.3px"
                              : undefined,
                      }}
                    >
                      {screenWidth >= 991 && screenWidth < 1440 && (
                        <p className="text-wrapper-105 x10">
                          Aave Protocol has been trusted by leading institutions
                          and companies.
                        </p>
                      )}

                      {screenWidth < 991 && (
                        <p className="text-wrapper-105">
                {screenWidth <= 320 ? (
              <>
               Aave Protocol has been trusted by
                <br />
               leading institutions and
                <br />
               companies
              </>
            ) : screenWidth <= 375 ? (
              <>
               Aave Protocol has been trusted by
                <br />
               leading institutions and companies
              </>
            ) : screenWidth <= 425 ? (
              <>
               Aave Protocol has been trusted by leading
                <br />
               institutions and companies
              </>
            ) : (
              <>
               Aave Protocol has been trusted by leading institutions and companies
              </>
            )}

                        </p>
                      )}
                    </div>
                  </div>
                </div>

                <div className="container-132">
                  <div
                    className="container-133"
                    style={{
                      height:
                        screenWidth >= 991 && screenWidth < 1440
                          ? "117.89px"
                          : screenWidth < 991
                            ? "125.7px"
                            : undefined,
                      marginRight:
                        screenWidth >= 991 && screenWidth < 1440
                          ? "-895.00px"
                          : screenWidth < 991
                            ? "-1314.00px"
                            : undefined,
                      width:
                        screenWidth >= 991 && screenWidth < 1440
                          ? "1790px"
                          : screenWidth < 991
                            ? "1752px"
                            : undefined,
                    }}
                  >
                    {screenWidth >= 991 && screenWidth < 1440 && (
                      <LoopingLogoTrustedWrapper
                        JPMorganChaseJpMorganChase="/img/jp-morgan-chase-trusted-by-the-best-991-3.png"
                        bancoCentralDoWrapperBancoCentralDo="/img/banco-central-do-brasil-logo-trusted-by-the-best-991-3.png"
                        centrifugeLogoWrapperCentrifugeLogo="/img/centrifuge-logo-trusted-by-the-best-991-3.png"
                        className="looping-logo-trusted-by-the-best-991"
                        consensysLogoWrapperConsensysLogo="/img/consensys-logo-trusted-by-the-best-991-3.png"
                        fireBlocksTrustedFireBlocksTrusted="/img/fire-blocks-trusted-by-the-best-991-3.png"
                        monetaryAuthorityWrapperMonetaryAuthority="/img/monetary-authority-of-singapore-trusted-by-the-best-991-3.png"
                        override={
                          <JpMorganChaseTrustedByTheBest991_4 className="jp-morgan-chase-trusted-by-the-best-991-4" />
                        }
                        override1={
                          <MonetaryAuthorityOfSingaporeTrustedByTheBest991_4 className="monetary-authority-of-singapore-trusted-by-the-best-991-4" />
                        }
                        override2={
                          <FireBlocksTrustedByTheBest991_4 className="fire-blocks-trusted-by-the-best-991-4" />
                        }
                        override3={
                          <ConsensysLogoTrustedByTheBest991_4 className="consensys-logo-trusted-by-the-best-991-4" />
                        }
                        override4={
                          <BancoCentralDoBrasilLogoTrustedByTheBest991_4 className="banco-central-do-brasil-logo-trusted-by-the-best-991-4" />
                        }
                        override5={
                          <CentrifugeLogoTrustedByTheBest991_4 className="centrifuge-logo-trusted-by-the-best-991-4" />
                        }
                      />
                    )}

                    {screenWidth < 991 && (
                      <LoopingLogoTrusted
                        JPMorganChaseLogoJpMorganChaseLogo="/img/jp-morgan-chase-logo-478-trusted-by-the-best-478-3.png"
                        bancoCentralDoBancoCentralDo="/img/banco-central-do-brasil-logo-trusted-by-the-best-478-3.png"
                        bancoCentralDoImg="/img/banco-central-do-brasil-logo-trusted-by-the-best-478-3.png"
                        centrifugeLogoCentrifugeLogo="/img/centrifuge-logo-trusted-by-the-best-478-3.png"
                        centrifugeLogoImg="/img/centrifuge-logo-trusted-by-the-best-478-3.png"
                        className="looping-logo-trusted-by-the-best-478"
                        consensysLogoConsensysLogo="/img/consensys-logo-trusted-by-the-best-478-3.png"
                        consensysLogoImg="/img/consensys-logo-trusted-by-the-best-478-3.png"
                        fireBlockLogoFireBlockLogo="/img/fire-block-logo-trusted-by-the-best-478-3.png"
                        monetaryAuthorityMonetaryAuthority="/img/monetary-authority-of-singapore-logo-trusted-by-the-best-478-3.png"
                        override={
                          <JpMorganChaseLogo478TrustedByTheBest478_4 className="jp-morgan-chase-logo-478-trusted-by-the-best-478-4" />
                        }
                        override1={
                          <MonetaryAuthorityOfSingaporeLogoTrustedByTheBest478_4 className="monetary-authority-of-singapore-logo-trusted-by-the-best-478-4" />
                        }
                        override2={
                          <FireBlockLogoTrustedByTheBest478_4 className="fire-block-logo-trusted-by-the-best-478-4" />
                        }
                      />
                    )}
                  </div>

                  <div
                    className="gradient"
                    style={{
                      height:
                        screenWidth >= 991 && screenWidth < 1440
                          ? "118px"
                          : screenWidth < 991
                            ? "126px"
                            : undefined,
                    }}
                  />

                  <div
                    className="gradient-2"
                    style={{
                      height:
                        screenWidth >= 991 && screenWidth < 1440
                          ? "118px"
                          : screenWidth < 991
                            ? "126px"
                            : undefined,
                      left:
                        screenWidth >= 991 && screenWidth < 1440
                          ? "735px"
                          : screenWidth < 991
                            ? "278px"
                            : undefined,
                    }}
                  />
                </div>
              </div>
            </div>

            <div
              className="section-8"
              style={{
                padding:
                  screenWidth >= 991 && screenWidth < 1440
                    ? "75px 48px"
                    : screenWidth < 991
                      ? "48px 20px"
                      : undefined,
              }}
            >
              <div
                className="background-wrapper"
                style={{
                  width:
                    screenWidth >= 991 && screenWidth < 1440
                      ? "895px"
                      : screenWidth < 991
                        ? "438px"
                        : undefined,
                }}
              >
                <div
                  className="background-32"
                  style={{
                    padding:
                      screenWidth >= 991 && screenWidth < 1440
                        ? "112.44px 64px 112.45px"
                        : screenWidth < 991
                          ? "48px"
                          : undefined,
                  }}
                >
                  {screenWidth >= 991 && screenWidth < 1440 && (
                    <GovernedByYouAnimation991_1 className="governed-by-you" />
                  )}

                  {screenWidth < 991 && (
                    <>
                      <GovernedAnimation1 className="governed-animation" />
                      <div className="heading-margin-4">
                        <div className="overlap-wrapper">
                          <div className="overlap">
                            <div className="overlap-group-5">
                              <div className="governed-by-you-2">
                                Governed by you &
                              </div>

                              <div className="text-wrapper-88">others.</div>
                            </div>

                            <div className="container-134">
                              <div className="container-135">
                                <div className="text-wrapper-89">206,398</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="AAVE-token-holders-wrapper">
                        <p className="AAVE-token-holders">
                        {screenWidth <= 320 ? (
              <>
               AAVE token holders
                <br />
               guide the Aave
                <br />
               Protocol via
                <br />
               procedures, voting,
                <br />
               and smart contract
                <br />
                   execution

              </>
            ) : screenWidth <= 375 ? (
              <>
               AAVE token holders guide
                <br />
               the Aave Protocol via
                <br />
               procedures, voting, and
                <br />
               smart contract execution
              </>
            ) : screenWidth <= 425 ? (
              <>
               AAVE token holders guide the
                <br />
               Aave Protocol via procedures,
                <br />
               voting, and smart contract
                <br />
                     execution
              </>
            ) : (
              <>
               AAVE token holders guide the Aave Protocol via
                <br />
                procedures, voting, and smart contract execution
              </>
            )}

          </p>
                      </div>
                    </>
                  )}

                  <div
                    className="heading-margin-5"
                    style={{
                      padding:
                        screenWidth >= 991 && screenWidth < 1440
                          ? "16px 0px"
                          : screenWidth < 991
                            ? "24px 0px 0px"
                            : undefined,
                    }}
                  >
                    {screenWidth >= 991 && screenWidth < 1440 && (
                      <div className="heading-29">
                        <div className="text-wrapper-90 x14">
                          Governed by you &amp;
                        </div>

                        <div className="container-136">
                          <div className="container-135">
                            <div className="text-wrapper-91 x15">209,482</div>
                          </div>
                        </div>

                        <div className="text-wrapper-90 x13">others.</div>
                      </div>
                    )}

                    {screenWidth < 991 && (
                      <GoToForumInside
                        className="instance-node"
                        href="https://governance.aave.com/"
                        href1="https://governance.aave.com/"
                        text="Go to the Forum"
                      />
                    )}
                  </div>

                  {screenWidth >= 991 && screenWidth < 1440 && (
                    <>
                      <div className="container-137">
                        <p className="AAVE-token-holders-2">
                          AAVE token holders guide the Aave Protocol via
                          <br />
                          procedures, voting, and smart contract execution.
                        </p>
                      </div>

                      <div className="link-margin">
                        <GoToForumInside
                          className="instance-node"
                          href="https://governance.aave.com/"
                          href1="https://governance.aave.com/"
                          text="Go to the Forum"
                        />
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>

            <div
              className="section-9"
              style={{
                padding:
                  screenWidth >= 991 && screenWidth < 1440
                    ? "100px 48px"
                    : screenWidth < 991
                      ? "48px 20px"
                      : undefined,
              }}
            >
              <div
                className="container-138"
                style={{
                  width:
                    screenWidth >= 991 && screenWidth < 1440
                      ? "895px"
                      : screenWidth < 991
                        ? "438px"
                        : undefined,
                }}
              >
                <div
                  className="container-139"
                  style={{
                    gap:
                      screenWidth >= 991 && screenWidth < 1440
                        ? "12px"
                        : screenWidth < 991
                          ? "11px"
                          : undefined,
                    padding:
                      screenWidth >= 991 && screenWidth < 1440
                        ? "0px 24px"
                        : undefined,
                  }}
                >
                  <div className="heading-30">
                    <div className="text-wrapper-83">{screenWidth <= 320 ? (
              <>
               Serious
                <br />
               security.
              </>
            ) : (
              <>
               Serious security.
              </>
            )}

          </div>
                  </div>

                  <div
                    className="container-140"
                    style={{
                      maxWidth:
                        screenWidth >= 991 && screenWidth < 1440
                          ? "480px"
                          : screenWidth < 991
                            ? "432px"
                            : undefined,
                    }}
                  >
                    <p
                      className="text-wrapper-92"
                      style={{
                        fontSize:
                          screenWidth >= 991 && screenWidth < 1440
                            ? "20px"
                            : screenWidth < 991
                              ? "18px"
                              : undefined,
                        lineHeight:
                          screenWidth >= 991 && screenWidth < 1440
                            ? "27px"
                            : screenWidth < 991
                              ? "24.3px"
                              : undefined,
                      }}
                    >
                      Peace of mind by design.
                    </p>
                  </div>
                </div>

                <div
                  className="container-141"
                  style={{
                    gap:
                      screenWidth >= 991 && screenWidth < 1440
                        ? "72px"
                        : screenWidth < 991
                          ? "32px"
                          : undefined,
                  }}
                >
                  <div
                    className="background-33"
                    style={{
                      flexDirection: screenWidth < 991 ? "column" : undefined,
                      justifyContent:
                        screenWidth >= 991 && screenWidth < 1440
                          ? "center"
                          : undefined,
                    }}
                  >
                    <div
                      className="extensive-audit-wrapper"
                      style={{
                        alignItems:
                          screenWidth >= 991 && screenWidth < 1440
                            ? "flex-start"
                            : screenWidth < 991
                              ? "center"
                              : undefined,
                        width: screenWidth < 991 ? "100%" : undefined,
                      }}
                    >
                      {screenWidth >= 991 && screenWidth < 1440 && (
                        <ExtensiveAudit991_1 className="extensive-audit" />
                      )}

                      {screenWidth < 991 && (
                        <ExtensiveAuditAnimation478_1 className="instance-node-4" />
                      )}
                    </div>

                    <div
                      className="container-142"
                      style={{
                        flex: screenWidth < 991 ? "0 0 auto" : undefined,
                        marginTop:
                          screenWidth < 991 ? "-8.53e-14px" : undefined,
                        padding:
                          screenWidth >= 991 && screenWidth < 1440
                            ? "39px 48px 40px"
                            : screenWidth < 991
                              ? "31px 32px 32px"
                              : undefined,
                        width:
                          screenWidth >= 991 && screenWidth < 1440
                            ? "447.5px"
                            : screenWidth < 991
                              ? "100%"
                              : undefined,
                      }}
                    >
                      <div className="heading-31">
                        <div className="text-wrapper-93">Extensive Audits</div>
                      </div>

                      <div className="horizontal-divider-6" />

                      <div className="peace-of-mind-wrapper">
                        <div className="div-5">
                          {screenWidth >= 991 && screenWidth < 1440 && (
                            <p className="text-wrapper-105">
                              Peace of mind supported by multiple audits by
                              <br />
                              the world’s leading security firms.
                            </p>
                          )}

                          {screenWidth < 991 && (
                            <p className="text-wrapper-105-f1">
                              {screenWidth <= 320 ? (
              <>
               Peace of mind supported by
                <br />
               multiple audits by the world's
                <br />
               leading security firms.
              </>
            ) : screenWidth <= 375 ? (
              <>
               Peace of mind supported by multiple
                <br />
               audits by the world's leading security
                <br />
               firms.
              </>
            ) : screenWidth <= 425 ? (
              <>
               Peace of mind supported by multiple audits
                <br />
               by the world's leading security firms.
              </>
            ) : (
              <>
              Peace of mind supported by multiple audits by the world's leading security firms.
              </>
            )}

          </p>
                          )}
                        </div>
                      </div>

                      <LearnMore
                        className="instance-node learn-more x16"
                        href="https://aave.com/security"
                        href1="https://aave.com/security"
                        text="Leɑrn More"
                      />
                    </div>
                  </div>

                  <div
                    className="background-34"
                    style={{
                      flexDirection: screenWidth < 991 ? "column" : undefined,
                      justifyContent:
                        screenWidth >= 991 && screenWidth < 1440
                          ? "center"
                          : undefined,
                    }}
                  >
                    <div
                      className="container-143"
                      style={{
                        alignItems:
                          screenWidth >= 991 && screenWidth < 1440
                            ? "flex-start"
                            : screenWidth < 991
                              ? "center"
                              : undefined,
                        backgroundColor:
                          screenWidth < 991 ? "#f7f6f6" : undefined,
                        flex: screenWidth < 991 ? "1" : undefined,
                        flexGrow: screenWidth < 991 ? "1" : undefined,
                        gap:
                          screenWidth >= 991 && screenWidth < 1440
                            ? "24px"
                            : undefined,
                        justifyContent:
                          screenWidth < 991 ? "center" : undefined,
                        padding:
                          screenWidth >= 991 && screenWidth < 1440
                            ? "39px 48px 40px"
                            : undefined,
                        width:
                          screenWidth >= 991 && screenWidth < 1440
                            ? "447.5px"
                            : screenWidth < 991
                              ? "100%"
                              : undefined,
                      }}
                    >
                      {screenWidth >= 991 && screenWidth < 1440 && (
                        <>
                          <div className="heading-32">
                            <div className="text-wrapper-93">Bug Bounty</div>
                          </div>

                          <div className="horizontal-divider-6" />

                          <div className="security-is-a-top-wrapper">
                            <p className="div-5">
                              Security is a top priority. Report vulnerabilities or
                              <br />
                              bugs responsibly and get rewarded.
                            </p>
                          </div>

                          <LearnMore
                            className="instance-node x17"
                            href="https://immunefi.com/bug-bounty/aave/"
                            href1="https://aave.com/gho"
                            text="Learn More"
                          />
                        </>
                      )}

                      {screenWidth < 991 && (
                        <BugBounty1 className="instance-node-4 bug-bounty1" />
                      )}
                    </div>

                    <div
                      className="background-35"
                      style={{
                        backgroundColor:
                          screenWidth >= 991 && screenWidth < 1440
                            ? "#f7f6f6"
                            : undefined,
                        flex:
                          screenWidth >= 991 && screenWidth < 1440
                            ? "1"
                            : screenWidth < 991
                              ? "0 0 auto"
                              : undefined,
                        flexGrow:
                          screenWidth >= 991 && screenWidth < 1440
                            ? "1"
                            : undefined,
                        gap: screenWidth < 991 ? "24px" : undefined,
                        justifyContent:
                          screenWidth >= 991 && screenWidth < 1440
                            ? "center"
                            : undefined,
                        marginTop: screenWidth < 991 ? "-0.01px" : undefined,
                        padding:
                          screenWidth < 991 ? "31px 32px 32px" : undefined,
                        width: screenWidth < 991 ? "100%" : undefined,
                      }}
                    >
                      {screenWidth >= 991 && screenWidth < 1440 && (
                        <BugBounty991_1 className="instance-node-5" />
                      )}

                      {screenWidth < 991 && (
                        <>
                          <div className="heading-33">
                            <div className="text-wrapper-93">Bug Bounty</div>
                          </div>

                          <div className="horizontal-divider-6" />

                          <div className="container-144">
                            <p className="div-5">
                            {screenWidth <= 320 ? (
              <>
               Security is a top priority
                <br />
               Report vulnerabilities or bugs
                <br />
               responsibly and get rewarded
              </>
            ) : screenWidth <= 375 ? (
              <>
               Security is a top priority. Report
                <br />
               vulnerabilities or bugs responsibly and
                <br />
               get rewarded.
              </>
            ) : screenWidth <= 425 ? (
              <>
               Security is a top priority. Report
                <br />
               vulnerabilities or bugs responsibly and get
                <br />
               rewarded.
              </>
            ) : (
              <>
               Security is a top priority. Report vulnerabilities or bugs responsibly and get rewarded.
              </>
            )}

          </p>
                          </div>

                          <ComponentFalse
                            className="instance-node learn-more2"
                            href="https://immunefi.com/bug-bounty/aave/"
                            text="Leɑrn More"
                          />
                        </>
                      )}
                    </div>
                  </div>

                  <div
                    className="background-36"
                    style={{
                      flexDirection: screenWidth < 991 ? "column" : undefined,
                      gap: screenWidth < 991 ? "5.68e-13px" : undefined,
                      justifyContent:
                        screenWidth >= 991 && screenWidth < 1440
                          ? "center"
                          : undefined,
                    }}
                  >
                    <div
                      className="shortfall-secured-wrapper"
                      style={{
                        alignItems:
                          screenWidth >= 991 && screenWidth < 1440
                            ? "flex-start"
                            : screenWidth < 991
                              ? "center"
                              : undefined,
                        width: screenWidth < 991 ? "100%" : undefined,
                      }}
                    >
                      {screenWidth >= 991 && screenWidth < 1440 && (
                        <ShortfallSecured991_1 className="instance-node-5" />
                      )}

                      {screenWidth < 991 && (
                        <ShortfallSecured1 className="instance-node-4" />
                      )}
                    </div>

                    <div
                      className="container-145"
                      style={{
                        flex: screenWidth < 991 ? "0 0 auto" : undefined,
                        padding:
                          screenWidth >= 991 && screenWidth < 1440
                            ? "39px 48px 40px"
                            : screenWidth < 991
                              ? "31px 32px 32px"
                              : undefined,
                        width:
                          screenWidth >= 991 && screenWidth < 1440
                            ? "447.5px"
                            : screenWidth < 991
                              ? "100%"
                              : undefined,
                      }}
                    >
                      <div className="heading-34">
                        <div className="text-wrapper-93">Shortfall Secured</div>
                      </div>

                      <div className="horizontal-divider-6 f1" />

                      <div className="the-aave-protocol-is-wrapper">
                        <p className="div-5">
                        {screenWidth <= 320 ? (
              <>
               The Aave Protocol is secured
                <br />
               with a backstop against
                <br />
               protocol insolvency.
              </>
            ) : screenWidth <= 375 ? (
              <>
               The Aave Protocol is secured with a
                <br />
               backstop against protocol insolvency.
              </>
           ) : screenWidth <= 425 || screenWidth >= 1024 ? (
           <>
             The Aave Protocol is secured with a backstop
             <br />
             against protocol insolvency.
           </>
            ) : (
              <>
               The Aave Protocol is secured with a backstop against protocol insolvency.
              </>
            )}

          </p>
                      </div>

                      <LearnMore
                        className="instance-node f2"
                        href="https://aave.com/help/safety-module"
                        href1="https://aave.com/help/safety-module"
                        text="Leɑrn More"
                      />
                    </div>
                  </div>

                  <div
                    className="background-37"
                    style={{
                      flexDirection: screenWidth < 991 ? "column" : undefined,
                      gap: screenWidth < 991 ? "5.68e-13px" : undefined,
                      justifyContent:
                        screenWidth >= 991 && screenWidth < 1440
                          ? "center"
                          : undefined,
                    }}
                  >
                    <div
                      className="container-146"
                      style={{
                        alignItems: screenWidth < 991 ? "center" : undefined,
                        backgroundColor:
                          screenWidth < 991 ? "#f7f6f6" : undefined,
                        display: screenWidth < 991 ? "flex" : undefined,
                        flex: screenWidth < 991 ? "1" : undefined,
                        flexDirection: screenWidth < 991 ? "column" : undefined,
                        flexGrow: screenWidth < 991 ? "1" : undefined,
                        justifyContent:
                          screenWidth < 991 ? "center" : undefined,
                        width:
                          screenWidth >= 991 && screenWidth < 1440
                            ? "447.5px"
                            : screenWidth < 991
                              ? "100%"
                              : undefined,
                      }}
                    >
                      {screenWidth >= 991 && screenWidth < 1440 && (
                        <>
                          <div className="heading-35">
                            <div className="text-wrapper-94">
                              5 Years Strong
                            </div>
                          </div>

                          <div className="aave-is-leading-the-wrapper">
                            <p className="aave-is-leading-the">
                              Aave is leading the DeFi Renaissance, committed
                              <br />
                              to it’s mission of bringing global finance onchain.
                            </p>
                          </div>

                          <LearnMore
                            className="learn-more-4"
                            href="https://x.com/aave/status/1877044725674398194"
                            href1="https://aave.com/gho"
                            text="Learn More"
                          />
                        </>
                      )}

                      {screenWidth < 991 && (
                        <FiveYearsStrong1440Component1 className="instance-node-4" />
                      )}
                    </div>

                    <div
                      className="background-38"
                      style={{
                        backgroundColor:
                          screenWidth >= 991 && screenWidth < 1440
                            ? "#f7f6f6"
                            : undefined,
                        flex:
                          screenWidth >= 991 && screenWidth < 1440
                            ? "1"
                            : screenWidth < 991
                              ? "0 0 auto"
                              : undefined,
                        flexGrow:
                          screenWidth >= 991 && screenWidth < 1440
                            ? "1"
                            : undefined,
                        gap: screenWidth < 991 ? "24px" : undefined,
                        justifyContent:
                          screenWidth >= 991 && screenWidth < 1440
                            ? "center"
                            : undefined,
                        padding:
                          screenWidth < 991 ? "31px 32px 32px" : undefined,
                        width: screenWidth < 991 ? "100%" : undefined,
                      }}
                    >
                      {screenWidth >= 991 && screenWidth < 1440 && (
                        <FiveYearsStrong991_1 className="instance-node-5" />
                      )}

                      {screenWidth < 991 && (
                        <>
                          <div className="heading-36">
                            <div className="text-wrapper-93">
                              5 Years Strong
                            </div>
                          </div>

                          <div className="horizontal-divider-6 f1T" />

                          <div className="container-147">
                            <p className="div-5">
                            {screenWidth <= 320 ? (
              <>
               Aave is leading the DeFi
                <br />
               Renaissance, committed to it's
                <br />
               mission of bringing global
               <br />
               finance onchain
              </>
            ) : screenWidth <= 375 ? (
              <>
               Aave is leading the DeFi Renaissance,
                <br />
               committed to it's mission of bringing
                <br />
               global finance onchain.
              </>
            ) : screenWidth <= 425 ? (
              <>
               Aave is leading the DeFi Renaissance,
                <br />
               committed to it's mission of bringing global
                <br />
               finance onchain.
              </>
            ) : (
              <>
               Aave is leading the DeFi Renaissance, committed to it's mission of bringing global finance
                <br />
                onchain.
              </>
            )}

          </p>
                          </div>

                          <LearnMore
                            className="instance-node t2"
                            href="https://x.com/aave/status/1877044725674398194"
                            href1="https://aave.com/gho"
                            text="Leɑrn More"
                          />
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="separator p100"
              style={{
                maxWidth:
                  screenWidth >= 991 && screenWidth < 1440
                    ? "891.9px"
                    : screenWidth < 991
                      ? "430.2px"
                      : undefined,
                width:
                  screenWidth >= 991 && screenWidth < 1440
                    ? "891.89px"
                    : screenWidth < 991
                      ? "430.19px"
                      : undefined,
              }}
            />

            <div
              className="section-10"
              style={{
                padding:
                  screenWidth >= 991 && screenWidth < 1440
                    ? "100px 48px"
                    : screenWidth < 991
                      ? "47px 20px 48px"
                      : undefined,
                      
              }}
            >
              <div
                className="container-148"
                style={{
                  width:
                    screenWidth >= 991 && screenWidth < 1440
                      ? "895px"
                      : screenWidth < 991
                        ? "438px"
                        : undefined,
                }}
              >
                {screenWidth >= 991 && screenWidth < 1440 && (
                  <FaqContainerWrapper
                    className="instance-node-2"
                    href="https://aave.com/faq"
                  />
                )}

                {screenWidth < 991 && (
                  <div className="container-149">
                    <div className="heading-37">
                      <div className="text-wrapper-95">FAQs</div>
                    </div>

                    <div className="container-150">
                      <FaqContainer className="instance-node-2" />
                      <SeeMore
                        className="see-more-3"
                        href="https://aave.com/faq"
                        href1="https://aave.com/faq"
                        text="See More"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div
              className="separator-2 p07"
              style={{
                maxWidth:
                  screenWidth >= 991 && screenWidth < 1440
                    ? "891.9px"
                    : screenWidth < 991
                      ? "430.2px"
                      : undefined,
                width:
                  screenWidth >= 991 && screenWidth < 1440
                    ? "891.89px"
                    : screenWidth < 991
                      ? "430.19px"
                      : undefined,
              }}
            />

            <div
              className="section-11"
              style={{
                padding:
                  screenWidth >= 991 && screenWidth < 1440
                    ? "100px 48px"
                    : screenWidth < 991
                      ? "48px 20px"
                      : undefined,
              }}
            >
              <div
                className="container-151"
                style={{
                  width:
                    screenWidth >= 991 && screenWidth < 1440
                      ? "895px"
                      : screenWidth < 991
                        ? "438px"
                        : undefined,
                }}
              >
                <div
                  className="container-152"
                  style={{
                    flexDirection: screenWidth < 991 ? "column" : undefined,
                    gap: screenWidth < 991 ? "1.25e-12px" : undefined,
                  }}
                >
                  <div
                    className="background-39"
                    style={{
                      flex: screenWidth < 991 ? "0 0 auto" : undefined,
                      width:
                        screenWidth >= 991 && screenWidth < 1440
                          ? "298.33px"
                          : screenWidth < 991
                            ? "100%"
                            : undefined,
                    }}
                  >
                    <div className="heading-38">
                      <div className="text-wrapper-93">Stay Updated</div>
                    </div>

                    <div className="be-the-first-to-hear-wrapper">
                      <div className="div-5">
                        {screenWidth >= 991 && screenWidth < 1440 && (
                          <p className="text-wrapper-105">
                            Be the first to hear Aave
                            <br />
                            protocol news.
                          </p>
                        )}

                        {screenWidth < 991 && (
                          <p className="text-wrapper-105 p80">
                            {screenWidth <= 320 ? (
              <>
               Be the first to hear Aave
                <br />
               protocol news.
              </>
            ) : screenWidth <= 375 ? (
              <>
               Be the first to hear Aave 
                <br />
               protocol news.
              </>
            ) :  screenWidth <= 425 ? (
              <>
               Be the first to hear Aave protocol
                <br />
               news.
              </>
            ) : (
              <>
                Be the first to hear Aave protocol news.
              </>
            )}

          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  <div
                    className="background-40"
                    style={{
                      flex: screenWidth < 991 ? "0 0 auto" : undefined,
                      width:
                        screenWidth >= 991 && screenWidth < 1440
                          ? "596.66px"
                          : screenWidth < 991
                            ? "100%"
                            : undefined,
                    }}
                  >
                    <div className="container-153">
                      <div className="label">
                        <div className="container-154">
                          <div className="container-155">
                            <div className="text-wrapper-96">Email</div>
                          </div>

                          <div className="margin-2">
                            <div className="background-41" />
                          </div>
                        </div>
                      </div>

                      <div className="email-newsletter">
                        <div className="input-newsletter">
                          <div
                            className="container-156"
                            style={{
                              padding:
                                screenWidth >= 991 && screenWidth < 1440
                                  ? "0px 222.67px 0px 0px"
                                  : screenWidth < 991
                                    ? "0px 64.01px 0px 0px"
                                    : undefined,
                            }}
                          >
                            <div className="text-wrapper-97">
                              ronnie@aave.com
                            </div>
                          </div>
                        </div>

                        <SubscribeButton
                          className="subscribe-button-footer"
                          text="Subscribe"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="section-12"
              style={{
                gap:
                  screenWidth >= 991 && screenWidth < 1440
                    ? "5.68e-14px"
                    : undefined,
                marginBottom: screenWidth < 991 ? "-165.02px" : undefined,
                padding:
                  screenWidth >= 991 && screenWidth < 1440
                    ? "0px 0px 72px"
                    : screenWidth < 991
                      ? "0px 20px 48px"
                      : undefined,
                width:
                  screenWidth >= 991 && screenWidth < 1440
                    ? "991px"
                    : screenWidth < 991
                      ? "478px"
                      : undefined,
              }}
            >
              <footer
                className="footer"
                style={{
                  gap:
                    screenWidth >= 991 && screenWidth < 1440
                      ? "104px"
                      : screenWidth < 991
                        ? "103.99px"
                        : undefined,
                  padding:
                    screenWidth >= 991 && screenWidth < 1440
                      ? "48px"
                      : screenWidth < 991
                        ? "40px 24px"
                        : undefined,
                }}
              >
                <div
                  className="container-157"
                  style={{
                    flex:
                      screenWidth >= 991 && screenWidth < 1440
                        ? "0 0 auto"
                        : undefined,
                    flexDirection: screenWidth < 991 ? "column" : undefined,
                    gap: screenWidth < 991 ? "48px" : undefined,
                    height: screenWidth < 991 ? "279.19px" : undefined,
                    justifyContent:
                      screenWidth >= 991 && screenWidth < 1440
                        ? "space-between"
                        : undefined,
                  }}
                >
                  <div
                    className="container-158"
                    style={{
                      display:
                        screenWidth >= 991 && screenWidth < 1440
                          ? "inline-flex"
                          : screenWidth < 991
                            ? "flex"
                            : undefined,
                      width: screenWidth < 991 ? "100%" : undefined,
                    }}
                  >
                    <AaveLogoFooter6
                      className="aave-logo-footer"
                      color="#8F8E8E"
                    />
                    <div className="aave-com-provides-wrapper">
                      <div
                        className="aave-com-provides"
                        style={{
                          alignSelf: screenWidth < 991 ? "stretch" : undefined,
                          width:
                            screenWidth >= 991 && screenWidth < 1440
                              ? "fit-content"
                              : undefined,
                        }}
                      >
                        {screenWidth >= 991 && screenWidth < 1440 && (
                          <p className="text-wrapper-105">
                            Aave.com provides information and resources about the fundamentals of the
                            <br />
                            decentralised non-custodial liquidity protocol called the Aave Protocol, comprised of
                            <br />
                             open-source self-executing smart contracts that are deployed on various
                            <br />
                            permissionless public blockchains, such as Ethereum (the "Aave Protocol" or the
                            <br />
                            Potocol"). Aave Labs does not control or operate any version of the Aave Protocol
                            <br />
                             on any blockchain network.
                          </p>
                        )}

                        {screenWidth < 991 && (
                          <p className="text-wrapper-105">
                          {screenWidth <= 320 ? (
              <>
              Aave.com provides information and resources
                <br />
               about the fundamentals of the decentralised
               <br />
               non-custodial liquidity protocol called the
               <br />
               Aave Protocol, comprised of open-source self-
               <br />
               executing smart contracts that are deployed
               <br />
               on various permissionless public blockchains,
               <br />
               such as Ethereum (the "Aave Protocol" or the
               <br />
               "Protocol"). Aave Labs does not control or
                <br />
                operate any version of the Aave Protocol on
                <br />
                 any blockchain network.

              </>
            ) : screenWidth <= 375 ? (
              <>
               Aave.com provides information and resources about the
                <br />
               fundamentals of the decentralised non-custodial liquidity
               <br />
               protocol called the Aave Protocol, comprised of open-
               <br />
               source self-executing smart contracts that are deployed
               <br />
               on various permissionless public blockchains, such as
               <br />
               Ethereum (the "Aave Protocol" or the "Protocol"). Aave
               <br />
               Labs does not control or operate any version of the Aave
               <br />
               Protocol on any blockchain network.
              </>
            ) : screenWidth <= 425 ? (
              <>
               Aave.com provides information and resources about the
                <br />
               fundamentals of the decentralised non-custodial liquidity protocol
               <br />
               called the Aave Protocol, comprised of open-source self-executing
               <br />
               smart contracts that are deployed on various permissionless public
               <br />
               blockchains, such as Ethereum (the "Aave Protocol" or the
               <br />
               "Protocol"). Aave Labs does not control or operate any version of
               <br />
               the Aave Protocol on any blockchain network.
              </>
            ) : (
              <>
               Aave.com provides information and resources about the fundamentals of the
                <br />
               decentralised non-custodial liquidity protocol called the Aave Protocol, comprised of
               <br />
               open-source self-executing smart contracts that are deployed on various
               <br />
               permissionless public blockchains, such as Ethereum (the "Aave Protocol" or the
               <br />
               "Protocol"). Aave Labs does not control or operate any version of the Aave Protocol on
               <br />
               any blockchain network.
              </>
            )}

          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  <div
                    className="list-wrapper"
                    style={{
                      alignSelf:
                        screenWidth >= 991 && screenWidth < 1440
                          ? "stretch"
                          : undefined,
                      flex: screenWidth < 991 ? "0 0 auto" : undefined,
                      marginBottom: screenWidth < 991 ? "-48.00px" : undefined,
                      width:
                        screenWidth >= 991 && screenWidth < 1440
                          ? "418.48px"
                          : screenWidth < 991
                            ? "390px"
                            : undefined,
                    }}
                  >
                    <div
                      className="list"
                      style={{
                        flexWrap: screenWidth < 991 ? "wrap" : undefined,
                        gap:
                          screenWidth >= 991 && screenWidth < 1440
                            ? "72px"
                            : screenWidth < 991
                              ? "0px 32px"
                              : undefined,
                      }}
                    >
                      <div
                        className="item"
                        style={{
                          alignSelf:
                            screenWidth >= 991 && screenWidth < 1440
                              ? "stretch"
                              : undefined,
                          gap:
                            screenWidth >= 991 && screenWidth < 1440
                              ? "16px"
                              : screenWidth < 991
                                ? "15.99px"
                                : undefined,
                          height: screenWidth < 991 ? "155.19px" : undefined,
                          minWidth:
                            screenWidth >= 991 && screenWidth < 1440
                              ? "91.03px"
                              : screenWidth < 991
                                ? "99.03px"
                                : undefined,
                        }}
                      >
                        <div className="container-159">
                          <div className="text-wrapper-98">Resources</div>
                        </div>

                        <div className="div-4">
                          <div className="item-2">
                            <BrandFooter
                              className="instance-node"
                              href="https://aave.com/brand"
                            />
                          </div>

                          <div className="item-2">
                            <FaqFooter
                              className="instance-node"
                              href="https://aave.com/faq"
                            />
                          </div>

                          <div
                            className="item-3"
                            style={{
                              padding:
                                screenWidth >= 991 && screenWidth < 1440
                                  ? "0px 0px 0.79px"
                                  : screenWidth < 991
                                    ? "0px 0px 0.8px"
                                    : undefined,
                            }}
                          >
                            {screenWidth >= 991 && screenWidth < 1440 && (
                              <HelpSupport
                                className="instance-node"
                                href="https://aave.com/help"
                                href1="https://aave.com/help"
                              />
                            )}

                            {screenWidth < 991 && (
                              <HelpSupportFooter
                                className="instance-node-2"
                                href="https://aave.com/help"
                              />
                            )}

                          </div>

                          <div className="item-2">
                            <VariantHover className="instance-node-6" />
                          </div>
                        </div>
                      </div>

                      <div
                        className="item-4"
                        style={{
                          alignSelf:
                            screenWidth >= 991 && screenWidth < 1440
                              ? "stretch"
                              : undefined,
                          gap:
                            screenWidth >= 991 && screenWidth < 1440
                              ? "16px"
                              : screenWidth < 991
                                ? "15.99px"
                                : undefined,
                          height: screenWidth < 991 ? "155.19px" : undefined,
                          minWidth:
                            screenWidth >= 991 && screenWidth < 1440
                              ? "99.45px"
                              : screenWidth < 991
                                ? "104.83px"
                                : undefined,
                        }}
                      >
                        <div className="container-160">
                          <div className="text-wrapper-98">Developers</div>
                        </div>

                        <div className="div-4">
                          <div className="item-2 p70">
                            <DocumentationFooter
                              className={`${screenWidth >= 991 && screenWidth < 1440 && "class-2"} ${screenWidth < 991 && "instance-node"}`}
                              href="https://aave.com/docs"
                            />
                          </div>

                          <div
                            className="technical-paper-wrapper"
                            style={{
                              padding:
                                screenWidth >= 991 && screenWidth < 1440
                                  ? "0px 0px 0.79px"
                                  : screenWidth < 991
                                    ? "0px 0px 0.8px"
                                    : undefined,
                            }}
                          >
                            <TechnicalPaper
                              className={`${screenWidth >= 991 && screenWidth < 1440 && "class-3"} ${screenWidth < 991 && "instance-node-2"}`}
                              href="https://github.com/aave/aave-v3-core/blob/master/techpaper/Aave_V3_Technical_Paper.pdf"
                            />
                          </div>

                          <div className="item-2 p11">
                            <SecurityFooter
                              className="instance-node"
                              href="https://aave.com/security"
                            />
                          </div>

                          <div className="item-2">
                            <ComponentFalseWrapper className="instance-node-6" />
                          </div>
                        </div>
                      </div>

                      <div
                        className="item-5"
                        style={{
                          alignSelf:
                            screenWidth >= 991 && screenWidth < 1440
                              ? "stretch"
                              : undefined,
                          gap:
                            screenWidth >= 991 && screenWidth < 1440
                              ? "16px"
                              : screenWidth < 991
                                ? "15.99px"
                                : undefined,
                          height: screenWidth < 991 ? "155.19px" : undefined,
                          minWidth:
                            screenWidth >= 991 && screenWidth < 1440
                              ? "84px"
                              : screenWidth < 991
                                ? "91.39px"
                                : undefined,
                        }}
                      >
                        <div className="container-161">
                          <div className="text-wrapper-98">Company</div>
                        </div>

                        {screenWidth < 991 && (
                          <div className="privacy-wrapper">
                            <p className="privacy-2">
                              <a
                                href="https://aave.com/privacy-policy"
                                rel="noopener noreferrer"
                                target="_blank"
                              >
                                <span className="text-wrapper-99 p69">Privacy</span>
                              </a>

                              <span className="text-wrapper-99"> Policy</span>
                            </p>
                          </div>
                        )}

                        <div className="div-4">
                          <div
                            className="item-6"
                            style={{
                              padding:
                                screenWidth >= 991 && screenWidth < 1440
                                  ? "0px 0px 0.79px"
                                  : screenWidth < 991
                                    ? "0px 0px 0.8px"
                                    : undefined,
                            }}
                          >
                            {screenWidth >= 991 && screenWidth < 1440 && (
                              <PrivacyPolicy
                                className="instance-node"
                                href="https://aave.com/privacy-policy"
                                href1="https://aave.com/privacy-policy"
                              />
                            )}

                            {screenWidth < 991 && (
                              <VariantHoverWrapper className="variant-9-hover-false" />
                            )}
                          </div>

                          <div
                            className="item-7 p33"
                            style={{
                              padding:
                                screenWidth >= 991 && screenWidth < 1440
                                  ? "0px 0px 0.79px"
                                  : screenWidth < 991
                                    ? "0px 0px 0.8px"
                                    : undefined,
                            }}
                          >
                            {screenWidth >= 991 && screenWidth < 1440 && (
                              <TermsOfUseFooterWrapper
                                className="instance-node"
                                href="https://aave.com/terms-of-service"
                                href1="https://aave.com/terms-of-service"
                              />
                            )}

                            {screenWidth < 991 && (
                              <TermsOfUseFooter
                                className="instance-node"
                                href="https://aave.com/terms-of-service"
                              />
                            )}
                          </div>

                          <div className="item-2">
                            <ContactFooter className="instance-node" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="container-162">
                  <a
                    className="div-3"
                    href="https://x.com/aave"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <XLogoInFooter6 className="x-logo-in-footer" />
                  </a>

                  <a
                    className="div-3"
                    href="https://discord.com/invite/aave"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {screenWidth >= 991 && screenWidth < 1440 && (
                      <DiscordLogoInFooter5 className="discord-logo-in" />
                    )}

                    {screenWidth < 991 && (
                      <DiscordLogoInFooter6 className="discord-logo-in" />
                    )}
                  </a>

                  <a
                    className="div-3"
                    href="https://hey.xyz/u/aave"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <UnkownLogo1Footer6 className="instance-node-7" />
                  </a>

                  <a
                    className="div-3"
                    href="https://github.com/aave"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <GithubLogoInTheFooter5 className="instance-node-7" />
                  </a>

                  <a
                    className="div-3"
                    href="https://dune.com/aavelabs"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <UnknownLogo2Footer5 className="unknown-logo" />
                  </a>
                </div>
              </footer>

              <div
                className="container-163"
                style={{
                  marginTop: screenWidth < 991 ? "-0.01px" : undefined,
                  width:
                    screenWidth >= 991 && screenWidth < 1440
                      ? "991px"
                      : screenWidth < 991
                        ? "438px"
                        : undefined,
                }}
              >
                <GradientInThe
                  className={`${screenWidth >= 991 && screenWidth < 1440 && "class-6"} ${screenWidth < 991 && "class-7"}`}
                  overlayGradientClassName={`${screenWidth >= 991 && screenWidth < 1440 && "class-4"} ${screenWidth < 991 && "class-5"}`}
                />
                <GradientInTheWrapper
                  className="gradient-in-the-instance"
                  overlayGradientClassName={`${screenWidth >= 991 && screenWidth < 1440 && "class-4"} ${screenWidth < 991 && "class-5"}`}
                />
                <DivWrapper
                  className="gradient-in-the-instance"
                  overlayGradientClassName={`${screenWidth >= 991 && screenWidth < 1440 && "class-4 x20"} ${screenWidth < 991 && "class-5"}`}
                />
                <GradientInTheFooter4ThMostObviousLeast
                  className="gradient-in-the-instance"
                  overlayGradientClassName={`${screenWidth >= 991 && screenWidth < 1440 && "class-4 x21"} ${screenWidth < 991 && "class-5"}`}
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {screenWidth >= 1440 && (
        <>
          <NavBarIncludes
            className="instance-node"
            href="https://app.aave.com/"
          />
          <div className="main-wrapper">
            <div className="main-2">
              <div className="section-13">
                <div className="container-164">
                  <div className="introduction-aave-wrapper">
                    <IntroductionAave
                      className="introduction-aave-new-visual-identity"
                      href="https://aave.com/brand"
                      href1="https://aave.com/brand"
                      href2="https://aave.com/brand"
                    />
                  </div>

                  <div className="heading-39">
                    <p className="text-wrapper-100">
                      Access the full power of DeFi.
                    </p>
                  </div>

                  <div className="aave-is-the-world-s-wrapper">
                    <p className="aave-is-the-world-s-2">
                      Aave is the world’s largest liquidity protocol.
                      <br />
                      Supply, borrow, swap, stake and more.
                    </p>
                  </div>

                  <div className="get-started-wrapper">
                    <GetStarted
                      className="instance-node"
                      href="https://app.aave.com/"
                      href1="https://app.aave.com/"
                      text="Get Started"
                    />
                  </div>

                  <div className="container-82">
                    <div className="SVG-margin-2">
                      <div className="purple-radar-close-wrapper">
                        <PurpleRadarCloseToGetStarted4 className="purple-radar-close" />
                      </div>
                    </div>

                    <div className="div-3">
                      <div className="text-wrapper-79">$</div>

                      <div className="container-83">
                        <div className="container-84">
                          <div className="text-wrapper-79">27.64</div>
                        </div>
                      </div>

                      <p className="billion-of-liquidity">
                        <span className="span">billion</span>

                        <span className="text-wrapper-80">
                          {" "}
                          of liquidity currently supplied in Aave.
                        </span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="container-165">
                  <RainbowLikeAnimationCloseToTheGetStarted2 className="rainbow-like-animation-close-to-the-get-started-2" />
                  <div className="container-166">
                    <div className="overlay-gradient-6" />
                  </div>
                </div>
              </div>

              <div className="section-14">
                <div className="container-167">
                  <div className="heading-40">
                    <div className="text-wrapper-101">Meet Aave.</div>
                  </div>

                  <div className="container-168">
                    <p className="text-wrapper-102">
                      Earn interest and borrow assets.
                    </p>
                  </div>

                  <div className="container-169">
                    <div className="meet-aave-blue-animation-1440-991-2-wrapper">
                      <MeetAaveBlueAnimation1440_991_2 className="meet-aave-blue-animation-1440-991-2" />
                    </div>
                  </div>

                  <SupplyBorrowAt className="instance-node-2" />
                </div>

                <div className="horizontal-divider-7" />
              </div>

              <div className="section-15">
                <AaveByTheNumberWrapper
                  className="instance-node"
                  componentClassName="aave-by-the-number-container-instance"
                  frameClassName="aave-by-the-number-container"
                />
                <div className="horizontal-divider-8" />
              </div>

              <div className="section-15">
                <div className="container-170">
                  <div className="heading-25">
                    <div className="text-wrapper-83">DeFi, unlocked.</div>
                  </div>

                  <DefiUnlocked1440
                    className="defi-unlocked-instance"
                    override={
                      <HealthFactorAnimationUnderDefi1 className="health-factor-animation-under-defi-1" />
                    }
                  />
                  <DefiUnlockedUnderTheFirstOne1440
                    className="instance-node-2"
                    override={
                      <NonCustodialWalletAnimation6 className="instance-node-3" />
                    }
                    override1={
                      <TransparentAnimation991_1 className="instance-node-3" />
                    }
                    override2={
                      <CommunityGovernedAnimation5 className="instance-node-3" />
                    }
                    override3={
                      <ComposabilityAnimation5 className="instance-node-3" />
                    }
                  />
                </div>
              </div>

              <div className="section-15">
                <GhoContainer1440
                  className="instance-node"
                  href="https://aave.com/gho"
                  override={
                    <DotInside245Collateralisation9 className="dot-inside" />
                  }
                />
              </div>

              <div className="section-15">
                <div className="container-171">
                  <div className="container-172">
                    <div className="heading-41">
                      <div className="text-wrapper-83">Aave everywhere.</div>
                    </div>

                    <div className="container-173">
                      <p className="text-wrapper-103">
                        Join Aave’s growing constellation of builders.
                      </p>
                    </div>
                  </div>

                  <div className="container-174">
                    <div className="container-175">
                      <div className="container-176">
                        <a
                          className="link-18"
                          href="https://www.aavechan.com/"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <div className="container-111">
                            <UnusedComponents160 className="unused-components-8" />
                            <div className="container-112">
                              <Variant24_1 className="unused-components-8" />
                            </div>
                          </div>
                        </a>
                      </div>

                      <div className="container-177">
                        <a
                          className="link-19"
                          href="https://paladin.vote/"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <div className="container-111">
                            <UnusedComponents160 className="unused-components-8" />
                            <div className="container-112">
                              <UnusedComponents146 className="unused-components-8" />
                            </div>
                          </div>
                        </a>
                      </div>

                      <div className="container-178">
                        <a
                          className="link-20"
                          href="https://www.tokenlogic.xyz/"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <div className="container-111">
                            <UnusedComponents160 className="unused-components-9" />
                            <div className="container-112">
                              <Variant131_1 className="unused-components-9" />
                            </div>
                          </div>
                        </a>
                      </div>

                      <div className="container-179">
                        <a
                          className="link-21"
                          href="https://tokenterminal.com/"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <div className="container-111">
                            <UnusedComponents160 className="unused-components-10" />
                            <div className="container-112">
                              <Variant132_1 className="unused-components-10" />
                            </div>
                          </div>
                        </a>
                      </div>

                      <div className="container-180">
                        <a
                          className="link-22"
                          href="https://instadapp.io/"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <div className="container-111">
                            <UnusedComponents160 className="unused-components-10" />
                            <div className="container-112">
                              <UnusedComponents191 className="unused-components-10" />
                            </div>
                          </div>
                        </a>
                      </div>

                      <div className="container-181">
                        <a
                          className="link-23"
                          href="https://www.skatechain.org/"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <div className="container-111">
                            <UnusedComponents160 className="unused-components-8" />
                            <div className="container-112">
                              <Variant134_1 className="unused-components-8" />
                            </div>
                          </div>
                        </a>
                      </div>

                      <div className="container-182">
                        <a
                          className="link-24"
                          href="https://messari.io/"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <div className="container-111">
                            <UnusedComponents160 className="unused-components-10" />
                            <div className="container-112">
                              <Variant31_1 className="unused-components-10" />
                            </div>
                          </div>
                        </a>
                      </div>

                      <div className="container-183">
                        <a
                          className="link-25"
                          href="https://dune.com/"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <div className="container-111">
                            <UnusedComponents160 className="unused-components-10" />
                            <div className="container-112">
                              <UnusedComponents143 className="unused-components-10" />
                            </div>
                          </div>
                        </a>
                      </div>

                      <div className="container-184">
                        <a
                          className="link-10"
                          href="https://www.notional.finance/"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <div className="container-111">
                            <UnusedComponents160 className="unused-components-11" />
                            <div className="container-112">
                              <UnusedComponents150 className="unused-components-11" />
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>

                    <div className="container-185">
                      <div className="container-186">
                        <UnusedComponents165 className="unused-components-12" />
                        <div className="container-112">
                          <UnusedComponents149 className="unused-components-12" />
                        </div>
                      </div>
                    </div>

                    <div className="container-175">
                      <div className="container-176">
                        <a
                          className="link-26"
                          href="https://chaoslabs.xyz/"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <div className="container-111">
                            <UnusedComponents160 className="unused-components-8" />
                            <div className="container-112">
                              <Variant36_1 className="unused-components-8" />
                            </div>
                          </div>
                        </a>
                      </div>

                      <div className="container-177">
                        <a
                          className="link-27"
                          href="https://bgdlabs.com/"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <div className="container-111">
                            <UnusedComponents160 className="unused-components-8" />
                            <div className="container-112">
                              <UnusedComponents145 className="unused-components-8" />
                            </div>
                          </div>
                        </a>
                      </div>

                      <div className="container-178">
                        <a
                          className="link-28"
                          href="https://defisaver.com/"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <div className="container-111">
                            <UnusedComponents160 className="unused-components-9" />
                            <div className="container-112">
                              <UnusedComponents131 className="unused-components-9" />
                            </div>
                          </div>
                        </a>
                      </div>

                      <div className="container-179">
                        <a
                          className="link-29"
                          href="https://www.spectra.finance/"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <div className="container-111">
                            <UnusedComponents160 className="unused-components-10" />
                            <div className="container-112">
                              <Variant39_1 className="unused-components-10" />
                            </div>
                          </div>
                        </a>
                      </div>

                      <div className="container-180">
                        <a
                          className="link-30"
                          href="https://idle.finance/"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <div className="container-111">
                            <UnusedComponents160 className="unused-components-10" />
                            <div className="container-112">
                              <UnusedComponents172 className="unused-components-10" />
                            </div>
                          </div>
                        </a>
                      </div>

                      <div className="container-181">
                        <a
                          className="link-31"
                          href="https://thegraph.com/"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <div className="container-111">
                            <UnusedComponents160 className="unused-components-8" />
                            <div className="container-112">
                              <UnusedComponents136 className="unused-components-8" />
                            </div>
                          </div>
                        </a>
                      </div>

                      <div className="container-182">
                        <a
                          className="link-32"
                          href="https://defillama.com/"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <div className="container-111">
                            <UnusedComponents160 className="unused-components-10" />
                            <div className="container-112">
                              <Variant42_1 className="unused-components-10" />
                            </div>
                          </div>
                        </a>
                      </div>

                      <div className="container-183">
                        <a
                          className="link-33"
                          href="https://www.brahma.fi/"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <div className="container-111">
                            <UnusedComponents160 className="unused-components-10" />
                            <div className="container-112">
                              <UnusedComponents139 className="unused-components-10" />
                            </div>
                          </div>
                        </a>
                      </div>

                      <div className="container-184">
                        <a
                          className="link-10"
                          href="https://symbiosis.finance/"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <div className="container-111">
                            <UnusedComponents160 className="unused-components-11" />
                            <div className="container-112">
                              <Variant44_1 className="unused-components-11" />
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="section-15">
                <div className="container-187">
                  <div className="container-172">
                    <div className="heading-42">
                      <div className="text-wrapper-83">
                        Trusted by the best.
                      </div>
                    </div>

                    <div className="container-188">
                      <p className="text-wrapper-103">
                        Aave Protocol has been trusted by leading institutions
                        and companies.
                      </p>
                    </div>
                  </div>

                  <div className="container-132">
                    <div className="looping-logo-trusted-by-the-best-1440-wrapper">
                      <LoopingLogoTrustedByTheBest1440
                        JPMorganChaseWrapperJpMorganChase="/img/jp-morgan-chase-trusted-by-the-best-1440-3.png"
                        centrifugeLogoOnCentrifugeLogoOn="/img/centrifuge-logo-on-trusted-by-the-best-1440-3.png"
                        className="looping-logo-trusted-instance"
                        consensysTrustedByConsensysTrustedBy="/img/consensys-trusted-by-the-best-1440-3.png"
                        fireBlocksTrustedWrapperFireBlocksTrusted="/img/fire-blocks-trusted-by-the-best-1440-3.png"
                        imgWrapperBancoCentralDo="/img/banco-central-do-brasil-trusted-by-the-best-1440-3.png"
                        monetaryOfMonetaryOf="/img/monetary-of-authority-of-singapore-trusted-by-the-best-1440-3.png"
                        override={
                          <JpMorganChaseLogo478TrustedByTheBest478_4 className="jp-morgan-chase-trusted-by-the-best-1440-4" />
                        }
                        override1={
                          <MonetaryAuthorityOfSingaporeLogoTrustedByTheBest478_4 className="monetary-of-authority-of-singapore-trusted-by-the-best-1440-4" />
                        }
                        override2={
                          <FireBlocksTrustedByTheBest1440_4 className="fire-blocks-trusted-by-the-best-1440-4" />
                        }
                        override3={
                          <ConsensysLogoTrustedByTheBest991_4 className="consensys-trusted-by-the-best-1440-4" />
                        }
                        override4={
                          <BancoCentralDoBrasilTrustedByTheBest1440_4 className="banco-central-do-brasil-trusted-by-the-best-1440-4" />
                        }
                        override5={
                          <CentrifugeLogoTrustedByTheBest991_4 className="centrifuge-logo-on-trusted-by-the-best-1440-4" />
                        }
                      />
                    </div>

                    <div className="gradient-3" />

                    <div className="gradient-4" />
                  </div>
                </div>
              </div>

              <div className="section-16">
                <div className="container-187">
                  <div className="background-42">
                    <GovernedByYouAnimation1440_1 className="governed-by-you-animation-1440-1" />
                    <div className="heading-margin-6">
                      <div className="heading-29">
                        <div className="text-wrapper-90">
                          Governed by you &amp;
                        </div>

                        <div className="container-136">
                          <div className="container-135">
                            <div className="text-wrapper-91">209,482</div>
                          </div>
                        </div>

                        <div className="text-wrapper-90 x30">others.</div>
                      </div>
                    </div>

                    <div className="container-137">
                      <p className="AAVE-token-holders-2">
                        AAVE token holders guide the Aave Protocol via
                        <br />
                        procedures, voting, and smart contract execution.
                      </p>
                    </div>

                    <div className="link-margin">
                      <GoToForumInside
                        className="instance-node"
                        href="https://governance.aave.com/"
                        href1="https://governance.aave.com/"
                        text="Go to the Forum"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="section-15">
                <div className="container-171">
                  <div className="container-172">
                    <div className="heading-43">
                      <div className="text-wrapper-83">Serious security.</div>
                    </div>

                    <div className="container-189">
                      <p className="text-wrapper-103">
                        Peace of mind by design.
                      </p>
                    </div>
                  </div>

                  <div className="container-190">
                    <LearnMore
                      className="learn-more-5"
                      href="https://aave.com/help/safety-module"
                      text="Learn More"
                    />
                    <div className="background-43">
                      <div className="background-44">
                        <ExtensiveAudit1440_1 className="extensive-audit-1440-1" />
                      </div>

                      <div className="container-191">
                        <div className="heading-44">
                          <div className="text-wrapper-93">
                            Extensive Audits
                          </div>
                        </div>

                        <div className="horizontal-divider-6" />

                        <div className="container-192">
                          <p className="div-5">
                            Peace of mind supported by multiple audits by the
                            <br />
                            world’s leading security firms.
                          </p>
                        </div>

                        <LearnMore
                          className="instance-node"
                          href="https://aave.com/security"
                          href1="https://aave.com/security"
                          text="Learn More"
                        />
                      </div>
                    </div>

                    <div className="background-43">
                      <div className="container-191">
                        <div className="heading-45">
                          <div className="text-wrapper-93">Bug Bounty</div>
                        </div>

                        <div className="horizontal-divider-6" />

                        <div className="container-193">
                          <p className="div-5">
                            Security is a top priority. Report vulnerabilities
                            or bugs
                            <br />
                            responsibly and get rewarded.
                          </p>
                        </div>
                      </div>

                      <div className="background-44">
                        <BugBounty1440_1 className="instance-node-5" />
                      </div>
                    </div>

                    <LearnMore
                      className="learn-more-6"
                      href="https://aave.com/security"
                      href1="https://aave.com/security"
                      text="Learn More"
                    />
                    <div className="background-43">
                      <div className="background-44">
                        <ShortfallSecured1 className="instance-node-5" />
                      </div>

                      <div className="container-191">
                        <div className="heading-46">
                          <div className="text-wrapper-93">
                            Shortfall Secured
                          </div>
                        </div>

                        <div className="horizontal-divider-6" />

                        <div className="container-194">
                          <p className="div-5">
                            The Aave Protocol is secured with a backstop against
                            <br />
                            protocol insolvency.
                          </p>
                        </div>

                        <LearnMore
                          className="instance-node"
                          href="https://aave.com/help/safety-module"
                          href1="https://aave.com/help/safety-module"
                          text="Learn More"
                        />
                      </div>
                    </div>

                    <div className="background-43">
                      <div className="container-191">
                        <div className="heading-47">
                          <div className="text-wrapper-93">5 Years Strong</div>
                        </div>

                        <div className="horizontal-divider-6" />

                        <div className="container-195">
                          <p className="div-5">
                            Aave is leading the DeFi Renaissance, committed to
                            <br />
                            it’s mission of bringing global finance onchain.
                          </p>
                        </div>
                      </div>

                      <div className="background-44">
                        <FiveYearsStrong1440Component1 className="instance-node-5" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="separator-3" />

              <div className="section-15">
                <div className="container-187">
                  <div className="container-196">
                    <div className="heading-48">
                      <div className="text-wrapper-104">FAQs</div>
                    </div>

                    <Faq className="FAQ-instance" href="https://aave.com/faq" />
                  </div>
                </div>
              </div>

              <div className="separator-3" />

              <div className="section-15">
                <div className="container-187">
                  <div className="container-197">
                    <div className="background-45">
                      <div className="heading-49">
                        <div className="text-wrapper-93">Stay Updated</div>
                      </div>

                      <div className="container-198">
                        <p className="div-5">
                          Be the first to hear Aave
                          <br />
                          protocol news.
                        </p>
                      </div>
                    </div>

                    <div className="background-46">
                      <div className="container-153">
                        <div className="label">
                          <div className="container-154">
                            <div className="container-199">
                              <div className="text-wrapper-96">Email</div>
                            </div>

                            <div className="margin-2">
                              <div className="background-41" />
                            </div>
                          </div>
                        </div>

                        <div className="email-newsletter">
                          <div className="input-newsletter">
                            <div className="container-200">
                              <div className="text-wrapper-97">
                                ronnie@aave.com
                              </div>
                            </div>
                          </div>

                          <SubscribeButton
                            className="subscribe-button-footer"
                            text="Subscribe"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="section-17">
                <footer className="footer-2">
                  <div className="container-201">
                    <div className="container-202">
                      <AaveLogoFooter6
                        className="aave-logo-footer"
                        color="#8F8E8E"
                      />
                      <div className="aave-com-provides-wrapper">
                        <p className="aave-com-provides-2">
                          Aave.com provides information and resources about the
                          fundamentals of the
                          <br />
                          decentralised non-custodial liquidity protocol called
                          the Aave Protocol, comprised of
                          <br />
                          open-source self-executing smart contracts that are
                          deployed on various permissionless
                          <br />
                          public blockchains, such as Ethereum (the &#34;Aave
                          Protocol&#34; or the &#34;Protocol&#34;). Aave Labs
                          <br />
                          does not control or operate any version of the Aave
                          Protocol on any blockchain network.
                        </p>
                      </div>
                    </div>

                    <div className="nav-3">
                      <div className="list-2">
                        <div className="item-8">
                          <div className="container-203">
                            <div className="text-wrapper-98">Resources</div>
                          </div>

                          <div className="div-4">
                            <div className="item-2">
                              <BrandFooter
                                className="instance-node"
                                href="https://aave.com/brand"
                              />
                            </div>

                            <div className="item-2">
                              <FaqFooter
                                className="instance-node"
                                href="https://aave.com/faq"
                              />
                            </div>

                            <div className="item-2">
                              <HelpSupportFooter
                                className="instance-node-2 x31"
                                href="https://aave.com/help"
                              />
                            </div>

                            <div className="item-9">
                              <Governance className="governance-instance" />
                            </div>
                          </div>
                        </div>

                        <div className="item-10">
                          <div className="container-204">
                            <div className="text-wrapper-98">Developers</div>
                          </div>

                          <div className="div-4">
                            <div className="item-2">
                              <DocumentationFooter
                                className="instance-node"
                                href="https://aave.com/docs"
                              />
                            </div>

                            <div className="item-2">
                              <TechnicalPaper
                                className="instance-node-2"
                                href="https://github.com/aave/aave-v3-core/blob/master/techpaper/Aave_V3_Technical_Paper.pdf"
                              />
                            </div>

                            <div className="item-2">
                              <SecurityFooter
                                className="instance-node"
                                href="https://aave.com/security"
                              />
                            </div>

                            <div className="item-9" />
                          </div>
                        </div>

                        <PrivacyPolicy
                          className="privacy-policy-footer"
                          hasDiv={false}
                          text="Privacy Policy"
                        />
                        <div className="item-11">
                          <div className="container-205">
                            <div className="text-wrapper-98">Company</div>
                          </div>

                          <div className="div-4">
                            <div className="item-2">
                              <VariantHoverWrapper className="variant-9-hover-false" />
                            </div>

                            <div className="item-2">
                              <TermsOfUseFooter
                                className="instance-node x33"
                                href="https://aave.com/terms-of-service"
                              />
                            </div>

                            <div className="item-2">
                              <ContactFooter className="instance-node x34" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="container-162">
                    <a
                      className="div-3"
                      href="https://x.com/aave"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <XLogoInFooter6 className="x-logo-in-footer" />
                    </a>

                    <a
                      className="div-3"
                      href="https://discord.com/invite/aave"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <DiscordLogoInFooter5 className="discord-logo-in" />
                    </a>

                    <a
                      className="div-3"
                      href="https://hey.xyz/u/aave"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <UnkownLogo1Footer6 className="instance-node-7" />
                    </a>

                    <a
                      className="div-3"
                      href="https://github.com/aave"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <GithubLogoInTheFooter5 className="instance-node-7" />
                    </a>

                    <a
                      className="div-3"
                      href="https://dune.com/aavelabs"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <UnknownLogo2Footer5 className="unknown-logo" />
                    </a>
                  </div>
                </footer>

                <div className="container-206">
                  <GradientInThe
                    className="gradient-in-the-instance"
                    overlayGradientClassName="gradient-in-the-2"
                  />
                  <GradientInTheWrapper
                    className="gradient-in-the-instance x35"
                    overlayGradientClassName="gradient-in-the-2 x35"
                  />
                  <DivWrapper
                    className="gradient-in-the-instance x36"
                    overlayGradientClassName="gradient-in-the-2 x36"
                  />
                  <GradientInTheFooter4ThMostObviousLeast
                    className="gradient-in-the-instance x37"
                    overlayGradientClassName="gradient-in-the-2 x37"
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {screenWidth < 991 && (
        <NavBar className="nav-bar-478" href="http://127.0.0.1:3000/" />
      )}
    </div>
  );
};
