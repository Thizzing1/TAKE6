import { Component5 } from ".";

export default {
  title: "Components/Component5",
  component: Component5,
  tags: ["autodocs"],

  argTypes: {
    variant: {
      options: ["one"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    text: "Go to the Forum",
    variant: "one",
    hover: true,
    className: "",
  },
};
