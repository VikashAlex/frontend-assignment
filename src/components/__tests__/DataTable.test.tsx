import { render, screen } from "@testing-library/react";
import { DataTable } from "../DataTable";

const columns = [
  { key: "name", title: "Name", dataIndex: "name" },
  { key: "email", title: "Email", dataIndex: "email" },
];

const data = [
  { id: 1, name: "Vikash", email: "vikash@example.com" },
];

test("renders table with data", () => {
  render(<DataTable data={data} columns={columns} />);
  expect(screen.getByText("Vikash")).toBeInTheDocument();
  expect(screen.getByText("vikash@example.com")).toBeInTheDocument();
});
