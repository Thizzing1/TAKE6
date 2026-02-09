import { VariantHoverTrueWrapper } from ".";

export default {
  title: "Components/VariantHoverTrueWrapper",
  component: VariantHoverTrueWrapper,
  tags: ["autodocs"],

  argTypes: {
    variant: {
      options: ["two", "one"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    text: "Blog",
    variant: "two",
    className: "",
  },
};
