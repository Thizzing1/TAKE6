/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { AaveByNumbers } from "../AaveByNumbers";
import { UnusedComponents184 } from "../../icons/UnusedComponents184";
import { UnusedComponents183 } from "../../icons/UnusedComponents183";
import "./style.css";

export const AaveByTheNumberWrapper = ({
  className,
  frameClassName,
  componentClassName,
}) => {
  return (
    <div className={`aave-by-the-number-wrapper ${className}`}>
      <div className="container-49">
        <div className="aave-by-numbers-wrapper">
          <AaveByNumbers className="aave-by-numbers-instance" />
        </div>

        <div className="container-50">
          <div className="container-51">
            <div className="background-20">
              <UnusedComponents184 className="unused-components-2" alt="Unused components" />
            </div>

            <div className="container-52">
              <div className="container-53">
                <div className="text-wrapper-60">$</div>

                <div className="container-54">
                  <div className="container-55">
                    <div className="text-wrapper-61">27.64</div>
                  </div>
                </div>

                <div className="text-wrapper-60">B</div>
              </div>

              <p className="text-wrapper-62">
                Net deposits supplied across 14 networks.
              </p>
            </div>
          </div>

          <div className="container-51">
            <div className="background-20">
              <UnusedComponents183 className="unused-components-2" alt="Unused components" />
            </div>

            <div className="container-52">
              <div className="container-53">
                <div className="text-wrapper-60">$</div>

                <div className="container-56">
                  <div className="container-55">
                    <div className="text-wrapper-61">190.93</div>
                  </div>
                </div>

                <div className="text-wrapper-60">B</div>
              </div>

              <div className="text-wrapper-62">Volume, past 30 days.</div>
            </div>
          </div>

          <div className="container-51">
            <div className="background-20">
              <div className={`div-2 ${frameClassName}`}>
                <div className="overlap-group-3">
                  <div className="group-wrapper">
                    <div className="group-4">
                      <img className="group-5" alt="Group" />
                    </div>
                  </div>

                  <img
                    className="far-left-sky-blue-2"
                    alt="Far left sky blue"
                    src="/img/far-left-sky-blue-4.png"
                  />
                </div>
              </div>
            </div>

            <div className="container-57">
              <div className="container-58">
                <div className="container-59">
                  <div className="container-55">
                    <div className="text-wrapper-61">6.10</div>
                  </div>
                </div>

                <div className="text-wrapper-60">%</div>
              </div>

              <div className="container-60">
                <p className="average-stablecoin">
                  Average stablecoin supply APY Ethereum
                  <br />
                  network, past year.
                </p>
              </div>
            </div>
          </div>

          <div className="container-51">
            <div className="background-20">
              <div className={`div-2 ${componentClassName}`}>
                <img className="middle-blue-2" alt="Middle blue" src="/img/middle-blue-4.png"  />
              </div>
            </div>

            <div className="container-57">
              <div className="container-58">
                <div className="container-61">
                  <div className="container-55">
                    <div className="text-wrapper-61">8.96</div>
                  </div>
                </div>

                <div className="text-wrapper-60">%</div>
              </div>

              <div className="container-62">
                <p className="average-stablecoin">
                  Average stablecoin borrow APR Ethereum
                  <br />
                  network, past year.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
