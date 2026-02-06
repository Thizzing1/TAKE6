import { FarLeftSkyBlue } from "../FarLeftSkyBlue";
import "./style.css";

export const Whyaavehero3_1440 = ({
  className,
  frameClassName,
  farLeftSkyBlueFarLeftSkyBlue = "/img/far-left-sky-blue-1440.svg",
}) => {
  return (
    <div className={`whyaavehero-3-1440 ${className}`}>
      <div className={`frame ${frameClassName}`}>
        <img className="group-33" alt="Group" src="/img/vector-292.png" />

        <FarLeftSkyBlue
          className="far-left-sky-blue-1440"
          farLeftSkyBlue={farLeftSkyBlueFarLeftSkyBlue}
        />
      </div>
    </div>
  );
};
