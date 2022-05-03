import { render, screen } from "@testing-library/react";
import InputText from "../InputText.jsx";

describe("InputText Atom Component", () => {
  it("Should be render without crashing", () => {
    render(<InputText />);
    const inputText = screen.getByTestId("input-text");
    expect(inputText).toBeTruthy();
  });

  it("Should be render in disable condition", () => {
    const classDisabed =
      "w-full bg-gray-200 dark:bg-gray-800 hover:dark:bg-gray-700";

    render(<InputText disabled={true} />);
    const inputText = screen.getByTestId("input-text");
    expect(inputText).toBeDisabled();
    expect(inputText).toHaveClass(classDisabed);
  });

  it("Should be render in enable condition", () => {
    render(<InputText disabled={false} />);
    const inputText = screen.getByTestId("input-text");
    expect(inputText).toBeEnabled();
  });

  it("Should be render with type correctly", () => {
    render(<InputText type="text" />);
    const inputText = screen.getByTestId("input-text");
    expect(inputText).toHaveAttribute("type", "text");
  });
});
