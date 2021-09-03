import { render, screen } from "@testing-library/react";
import { Heading } from "../Heading";

const mockData = {
  name: "Leonardo",
  email: "leomuzicarvalho@gmail.com",
};

test("Renders static header info", () => {
  render(<Heading data={mockData} />);
  const el = screen.getByText(/Account Overview/i);
  expect(el).toBeInTheDocument();
});
