import { useReducer } from "react";
import "./style.css";

export const Component8 = ({
  variant,
  hover,
  className,
  overlayGradientClassName,
}) => {
  const [state, dispatch] = useReducer(reducer, {
    variant: variant || "one",

    hover: hover || false,
  });

  return (
    <div
      className={`component-8 hover-2-${state.hover} variant-1-${state.variant} ${className}`}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
    >
      <div className={`overlay-gradient ${overlayGradientClassName}`} />
    </div>
  );
};

function reducer(state, action) {
  if (state.hover === false && state.variant === "one") {
    switch (action) {
      case "mouse_enter":
        return {
          hover: true,

          variant: "three",
        };
    }
  }

  if (state.hover === false && state.variant === "two") {
    switch (action) {
      case "mouse_enter":
        return {
          hover: true,

          variant: "three",
        };
    }
  }

  if (state.hover === false && state.variant === "three") {
    switch (action) {
      case "mouse_enter":
        return {
          hover: true,

          variant: "three",
        };
    }
  }

  switch (action) {
    case "mouse_leave":
      return {
        ...state,
        hover: false,
      };
  }

  return state;
}
