import { Button } from "../../icons/Button";
import "./style.css";

export const Background1 = ({ className }) => {
  return (
    <div className={`background-1 ${className}`}>
      <div className="button-6">
        <div className="heading-4">
          <p className="text-wrapper-8">What is the Aave token?</p>
        </div>

        <Button className="button-7" />
      </div>
    </div>
  );
};
