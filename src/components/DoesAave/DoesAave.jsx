import { Button } from "../../icons/Button";
import "./style.css";

export const DoesAave = ({ className }) => {
  return (
    <div className={`does-aave ${className}`}>
      <div className="button-4">
        <div className="heading-2">
          <div className="text-wrapper-8">Does Aave have risks?</div>
        </div>

        <Button className="icon-instance-node" />
      </div>
    </div>
  );
};
