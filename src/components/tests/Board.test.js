import { render, screen } from "@testing-library/react";
import { Board } from "../Board";

const mockData = {
  uploads: 10,
  successfulUploads: 7,
  linesAttempted: 20,
  linesSaved: 10,
  lastUploadDate: 1231231231,
};

test("Renders board static info", () => {
  render(<Board data={mockData} />);
  const element = screen.getByText(/Upload success/i);
  const element2 = screen.getByText(/Lines saved/i);
  const element3 = screen.getByText(/Sales/i);

  expect(element).toBeInTheDocument();
  expect(element2).toBeInTheDocument();
  expect(element3).toBeInTheDocument();
});

test("Renders props value", () => {
  render(<Board data={mockData} />);
  const uploadRate = screen.getByText(/70%/i);
  const saveRate = screen.getByText(/50%/i);
  const uploads = screen.getByText(/10 uploads/i);
  const lines = screen.getByText((content, node) => {
    const hasText = (node) => node.textContent.match("10 lines");
    const nodeHasText = hasText(node);
    const childrenDontHaveText = Array.from(node.children).every(
      (child) => !hasText(child)
    );
    return nodeHasText && childrenDontHaveText;
  });

  expect(uploadRate).toBeInTheDocument();
  expect(saveRate).toBeInTheDocument();
  expect(uploads).toBeInTheDocument();
  expect(lines).toBeInTheDocument();
});
