import { CoinbaseButton } from "../CoinbaseButton";
import { ContinueWithFamily } from "../ContinueWithFamily";
import { GetAWalletButton } from "../GetAWalletButton";
import { LearnMoreButton } from "../LearnMoreButton";
import { MetamaskButton } from "../MetamaskButton";
import { OtherWallet } from "../OtherWallet";
import "./style.css";

export const ActualModal425 = ({
  className,
  metamaskButtonContainer = "/img/container-5.svg",
  otherWalletBackground = "/img/background-4.svg",
}) => {
  return (
    <div className={`actual-modal ${className}`}>
      <div className="container-10">
        <div className="container-11">
          <div className="button-margin">
            <ContinueWithFamily className="continue-with-family-button-425" />
          </div>

          <div className="container-12">
            <div className="container-13">
              <div className="container-14">
                <MetamaskButton
                  className="design-component-instance-node"
                  container={metamaskButtonContainer}
                />
                <CoinbaseButton className="design-component-instance-node" />
                <OtherWallet
                  background={otherWalletBackground}
                  className="other-wallet-425"
                />
              </div>
            </div>

            <div className="background-2">
              <div className="container-15">
                <div className="heading">
                  <div className="text-wrapper-7">What is a wallet?</div>
                </div>

                <div className="wallets-are-used-to-wrapper">
                  <p className="wallets-are-used-to">
                    Wallets are used to send, receive, and store
                    <br />
                    digital assets. Connecting a wallet lets you
                    <br />
                    interact with apps.
                  </p>
                </div>
              </div>

              <div className="container-16">
                <div className="button-margin-2">
                  <LearnMoreButton
                    className="design-component-instance-node-2"
                    containerClassName="design-component-instance-node-3"
                  />
                </div>

                <div className="button-margin-2">
                  <GetAWalletButton
                    className="design-component-instance-node-2"
                    containerClassName="design-component-instance-node-3"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="background-wrapper">
            <div className="background-3">
              <p className="p">or select a wallet from the list below</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
