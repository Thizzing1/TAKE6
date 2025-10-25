/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { AaveByTheNumbers } from "../AaveByTheNumbers";
import { UnusedComponents184 } from "../../icons/UnusedComponents184";
import { UnusedComponents183 } from "../../icons/UnusedComponents183";
import "./style.css";

export const AaveByTheNumber = ({
  className,
  frameClassName,
  componentClassName,
}) => {
  return (
    <div className={`aave-by-the-number ${className}`}>
      <div className="margin">
        <AaveByTheNumbers className="aave-by-the-numbers-instance" />
      </div>

      <div className="container-17">
        <div className="container-18">
          <div className="unused-components-wrapper">
            <UnusedComponents184 className="img" alt="Unused components" />
          </div>

          <div className="container-19">
            <div className="container-20">
              <div className="text-wrapper-33">$</div>

              <div className="container-21">
                <div className="container-22">
                  <div className="text-wrapper-34">27.64</div>
                </div>
              </div>

              <div className="text-wrapper-33">B</div>
            </div>

            <div className="net-deposits-wrapper">
              <p className="text-wrapper-35">
                Net deposits supplied across 14 networks.
              </p>
            </div>
          </div>
        </div>

        <div className="container-18">
          <div className="unused-components-wrapper">
            <UnusedComponents183 className="img" alt="Unused components" />
          </div>

          <div className="container-23">
            <div className="container-24">
              <div className="text-wrapper-33">$</div>

              <div className="container-25">
                <div className="container-22">
                  <div className="text-wrapper-34">190.93</div>
                </div>
              </div>

              <div className="text-wrapper-33">B</div>
            </div>

            <div className="text-wrapper-36">Volume, past 30 days.</div>
          </div>
        </div>

        <div className="container-18">
          <div className="frame-wrapper">
            <div className={`frame ${frameClassName}`}>
              <div className="overlap-group-2">
                <div className="group">
                  <div className="group-2">
                    <img className="group-3" alt="Group" />
                  </div>
                </div>

                <img className="far-left-sky-blue" alt="Far left sky blue" src="/img/far-left-sky-blue-4.png" />
              </div>
            </div>
          </div>

          <div className="container-19">
            <div className="container-20">
              <div className="container-26">
                <div className="container-22">
                  <div className="text-wrapper-34">6.10</div>
                </div>
              </div>

              <div className="text-wrapper-33">%</div>
            </div>

            <div className="average-stablecoin-wrapper">
              <p className="text-wrapper-35">
                Average stablecoin supply APY Ethereum
                <br />
                network, past year.
              </p>
            </div>
          </div>
        </div>

        <div className="container-18">
          <div className="component-wrapper">
            <div className={`component ${componentClassName}`}>
              <img className="middle-blue" alt="Middle blue"  src="/img/middle-blue-4.png" />
            </div>
          </div>

          <div className="container-19">
            <div className="container-20">
              <div className="container-27">
                <div className="container-22">
                  <div className="text-wrapper-34">8.96</div>
                </div>
              </div>

              <div className="text-wrapper-33">%</div>
            </div>

            <div className="container-28">
              <p className="text-wrapper-35">
                Average stablecoin borrow APR Ethereum
                <br />
                network, past year.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
