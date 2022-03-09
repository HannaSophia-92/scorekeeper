import Input from "./Input";

export default {
  title: "components/Input",
  component: Input,
};

const Template = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {};
