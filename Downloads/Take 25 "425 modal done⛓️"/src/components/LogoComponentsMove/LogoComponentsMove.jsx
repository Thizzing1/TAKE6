import { Bancologo } from "../Bancologo";
import { Centrifuge } from "../Centrifuge";
import { Coinbaselogo } from "../Coinbaselogo";
import { Consensyslogo } from "../Consensyslogo";
import { Fireblockslogo } from "../Fireblockslogo";
import { Galaxylogo } from "../Galaxylogo";
import { Jpmorganlogo } from "../Jpmorganlogo";
import { Monetarylogo } from "../Monetarylogo";
import "./style.css";

export const LogoComponentsMove = ({
  className,
  jpmorganlogoVector,
  monetarylogoVector,
  monetarylogoImg,
  monetarylogoVector1,
  monetarylogoVector2,
  monetarylogoVector3,
  coinbaselogoCoinbaselogoClassName,
  galaxylogoVector,
  galaxylogoImg,
  fireblockslogoVector,
  fireblockslogoImg,
  consensyslogoConsensyslogo,
  bancologoBancologoClassName,
  centrifugeCentrifuge,
  jpmorganlogoImg,
  jpmorganlogoVectorClassName,
  monetarylogoVector4,
  monetarylogoVectorClassName,
  monetarylogoVectorClassNameOverride,
  monetarylogoVector5,
  monetarylogoVector6,
  monetarylogoVector7,
  monetarylogoVector8,
  coinbaselogoCoinbaselogoClassNameOverride,
  galaxylogoVector1,
  galaxylogoVectorClassName,
  galaxylogoVector2,
  fireblockslogoVector1,
  fireblockslogoVector2,
  consensyslogoImg,
  bancologoBancologoClassNameOverride,
  centrifugeImg,
}) => {
  return (
    <div className={`logo-components-move ${className}`}>
      <div className="container-wrapper">
        <div className="container-3">
          <div className="container-4">
            <div className="container-5">
              <Jpmorganlogo
                className="jpmorganlogo-320"
                vector={jpmorganlogoVector}
                vectorClassName="jpmorganlogo-instance"
              />
            </div>

            <div className="container-5">
              <Monetarylogo
                className="monetarylogo-320"
                img={monetarylogoVector3}
                vector={monetarylogoVector2}
                vector1={monetarylogoVector1}
                vector2={monetarylogoImg}
                vector3={monetarylogoVector}
                vectorClassName="monetarylogo-instance"
                vectorClassNameOverride="monetarylogo-320-instance"
              />
            </div>

            <div className="container-5">
              <Coinbaselogo className={coinbaselogoCoinbaselogoClassName} />
            </div>

            <div className="container-5">
              <Galaxylogo
                className="galaxylogo-320"
                img={galaxylogoVector}
                vector={galaxylogoImg}
                vectorClassName="galaxylogo-instance"
              />
            </div>

            <div className="container-5">
              <Fireblockslogo
                className="fireblockslogo-320"
                img={fireblockslogoImg}
                vector={fireblockslogoVector}
                vectorClassName="fireblockslogo-instance"
                vectorClassNameOverride="fireblockslogo-320-instance"
              />
            </div>

            <div className="container-5">
              <Consensyslogo
                className="consensyslogo-320"
                consensyslogo={consensyslogoConsensyslogo}
              />
            </div>

            <div className="container-5">
              <Bancologo className={bancologoBancologoClassName} />
            </div>

            <div className="container-5">
              <Centrifuge
                centrifuge={centrifugeCentrifuge}
                className="centrifuge-320"
              />
            </div>
          </div>

          <div className="container-4">
            <div className="container-5">
              <Jpmorganlogo
                className="jpmorganlogo-320"
                vector={jpmorganlogoImg}
                vectorClassName={jpmorganlogoVectorClassName}
              />
            </div>

            <div className="container-5">
              <Monetarylogo
                className="monetarylogo-320"
                img={monetarylogoVector8}
                imgClassName={monetarylogoVectorClassName}
                vector={monetarylogoVector7}
                vector1={monetarylogoVector6}
                vector2={monetarylogoVector5}
                vector3={monetarylogoVector4}
                vectorClassName={monetarylogoVectorClassNameOverride}
                vectorClassNameOverride="monetarylogo-320-instance"
              />
            </div>

            <div className="container-5">
              <Coinbaselogo
                className={coinbaselogoCoinbaselogoClassNameOverride}
              />
            </div>

            <div className="container-5">
              <Galaxylogo
                className="galaxylogo-320"
                img={galaxylogoVector1}
                vector={galaxylogoVector2}
                vectorClassName={galaxylogoVectorClassName}
              />
            </div>

            <div className="container-5">
              <Fireblockslogo
                className="fireblockslogo-320"
                img={fireblockslogoVector2}
                vector={fireblockslogoVector1}
                vectorClassName="fireblockslogo-instance"
                vectorClassNameOverride="fireblockslogo-320-instance"
              />
            </div>

            <div className="container-5">
              <Consensyslogo
                className="consensyslogo-320"
                consensyslogo={consensyslogoImg}
              />
            </div>

            <div className="container-5">
              <Bancologo className={bancologoBancologoClassNameOverride} />
            </div>

            <div className="container-5">
              <Centrifuge
                centrifuge={centrifugeImg}
                className="centrifuge-320"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="gradient" />

      <div className="gradient-2" />
    </div>
  );
};
