import { FarLeftSkyBlue } from "../FarLeftSkyBlue";
import "./style.css";

export const DivWrapper = ({
  className,
  frameClassName,
  farLeftSkyBlueFarLeftSkyBlue = "/img/far-left-sky-blue-1440.svg",
}) => {
  return (
    <div className={`div-wrapper ${className}`}>
      <div className={`frame ${frameClassName}`}>
        <img className="group-33" alt="Group" src="/img/vector-295.png" />

        <FarLeftSkyBlue
          className="far-left-sky-blue-1440"
          farLeftSkyBlue={farLeftSkyBlueFarLeftSkyBlue}
        />
      </div>
    </div>
  );
};
