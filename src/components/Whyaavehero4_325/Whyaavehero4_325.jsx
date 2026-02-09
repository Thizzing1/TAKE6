import { MiddleBlue } from "../MiddleBlue";
import "./style.css";

export const Whyaavehero4_325 = ({
  className,
  componentClassName,
  middleBlueMiddleBlue = "/img/middle-blue-325.svg",
  middleBlueMiddleBlueClassName,
}) => {
  return (
    <div className={`whyaavehero-4-325 ${className}`}>
      <div className="background">
        <div className={`middle-blue-wrapper ${componentClassName}`}>
          <MiddleBlue
            className={middleBlueMiddleBlueClassName}
            middleBlue={middleBlueMiddleBlue}
          />
        </div>
      </div>

      <div className="container-6">
        <div className="container-7">
          <div className="container-8">
            <div className="container-9">
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
