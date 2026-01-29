import { Button } from "../../icons/Button";
import "./style.css";

export const BackgroundWrapper = ({ className }) => {
  return (
    <div className={`background-wrapper ${className}`}>
      <div className="button-3">
        <div className="heading-2">
          <p className="p">Where are supplied tokens stored?</p>
        </div>

        <Button className="icon-instance-node" />
      </div>
    </div>
  );
};
