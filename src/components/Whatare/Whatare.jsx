import { Button } from "../../icons/Button";
import "./style.css";

export const Whatare = ({ className }) => {
  return (
    <div className={`whatare ${className}`}>
      <div className="button-3">
        <div className="where-are-supplied-wrapper">
          <div className="where-are-supplied">
            Where are supplied
            <br />
            tokens stored?
          </div>
        </div>

        <Button className="button-instance" />
      </div>
    </div>
  );
};
