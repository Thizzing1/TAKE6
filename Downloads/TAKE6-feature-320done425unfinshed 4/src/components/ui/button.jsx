import * as React from "react";
import "./button.css";

const Button = React.forwardRef(
  ({ className = "", variant = "default", asChild = false, children, ...props }, ref) => {
    const variantClass = variant === "ghost" ? "btn-ghost" : "btn-default";
    return (
      <button
        ref={ref}
        className={`btn ${variantClass} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button };
