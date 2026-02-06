import { VariantHoverTrueWrapper } from ".";

export default {
  title: "Components/VariantHoverTrueWrapper",
  component: VariantHoverTrueWrapper,

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
