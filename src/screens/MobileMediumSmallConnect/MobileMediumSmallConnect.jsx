import { AaveLogoInApp } from "../../components/AaveLogoInApp";
import { BridgeButton } from "../../components/BridgeButton";
import { ConnectwalletButton } from "../../components/ConnectwalletButton";
import { DocsButton } from "../../components/DocsButton";
import { FaqsButton } from "../../components/FaqsButton";
import { GetSupport } from "../../components/GetSupport";
import { Header } from "../../components/Header";
import { ManageAnalytics } from "../../components/ManageAnalytics";
import { PrivacyButton } from "../../components/PrivacyButton";
import { SwapButton } from "../../components/SwapButton";
import { TermsButton } from "../../components/TermsButton";
import { DiscordButton375 } from "../../icons/DiscordButton375";
import { Githubsocialmedia425 } from "../../icons/Githubsocialmedia425";
import { InstagramButton375 } from "../../icons/InstagramButton375";
import { LinkdinButton375 } from "../../icons/LinkdinButton375";
import { TiktokButton375 } from "../../icons/TiktokButton375";
import { Unknown2Button375 } from "../../icons/Unknown2Button375";
import { UnknownButton375 } from "../../icons/UnknownButton375";
import { XButton375 } from "../../icons/XButton375";
import "./style.css";

export const MobileMediumSmallConnect = () => {
  return (
    <div className="mobile-meduim-small">
      <div className="container-8">
        <Header className="header-375" vectorClassName="header-instance" />
        <div className="main">
          <div className="background">
            <div className="container-9">
              <div className="container-wrapper">
                <div className="div-2">
                  <div className="heading-dashboard-wrapper">
                    <div className="heading-dashboard">Dashboard</div>
                  </div>

                  <div className="select-market-wrapper">
                    <div className="div-2">
                      <div className="container-10">
                        <div className="combobox-listbox">
                          <div className="container-11">
                            <img
                              className="margin"
                              alt="Margin"
                              src="/img/margin-3.svg"
                            />

                            <div className="container-12">
                              <div className="heading-margin">
                                <div className="heading-base">Core Market</div>
                              </div>

                              <div className="container-13">
                                <div className="background-2">
                                  <div className="div-2">
                                    <div className="text-wrapper-9">V3</div>
                                  </div>
                                </div>

                                <div className="SVG-margin">
                                  <div className="SVG-3">
                                    <div className="frame-2" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="input">
                          <div className="container-14">
                            <div className="text-wrapper-10">proto_base_v3</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="container-15">
                <div className="container-16">
                  <div className="div-2">
                    <div className="container-11">
                      <div className="div-2">
                        <div className="text-wrapper-11">Net worth</div>
                      </div>
                    </div>

                    <div className="container-17">
                      <div className="text-wrapper-12">—</div>
                    </div>
                  </div>
                </div>

                <div className="container-16">
                  <div className="div-2">
                    <div className="container-11">
                      <div className="div-2">
                        <div className="container-18">
                          <div className="text-wrapper-11">Net APY</div>

                          <img
                            className="container-19"
                            alt="Container"
                            src="/img/container-8.svg"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="container-17">
                      <div className="text-wrapper-12">—</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="background-shadow-wrapper">
            <div className="background-shadow">
              <img
                className="icon-instance-node"
                alt="Container"
                src="/img/container-9.svg"
              />

              <div className="heading-wrapper">
                <div className="heading">
                  <div className="text-wrapper-13">
                    Please, connect your wallet
                  </div>
                </div>
              </div>

              <div className="margin-2">
                <div className="please-connect-your-wrapper">
                  <p className="please-connect-your">
                    Please connect your wallet to see your supplies,
                    <br />
                    borrowings, and open positions.
                  </p>
                </div>
              </div>

              <ConnectwalletButton className="connectwalletbutton-middle-375" />
            </div>
          </div>
        </div>

        <div className="overlay-shadow">
          <div className="container-20">
            <TermsButton className="design-component-instance-node" />
            <PrivacyButton className="design-component-instance-node-2" />
            <DocsButton className="design-component-instance-node-2" />
            <FaqsButton className="design-component-instance-node-2" />
            <GetSupport className="design-component-instance-node-2" />
            <ManageAnalytics className="design-component-instance-node-2" />
          </div>

          <div className="container-20">
            <XButton375 className="icon-instance-node" />
            <InstagramButton375 className="icon-instance-node" />
            <TiktokButton375 className="icon-instance-node" />
            <LinkdinButton375 className="icon-instance-node" />
            <DiscordButton375 className="icon-instance-node" />
            <UnknownButton375 className="icon-instance-node" />
            <Githubsocialmedia425 className="icon-instance-node" />
            <Unknown2Button375 className="icon-instance-node" />
          </div>
        </div>

        <header className="header-2">
          <AaveLogoInApp
            className="aave-logo-in-app-page-375"
            vectorClassName="aave-logo-in-app-instance"
          />
          <div className="bridge-button-wrapper">
            <BridgeButton
              className="design-component-instance-node"
              vectorClassName="bridge-button-375"
            />
          </div>

          <div className="swap-button-wrapper">
            <SwapButton
              className="design-component-instance-node"
              vectorClassName="swap-button-375"
            />
          </div>

          <ConnectwalletButton className="connectwallet-button-top-right-corner-375" />
        </header>
      </div>
    </div>
  );
};
