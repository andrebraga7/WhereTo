import { render, screen } from "@testing-library/react";
import Landing from "../Landing";

test("Check Landing component loads correctly", () => {
  render(<Landing />);

  const title = screen.getByText("WhereTo?");
  const button = screen.getByRole("button", { name: "Start Journey" });

  expect(title).toBeInTheDocument();
  expect(button).toBeInTheDocument();
});
