import { Button375_9 } from "../../icons/Button375_9";
import "./style.css";

export const Whatis = ({ className }) => {
  return (
    <div className={`whatis ${className}`}>
      <div className="button-4">
        <div className="heading-3">
          <p className="p">What is the Aave token?</p>
        </div>

        <Button375_9 className="button-5" />
      </div>
    </div>
  );
};
