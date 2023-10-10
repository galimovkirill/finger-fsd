import type { Meta, StoryObj } from "@storybook/react";

import { Input } from "@/shared/ui";
import { useState } from "react";
import { UserOutlined, EyeFilled } from "@ant-design/icons";

const meta: Meta<typeof Input> = {
  title: "Controls/Input",
  component: Input,
  tags: ["autodocs"],
  args: {
    placeholder: "Your name",
    placeholderAsLabel: true,
    value: "John Doe",
    onEndIconClick: () => {
      alert("End icon click");
    },
  },
  parameters: {
    layout: "centered",
  },
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState(args.value);

    return <Input {...args} value={value} onChange={(v) => setValue(v)} />;
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const StartIcon: Story = {
  args: {
    startIcon: <UserOutlined />,
  },
};

export const EndIcon: Story = {
  args: {
    endIcon: <EyeFilled />,
  },
};

export const Clearable: Story = {
  args: {
    endIcon: <EyeFilled />,
    clearable: true,
  },
};
