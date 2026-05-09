import { Button } from "../../icons/Button";
import "./style.css";

export const Whatisaave = ({
  className,
  buttonClassName,
  buttonStyleOverrideClassName,
}) => {
  return (
    <div className={`whatisaave ${className}`}>
      <div className={`button-2 ${buttonClassName}`}>
        <div className="heading">
          <div className="text-wrapper-7">What is Aave?</div>
        </div>

        <Button className={buttonStyleOverrideClassName} />
      </div>
    </div>
  );
};
