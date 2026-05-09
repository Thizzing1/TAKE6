import { Component8 } from ".";

export default {
  title: "Components/Component8",
  component: Component8,
  tags: ["autodocs"],

  argTypes: {
    variant: {
      options: ["two", "three", "one"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    variant: "two",
    hover: true,
    className: "",
    overlayGradientClassName: "",
  },
};
