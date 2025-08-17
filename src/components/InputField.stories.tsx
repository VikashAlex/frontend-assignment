import type { Meta, StoryObj } from "@storybook/react";
import { InputField } from "./InputField";

const meta: Meta<typeof InputField> = {
  title: "Components/InputField",
  component: InputField,
};

export default meta;
type Story = StoryObj<typeof InputField>;

export const Default: Story = {
  args: {
    label: "",
    placeholder: "vikash",
    helperText: "This is a helper text",
    invalid: true,
    size: "md",
    variant: "outlined"
  },
};

export const Error: Story = {
  args: {
    label: "Email",
    placeholder: "Enter your email",
    invalid: true,
    errorMessage: "Invalid email format",
  },
};

export const Disabled: Story = {
  args: {
    label: "Password",
    placeholder: "Enter password",
    disabled: true,
  },
};
