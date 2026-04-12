import { CoinbaseButton } from "../../components/CoinbaseButton";
import { ContinueWithFamily } from "../../components/ContinueWithFamily";
import { GetAWalletButton } from "../../components/GetAWalletButton";
import { LearnMoreButton } from "../../components/LearnMoreButton";
import { MetamaskButton } from "../../components/MetamaskButton";
import { OtherWallet } from "../../components/OtherWallet";
import "./style.css";

export const ActualModal320 = () => {
  return (
    <div 
      className="artboard"
      // === HOW TO MOVE THE MODAL (without touching design) ===
      // Option 1: Quick test with classes
      // className="artboard move-up"
      // className="artboard move-down"

      // Option 2: Precise control (best)
      // style={{
      //   '--modal-translate-x': '30px',
      //   '--modal-translate-y': '-120px'
      // }}
    >
      <div className="actualmodal">
        <div className="container-10">
          <div className="background-shadow" />
          <div className="container-11">
            <div className="container-12">
              <div className="container-13">
                <div className="text-wrapper-7">Connect Wallet</div>
              </div>
            </div>
          </div>
          <div className="frame">
            <div className="container-14">
              <div className="container-15">
                <div className="button-margin">
                  <ContinueWithFamily className="continue-with-family-button-320" />
                </div>
                <div className="container-16">
                  <div className="container-17">
                    <div className="container-18">
                      <MetamaskButton className="design-component-instance-node" />
                      <CoinbaseButton className="design-component-instance-node" />
                      <OtherWallet
                        background="/img/background-2.svg"
                        className="design-component-instance-node"
                      />
                    </div>
                  </div>
                  <div className="background-2">
                    <div className="container-19">
                      <div className="heading">
                        <div className="text-wrapper-8">What is a wallet?</div>
                      </div>
                      <div className="wallets-are-used-to-wrapper">
                        <p className="wallets-are-used-to">
                          Wallets are used to send, receive, and
                          <br />
                          store digital assets. Connecting a<br />
                          wallet lets you interact with apps.
                        </p>
                      </div>
                    </div>
                    <div className="container-20">
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
        </div>
      </div>
    </div>
  );
};