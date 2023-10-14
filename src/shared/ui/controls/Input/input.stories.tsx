import type { Meta, StoryObj } from "@storybook/react";

import { Input } from "@/shared/ui";
import { useState } from "react";
import { UserOutlined, EyeFilled } from "@ant-design/icons";
import { InputProps } from "@/shared/ui/controls/Input/types";

const render = (args: InputProps) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [value, setValue] = useState(args.value);

  return <Input {...args} value={value} onChange={(v) => setValue(v)} />;
};

const meta: Meta<typeof Input> = {
  title: "Controls/Input",
  component: Input,
  tags: ["autodocs"],
  args: {
    placeholder: "Your name",
    value: "John Doe",
    placeholderAsLabel: true,
  },
  parameters: {
    layout: "centered",
  },
  render: (args) => render(args),
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholderAsLabel: false,
    value: "",
  },
};

export const PlaceholderAsLabel: Story = {
  args: {
    placeholderAsLabel: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const Icon: Story = {
  render: (args) => {
    return (
      <div style={{ display: "flex", gap: "16px" }}>
        {render({ ...args, startIcon: <UserOutlined /> })}
        {render({
          ...args,
          endIcon: <EyeFilled />,
          onEndIconClick: () => {
            alert("End icon click");
          },
        })}
      </div>
    );
  },
};

export const Clearable: Story = {
  args: {
    clearable: true,
  },
};
