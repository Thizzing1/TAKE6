import { Button } from "../../icons/Button";
import "./style.css";

export const Whatisthe = ({ className }) => {
  return (
    <div className={`whatisthe ${className}`}>
      <div className="button-5">
        <div className="heading-3">
          <p className="p">What is the Aave token?</p>
        </div>

        <Button className="button-6" />
      </div>
    </div>
  );
};
