import type { Meta, StoryObj } from "@storybook/react";
import { DataTable } from "./DataTable";

type User = {
  id: number;
  name: string;
  email: string;
};

const columns = [
  { key: "name", title: "Name", dataIndex: "name", sortable: true },
  { key: "email", title: "Email", dataIndex: "email", sortable: true },
];

const data: User[] = [
  { id: 1, name: "Vikash Kumar", email: "vikash@example.com" },
  { id: 2, name: "Rohit Sharma", email: "rohit@example.com" },
  { id: 3, name: "Amit Verma", email: "amit@example.com" },
];

const meta: Meta<typeof DataTable<User>> = {
  title: "Components/DataTable",
  component: DataTable<User>,
};

export default meta;
type Story = StoryObj<typeof DataTable<User>>;

export const Default: Story = {
  args: {
    data,
    columns,
  },
};

export const Loading: Story = {
  args: {
    data: [],
    columns,
    loading: true,
  },
};

export const Selectable: Story = {
  args: {
    data,
    columns,
    selectable: true,
  },
};
