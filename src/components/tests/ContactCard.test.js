import { render, screen } from "@testing-library/react";
import { ContactCard } from "../ContactCard";

const mockData = {
  name: "Leonardo",
  email: "leomuzicarvalho@gmail.com",
};

test("Renders static contact info", () => {
  render(<ContactCard data={mockData} />);
  const el = screen.getByText(/020 3362 4208/i);
  const el2 = screen.getByText(/YOUR FEEFO SUPPORT CONTACT/i);
  expect(el).toBeInTheDocument();
  expect(el2).toBeInTheDocument();
});

test("Renders dynamic contact info", () => {
  render(<ContactCard data={mockData} />);
  const el = screen.getByText("leomuzicarvalho@gmail.com");
  const el2 = screen.getByText("Leonardo");
  expect(el).toBeInTheDocument();
  expect(el2).toBeInTheDocument();
});
