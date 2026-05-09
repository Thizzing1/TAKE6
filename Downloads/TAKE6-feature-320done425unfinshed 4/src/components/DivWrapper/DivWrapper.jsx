import { FarLeftSkyBlue } from "../FarLeftSkyBlue";
import "./style.css";

export const DivWrapper = ({
  className,
  frameClassName,
  farLeftSkyBlueFarLeftSkyBlue = "/img/far-left-sky-blue-325.svg",
}) => {
  return (
    <div className={`div-wrapper ${className}`}>
      <div className={`frame ${frameClassName}`}>
        <img className="group-6" alt="Group" src="/img/vector-265.png" />

        <FarLeftSkyBlue
          className="far-left-sky-blue-325"
          farLeftSkyBlue={farLeftSkyBlueFarLeftSkyBlue}
        />
      </div>
    </div>
  );
};
