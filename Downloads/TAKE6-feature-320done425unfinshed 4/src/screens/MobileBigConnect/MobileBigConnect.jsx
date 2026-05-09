import { useState } from "react";
import { ActualModal425 } from "../../components/ActualModal425/ActualModal425"; 

import "./style.css";

export const MobileBigConnect = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="mobile-big-connect">
        <div className="container">
          <div className="header">
            <div className="div">
              <div className="container-2">
                <div className="container-3">
                  <p className="introducing-the-aave">
                    Introducing the Aave mobile app, a smarter way to
                    <br />
                    save.
                  </p>
                </div>

                <div className="JOIN-WAITLIST">
                  <div className="text-wrapper">JOIN WAITLIST</div>
                </div>
              </div>

              <div className="close-button">
                <div className="container-4">
                  <div className="SVG">
                    <img
                      className="vector"
                      alt="Vector"
                      src="/img/vector-697.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="main">
            <div className="background">
              <div className="container-5">
                <div className="container-6">
                  <div className="ethereum-svg-wrapper">
                    <div className="ethereum-svg">
                      <div className="ethereum-svg-fill">
                        <div className="ethereum-svg-2" />
                      </div>
                    </div>
                  </div>

                  <div className="div-2">
                    <div className="heading-dashboard-wrapper">
                      <div className="heading-dashboard">Dashboard</div>
                    </div>

                    <div className="select-market-wrapper">
                      <div className="div-2">
                        <div className="container-7">
                          <div className="combobox-listbox">
                            <div className="container-3">
                              <div className="margin" />

                              <div className="container-8">
                                <div className="heading-margin">
                                  <div className="heading-base">Core Market</div>
                                </div>

                                <div className="div-3">
                                  <div className="container-wrapper">
                                    <div className="div-2">
                                      <div className="text-wrapper-2">V3</div>
                                    </div>
                                  </div>

                                  <div className="SVG-margin">
                                    <div className="frame-wrapper">
                                      <div className="frame" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="input">
                            <div className="div-wrapper">
                              <div className="text-wrapper-3">proto_base_v3</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="container-9">
                  <div className="container-10">
                    <div className="div-2">
                      <div className="container-3">
                        <div className="div-2">
                          <div className="text-wrapper-4">Net worth</div>
                        </div>
                      </div>

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

                            <img
                              className="img"
                              alt="Container"
                              src="/img/container-22.svg"
                            />
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

            <div className="background-shadow-wrapper">
              <div className="background-shadow">
                <img
                  className="img-2"
                  alt="Container"
                  src="/img/container-17.svg"
                />

                <div className="heading-wrapper">
                  <div className="heading">
                    <div className="text-wrapper-6">
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

                <div
                  className="connectwalletbutton"
                  onClick={() => setIsOpen(true)}
                >
                  <div className="text-wrapper-7">Connect wallet</div>
                </div>
              </div>
            </div>
          </div>

          <header className="header-2">
            <div
              className="connectwallet-button"
              onClick={() => setIsOpen(true)}
            >
              <div className="text-wrapper-7">Connect wallet</div>
            </div>
          </header>
        </div>
      </div>

      {/* ✅ MODAL (INFUSED AT THE BOTTOM CORRECTLY) */}
      {isOpen && <ActualModal425 setIsOpen={setIsOpen} />}
    </>
  );
};