import { Button375_9 } from "../../icons/Button375_9";
import "./style.css";

export const Whereare = ({ className }) => {
  return (
    <div className={`whereare ${className}`}>
      <div className="button-2">
        <div className="where-are-supplied-wrapper">
          <div className="where-are-supplied">
            Where are supplied tokens
            <br />
            stored?
          </div>
        </div>

        <Button375_9 className="button-375-9-instance" />
      </div>
    </div>
  );
};
