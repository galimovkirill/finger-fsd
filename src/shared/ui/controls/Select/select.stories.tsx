import type { Meta, StoryObj } from "@storybook/react";

import { Select } from "@/shared/ui";
import { SelectOption, SelectProps } from "@/shared/ui/controls/Select/types";
import { useState } from "react";

const selectOptions: SelectProps["options"] = [
  {
    value: "javascript",
    label: "Learn JavaScript",
  },
  {
    value: "html",
    label: "Learn HTML",
  },
  {
    value: "css",
    label: "Learn CSS",
  },
  {
    value: "php",
    label: "Learn PHP",
    disabled: true,
  },
];

const meta: Meta<typeof Select> = {
  title: "Controls/Select",
  component: Select,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    options: selectOptions,
  },
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selectedOption, setSelectedOption] = useState(args.options[0]);

    const handleChange = (value: SelectOption) => {
      setSelectedOption(value);
    };

    return (
      <Select
        {...args}
        value={selectedOption}
        onChange={handleChange}
        style={{ minWidth: "200px" }}
      />
    );
  },
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Default: Story = {};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
