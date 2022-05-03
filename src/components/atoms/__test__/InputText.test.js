import { render } from "@testing-library/react";
import InputText from "../InputText.jsx";

describe("Render input text atom component", () => {
  it("Should be render without crashing", () => {
    const inputText = document.createElement("input");
    render(<InputText />, inputText);
  });
});
