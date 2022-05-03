import { render, screen } from "@testing-library/react";
import InputText from "../InputText.jsx";

describe("Render input text atom component", () => {
  it("Should be render without crashing", () => {
    render(<InputText />);
    const inputText = screen.getByTestId("input-text");
    expect(inputText).toBeTruthy();
  });
});
