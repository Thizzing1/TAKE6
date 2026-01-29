import { Bancologo } from "../Bancologo";
import { Centrifugelogo } from "../Centrifugelogo";
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
  centrifugelogoCentrifugelogo,
  jpmorganlogoVectorClassName,
  jpmorganlogoImg,
  monetarylogoVectorClassName,
  monetarylogoVector4,
  monetarylogoVector5,
  monetarylogoVectorClassNameOverride,
  monetarylogoVector6,
  monetarylogoVector7,
  monetarylogoVector8,
  coinbaselogoCoinbaselogoClassNameOverride,
  galaxylogoVector1,
  galaxylogoVector2,
  fireblockslogoVector1,
  fireblockslogoVectorClassName,
  fireblockslogoVectorClassNameOverride,
  fireblockslogoVector2,
  consensyslogoImg,
  bancologoBancologoClassNameOverride,
  centrifugelogoImg,
}) => {
  return (
    <div className={`logo-components-move ${className}`}>
      <div className="container-wrapper">
        <div className="container-3">
          <div className="container-4">
            <div className="container-5">
              <Jpmorganlogo
                className="jpmorganlogo-1024"
                vector={jpmorganlogoVector}
                vectorClassName="jpmorganlogo-instance"
              />
            </div>

            <div className="container-5">
              <Monetarylogo
                className="monetarylogo-1024"
                img={monetarylogoVector}
                imgClassName="monetarylogo-instance"
                vector={monetarylogoImg}
                vector1={monetarylogoVector1}
                vector2={monetarylogoVector2}
                vector3={monetarylogoVector3}
                vectorClassName="monetarylogo-instance"
                vectorClassNameOverride="monetarylogo-1024-instance"
              />
            </div>

            <div className="container-5">
              <Coinbaselogo className={coinbaselogoCoinbaselogoClassName} />
            </div>

            <div className="container-5">
              <Galaxylogo
                className="galaxylogo-1024"
                img={galaxylogoImg}
                vector={galaxylogoVector}
              />
            </div>

            <div className="container-5">
              <Fireblockslogo
                className="fireblockslogo-1024"
                img={fireblockslogoVector}
                vector={fireblockslogoImg}
                vectorClassName="fireblockslogo-instance"
              />
            </div>

            <div className="container-5">
              <Consensyslogo
                className="consensyslogo-1024"
                consensyslogo={consensyslogoConsensyslogo}
              />
            </div>

            <div className="container-5">
              <Bancologo className={bancologoBancologoClassName} />
            </div>

            <div className="container-5">
              <Centrifugelogo
                centrifugelogo={centrifugelogoCentrifugelogo}
                className="centrifugelogo-1024"
              />
            </div>
          </div>

          <div className="container-6">
            <div className="container-5">
              <Jpmorganlogo
                className="jpmorganlogo-1024"
                vector={jpmorganlogoImg}
                vectorClassName={jpmorganlogoVectorClassName}
              />
            </div>

            <div className="container-5">
              <Monetarylogo
                className="monetarylogo-1024"
                img={monetarylogoVector4}
                imgClassName="monetarylogo-instance"
                imgClassNameOverride={monetarylogoVectorClassNameOverride}
                vector={monetarylogoVector5}
                vector1={monetarylogoVector6}
                vector2={monetarylogoVector7}
                vector3={monetarylogoVector8}
                vectorClassName={monetarylogoVectorClassName}
                vectorClassNameOverride="monetarylogo-1024-instance"
              />
            </div>

            <div className="container-5">
              <Coinbaselogo
                className={coinbaselogoCoinbaselogoClassNameOverride}
              />
            </div>

            <div className="container-5">
              <Galaxylogo
                className="galaxylogo-1024"
                img={galaxylogoVector2}
                vector={galaxylogoVector1}
              />
            </div>

            <div className="container-5">
              <Fireblockslogo
                className="fireblockslogo-1024"
                img={fireblockslogoVector1}
                vector={fireblockslogoVector2}
                vectorClassName={fireblockslogoVectorClassName}
                vectorClassNameOverride={fireblockslogoVectorClassNameOverride}
              />
            </div>

            <div className="container-5">
              <Consensyslogo
                className="consensyslogo-1024"
                consensyslogo={consensyslogoImg}
              />
            </div>

            <div className="container-5">
              <Bancologo className={bancologoBancologoClassNameOverride} />
            </div>

            <div className="container-5">
              <Centrifugelogo
                centrifugelogo={centrifugelogoImg}
                className="centrifugelogo-1024"
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
