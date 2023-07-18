import { render, screen } from "@testing-library/react";
import Landing from "../Landing";

test("check Landing component loads", () => {
  render(<Landing />);
  const title = screen.getByText("WhereTo?");
  expect(title).toBeInTheDocument();
});
