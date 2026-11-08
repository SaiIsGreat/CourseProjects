import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import UserForm from "./UserForm";
import type { User } from "./App";

type Props = React.ComponentProps<typeof UserForm>;

const defaultProps: Props = {
  onUserAdd: jest.fn(), // vi.fn() if you're on Vitest
};

test("it shows two inputs and a button", () => {
  // Render the component
  render(<UserForm {...defaultProps} />);

  // Manipulate the component or find an element in it
  const inputs = screen.getAllByRole("textbox");
  const button = screen.getByRole("button");

  // Assertion - make sure the component is doing
  // what we expect it to do
  expect(inputs).toHaveLength(2);
  expect(button).toBeInTheDocument();
});
