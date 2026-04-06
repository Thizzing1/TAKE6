import "./style.css";

export const SignupButton = ({ text = "Sign Up", className }) => {
  return (
    <button className={`signup-button ${className}`}>
      <div className="container-12">
        <div className="text-8">{text}</div>
      </div>
    </button>
  );
};
