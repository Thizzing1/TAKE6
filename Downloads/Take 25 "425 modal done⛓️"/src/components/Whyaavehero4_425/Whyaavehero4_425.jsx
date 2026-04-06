import { MiddleBlue } from "../MiddleBlue";
import "./style.css";

export const Whyaavehero4_425 = ({
  className,
  middleBlueMiddleBlue = "/img/middle-blue-425.svg",
}) => {
  return (
    <div className={`whyaavehero-4-425 ${className}`}>
      <div className="background-2">
        <div className="middle-blue-wrapper">
          <MiddleBlue
            className="middle-blue-425"
            middleBlue={middleBlueMiddleBlue}
          />
        </div>
      </div>

      <div className="container-5">
        <div className="container-6">
          <div className="container-7">
            <div className="container-8">
              <div className="text-wrapper-5">8.96</div>
            </div>
          </div>

          <div className="text-wrapper-6">%</div>
        </div>

        <div className="average-stablecoin-wrapper">
          <p className="average-stablecoin">
            Average stablecoin borrow APR Ethereum
            <br />
            network, past year.
          </p>
        </div>
      </div>
    </div>
  );
};
