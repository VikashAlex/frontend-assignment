import { render, screen, fireEvent } from "@testing-library/react";
import { InputField } from "../InputField";

test("renders InputField with label", () => {
  render(<InputField label="Name" placeholder="Enter name" />);
  expect(screen.getByLabelText("Name")).toBeInTheDocument();
});

test("updates value on change", () => {
  render(<InputField label="Name" />);
  const input = screen.getByLabelText("Name") as HTMLInputElement;
  fireEvent.change(input, { target: { value: "Vikash" } });
  expect(input.value).toBe("Vikash");
});
