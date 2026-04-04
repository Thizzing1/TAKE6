import { DoesAave } from "../DoesAave";
import { SeemoreButton } from "../SeemoreButton";
import { Whatis } from "../Whatis";
import { Whatisaave } from "../Whatisaave";
import { Whereare } from "../Whereare";
import "./style.css";

export const Faqs = ({ className, href }) => {
  return (
    <div className={`faqs ${className}`}>
      <div className="container-4">
        <Whatisaave className="design-component-instance-node" />
        <Whereare className="design-component-instance-node" />
        <DoesAave className="design-component-instance-node" />
        <Whatis className="design-component-instance-node" />
      </div>

      <SeemoreButton
        className="seemore-button-375"
        href="https://aave.com/faq"
        href1={href}
        text="See More"
      />
    </div>
  );
};
