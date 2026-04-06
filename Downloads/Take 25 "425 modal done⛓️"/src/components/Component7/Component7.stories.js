import { Component7 } from ".";

export default {
  title: "Components/Component7",
  component: Component7,
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
    text: "Blog",
    variant: "one",
    className: "",
  },
};
