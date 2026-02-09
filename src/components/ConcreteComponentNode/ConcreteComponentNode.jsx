import { Button } from "../../icons/Button";
import "./style.css";

export const ConcreteComponentNode = ({ className }) => {
  return (
    <div className={`concrete-component-node ${className}`}>
      <div className="button-4">
        <div className="heading-3">
          <div className="text-wrapper-7">Does Aave have risks?</div>
        </div>

        <Button className="button-5" />
      </div>
    </div>
  );
};
