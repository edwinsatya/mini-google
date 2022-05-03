import { render, screen } from "@testing-library/react";
import InputText from "../InputText.jsx";

describe("InputText Atom Component", () => {
  it("Should be render without crashing", () => {
    render(<InputText />);
    const inputText = screen.getByTestId("input-text");
    expect(inputText).toBeTruthy();
  });

  it("Should be render in disable condition", () => {
    render(<InputText disabled={true} />);
    const inputText = screen.getByTestId("input-text");
    expect(inputText).toBeDisabled();
  });

  it("Should be render in enable condition", () => {
    render(<InputText disabled={false} />);
    const inputText = screen.getByTestId("input-text");
    expect(inputText).toBeEnabled();
  });
});
