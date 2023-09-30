import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "@/shared/ui";
import { HeartFilled } from "@ant-design/icons";

const meta: Meta<typeof Button> = {
  title: "Controls/Button",
  component: Button,
  tags: ["autodocs"],
  args: {
    children: "Be happy",
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {};

export const WithIcon: Story = {
  args: {
    icon: <HeartFilled />,
  },
};
