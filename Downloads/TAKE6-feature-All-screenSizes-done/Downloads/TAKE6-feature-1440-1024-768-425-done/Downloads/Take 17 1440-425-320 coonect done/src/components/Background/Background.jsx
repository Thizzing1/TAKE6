import { Button } from "../../icons/Button";
import "./style.css";

export const Background = ({ className }) => {
  return (
    <div className={`background ${className}`}>
      <div className="button-2">
        <div className="heading">
          <div className="text-wrapper-6">What is Aave?</div>
        </div>

        <Button className="button-instance" />
      </div>
    </div>
  );
};
