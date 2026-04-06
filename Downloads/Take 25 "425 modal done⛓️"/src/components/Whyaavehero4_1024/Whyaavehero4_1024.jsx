import { MiddleBlue } from "../MiddleBlue";
import "./style.css";

export const Whyaavehero4_1024 = ({
  className,
  middleBlueMiddleBlue = "/img/middle-blue-1024.svg",
}) => {
  return (
    <div className={`whyaavehero-4-1024 ${className}`}>
      <div className="background-2">
        <div className="middle-blue-wrapper">
          <MiddleBlue
            className="middle-blue-1024"
            middleBlue={middleBlueMiddleBlue}
          />
        </div>
      </div>

      <div className="container-7">
        <div className="container-8">
          <div className="container-9">
            <div className="container-10">
              <div className="text-wrapper-4">8.96</div>
            </div>
          </div>

          <div className="text-wrapper-5">%</div>
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
