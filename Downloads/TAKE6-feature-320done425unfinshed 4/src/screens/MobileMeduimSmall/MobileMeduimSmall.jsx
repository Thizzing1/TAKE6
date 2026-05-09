import { useState } from "react";
import { Discordsocialmedia425 } from "../../icons/Discordsocialmedia425";
import { Githubsocialmedia425 } from "../../icons/Githubsocialmedia425";
import { InstagramButton1440_1 } from "../../icons/InstagramButton1440_1";
import { LinkelinButton1440_1 } from "../../icons/LinkelinButton1440_1";
import { Unknownsocialmedia320_3 } from "../../icons/Unknownsocialmedia320_3";
import "./style.css";
import { Actualmodal } from "../../components/Actualmodal/Actualmodal";

export const MobileMeduimSmall = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="mobile-small-connect">
        <div className="container">
          {/* Header Banner */}
          <div className="header">
            <div className="div">
              <div className="container-2">
                <div className="container-3">
                  <p className="introducing-the-aave">
                    Introducing the Aave mobile app, a smarter
                    <br />
                    way to save.
                  </p>
                </div>

                <div className="JOIN-WAITLIST">
                  <div className="text-wrapper">JOIN WAITLIST</div>
                </div>
              </div>

              <div className="close-button">
                <div className="container-4">
                  <div className="SVG">
                    <img className="vector" alt="Vector" src="/img/vector-5.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="main">
            <div className="background">
              <div className="container-5">
                <div className="container-wrapper">
                  <div className="div-2">
                    <div className="heading-dashboard-wrapper">
                      <div className="heading-dashboard">Dashboard</div>
                    </div>

                    {/* Market Selector */}
                    <div className="select-market-wrapper">
                      <div className="container-6">
                        <div className="combobox-listbox">
                          <div className="container-3">
                            <img className="margin" alt="Margin" src="/img/margin-3.svg" />
                            <div className="container-7">
                              <div className="heading-margin">
                                <div className="heading-base">Core Market</div>
                              </div>
                              <div className="div-3">
                                <div className="div-wrapper">
                                  <div className="text-wrapper-2">V3</div>
                                </div>
                                <div className="SVG-margin">
                                  <div className="frame" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="input">
                          <div className="container-8">
                            <div className="text-wrapper-3">proto_base_v3</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Net Worth & Net APY */}
                <div className="container-9">
                  <div className="container-10">
                    <div className="div-2">
                      <div className="text-wrapper-4">Net worth</div>
                      <div className="container-11">
                        <div className="text-wrapper-5">—</div>
                      </div>
                    </div>
                  </div>

                  <div className="container-10">
                    <div className="div-2">
                      <div className="container-3">
                        <div className="div-2">
                          <div className="container-4">
                            <div className="text-wrapper-4">Net APY</div>
                            <img className="img" alt="Container" src="/img/container-8.svg" />
                          </div>
                        </div>
                      </div>
                      <div className="container-11">
                        <div className="text-wrapper-5">—</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Connect Wallet Card */}
            <div className="background-shadow-wrapper">
              <div className="background-shadow">
                <img className="icon-instance-node" alt="Container" src="/img/container-9.svg" />

                <div className="heading-wrapper">
                  <div className="heading">
                    <div className="text-wrapper-6">Please, connect your wallet</div>
                  </div>
                </div>

                <div className="margin-2">
                  <p className="please-connect-your">
                    Please connect your wallet to see your supplies,
                    <br />
                    borrowings, and open positions.
                  </p>
                </div>

                <div className="connectwalletbutton" onClick={() => setIsOpen(true)}>
                  <div className="text-wrapper-7">Connect wallet</div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="overlay-shadow">
            <div className="container-12">
              {["Terms", "Privacy", "Docs", "FAQS", "Get Support", "Manage analytics"].map((text) => (
                <div className="div-3" key={text}>
                  <div className="div-2">
                    <div className="text-wrapper-4">{text}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="container-12">
              <img className="icon-instance-node" alt="X" src="/img/x-button-375.svg" />
              <InstagramButton1440_1 className="icon-instance-node" />
              <img className="icon-instance-node" alt="Tiktok" src="/img/tiktok-button-375.svg" />
              <LinkelinButton1440_1 className="icon-instance-node" />
              <Discordsocialmedia425 className="icon-instance-node" />
              <Unknownsocialmedia320_3 className="icon-instance-node" />
              <Githubsocialmedia425 className="icon-instance-node" />
              <img className="icon-instance-node" alt="Unknown" src="/img/unknown2-button-375.svg" />
            </div>
          </div>

          {/* Bottom Navigation */}
          <header className="header-2">
            <div className="aave-logo-in-app">
              <div className="AAVE">
                <div className="aave-com-logo-header-2">
                  <img className="vector-2" alt="Vector" src="/img/vector-15.svg" />
                  <img className="vector-3" alt="Vector" src="/img/vector-16.svg" />
                </div>
              </div>
            </div>

            <div className="bridge-button-wrapper">
              <div className="div-wrapper-2">
                <img className="vector-4" alt="Bridge" src="/img/vector-26.svg" />
              </div>
            </div>

            <div className="swap-button-wrapper">
              <div className="div-wrapper-2">
                <img className="vector-5" alt="Swap" src="/img/vector-25.svg" />
              </div>
            </div>

            <div className="connectwallet-button" onClick={() => setIsOpen(true)}>
              <div className="connect-wallet">Connect wallet</div>
            </div>
          </header>
        </div>
      </div>

      {/* Modal */}
      <Actualmodal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};