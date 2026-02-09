import { AaveLogoInAap } from "../../components/AaveLogoInAap";
import { BridgeButton } from "../../components/BridgeButton";
import { ConnectwalletButton } from "../../components/ConnectwalletButton";
import { DocsButton } from "../../components/DocsButton";
import { FaqsButton } from "../../components/FaqsButton";
import { GetSupportButton } from "../../components/GetSupportButton";
import { Header } from "../../components/Header";
import { ManageAnalytics } from "../../components/ManageAnalytics";
import { PrivacyButton } from "../../components/PrivacyButton";
import { SwapButton } from "../../components/SwapButton";
import { TermsButton } from "../../components/TermsButton";
import { DiscordButton768 } from "../../icons/DiscordButton768";
import { GithubButton768 } from "../../icons/GithubButton768";
import { InstagramButton768 } from "../../icons/InstagramButton768";
import { LinkdinButton1024 } from "../../icons/LinkdinButton1024";
import { TiktokButton768 } from "../../icons/TiktokButton768";
import { Unknown2Button768 } from "../../icons/Unknown2Button768";
import { UnknownButton768 } from "../../icons/UnknownButton768";
import { XButton768 } from "../../icons/XButton768";
import "./style.css";

export const TabletSmallConnect = () => {
  return (
    <div className="tablet-small-connect">
      <div className="container-9">
        <Header className="header-1024" vectorClassName="header-instance" />
        <div className="main">
          <div className="background">
            <div className="container-10">
              <div className="container-11">
                <div className="container-12">
                  <div className="select-market-wrapper">
                    <div className="div-wrapper-2">
                      <div className="container-13">
                        <div className="combobox-listbox">
                          <div className="container-14">
                            <img
                              className="margin"
                              alt="Margin"
                              src="/img/margin-1.svg"
                            />

                            <div className="container-15">
                              <div className="heading-margin">
                                <div className="heading-base">Core Market</div>
                              </div>

                              <div className="container-16">
                                <div className="background-2">
                                  <div className="div-wrapper-2">
                                    <div className="text-wrapper-10">V3</div>
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
                          <div className="container-17">
                            <div className="text-wrapper-11">proto_base_v3</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="container-18">
                <div className="container-16">
                  <div className="container-19">
                    <div className="container-14">
                      <div className="div-wrapper-2">
                        <div className="text-wrapper-12">Net worth</div>
                      </div>
                    </div>

                    <div className="container-20">
                      <div className="text-wrapper-13">—</div>
                    </div>
                  </div>
                </div>

                <div className="container-16">
                  <div className="container-19">
                    <div className="container-14">
                      <div className="div-wrapper-2">
                        <div className="container-21">
                          <div className="text-wrapper-14">Net APY</div>

                          <img
                            className="container-22"
                            alt="Container"
                            src="/img/container-4.svg"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="container-20">
                      <div className="text-wrapper-13">—</div>
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
                src="/img/container-5.svg"
              />

              <div className="heading-wrapper">
                <div className="heading">
                  <div className="text-wrapper-15">
                    Please, connect your wallet
                  </div>
                </div>
              </div>

              <div className="margin-2">
                <div className="container-23">
                  <p className="p">
                    Please connect your wallet to see your supplies, borrowings,
                    and open positions.
                  </p>
                </div>
              </div>

              <ConnectwalletButton className="design-component-instance-node" />
            </div>
          </div>
        </div>

        <div className="overlay-shadow">
          <div className="container-24">
            <TermsButton className="design-component-instance-node-2" />
            <PrivacyButton className="design-component-instance-node-3" />
            <DocsButton className="design-component-instance-node-3" />
            <FaqsButton className="design-component-instance-node-3" />
            <GetSupportButton className="design-component-instance-node-3" />
            <ManageAnalytics className="design-component-instance-node-3" />
          </div>

          <div className="container-24">
            <XButton768 className="icon-instance-node" />
            <InstagramButton768 className="icon-instance-node" />
            <TiktokButton768 className="icon-instance-node" />
            <LinkdinButton1024 className="icon-instance-node" />
            <DiscordButton768 className="icon-instance-node" />
            <UnknownButton768 className="icon-instance-node" />
            <GithubButton768 className="icon-instance-node" />
            <Unknown2Button768 className="icon-instance-node" />
          </div>
        </div>

        <header className="header-2">
          <AaveLogoInAap
            className="design-component-instance-node"
            vectorClassName="aave-logo-in-aap-page-768"
          />
          <div className="rectangle" />

          <div className="margin-3">
            <BridgeButton
              className="design-component-instance-node-2"
              vectorClassName="bridge-button-768"
            />
          </div>

          <div className="margin-3">
            <SwapButton
              className="design-component-instance-node-2"
              vectorClassName="swap-button-768"
            />
          </div>

          <ConnectwalletButton className="connectwallet-button-top-right-corner-768" />
          <div className="container-25" />
        </header>
      </div>
    </div>
  );
};
