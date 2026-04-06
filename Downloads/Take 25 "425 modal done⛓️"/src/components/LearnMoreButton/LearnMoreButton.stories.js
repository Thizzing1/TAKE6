import { LearnMoreButton } from ".";

export default {
  title: "Components/LearnMoreButton",
  component: LearnMoreButton,
};

export const Default = {
  render: (args) => <LearnMoreButton {...args} />,
  args: {
    className: "",
    containerClassName: "",
  },
};