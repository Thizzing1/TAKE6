import { useReducer } from "react";
import { Component1_32_11 } from "../../icons/Component1_32_11";
import { Component1_58_1 } from "../../icons/Component1_58_1";
import "./style.css";

export const Component5 = ({
  text = "Go to the Forum",
  variant,
  hover,
  className,
  href,
  href1,
}) => {
  const [state, dispatch] = useReducer(reducer, {
    variant: variant || "one",

    hover: hover || false,
  });

  return (
    <a
      className={`component-5 hover-1-${state.hover} ${className}`}
      href={href}
      rel="noopener noreferrer"
      target="_blank"
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
    >
      {state.hover && (
        <>
          <a
            className="text-7"
            href={href1}
            rel="noopener noreferrer"
            target="_blank"
          >
            {text}
          </a>

          <Component1_58_1 className="component-1-58-1" />
        </>
      )}

      {!state.hover && (
        <>
          <a
            className="text-8"
            href={href1}
            rel="noopener noreferrer"
            target="_blank"
          >
            {text}
          </a>

          <Component1_32_11
            className="component-1-32-11-instance"
            color="#1C4886"
          />
        </>
      )}
    </a>
  );
};

function reducer(state, action) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        hover: true,
      };

    case "mouse_leave":
      return {
        ...state,
        hover: false,
      };
  }

  return state;
}
