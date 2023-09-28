import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "@/shared/ui";
import { BellFilled } from "@ant-design/icons";

const meta: Meta<typeof Button> = {
  title: "Controls/Button",
  component: Button,
  tags: ["autodocs"],
  args: {
    children: "Button",
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Icon: Story = {
  args: {
    icon: <BellFilled />,
    iconPosition: "end",
    loading: true,
  },
};
