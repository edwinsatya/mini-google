import { render, screen } from "@testing-library/react";
import Button from "../Button";
import renderer from "react-test-renderer";

describe("Render Button Atom Component", () => {
  it("Should be render without crashing", () => {
    const button = document.createElement("button");
    render(<Button />, button);
  });

  it("Should be render correctly", () => {
    render(<Button text="Search" />);
    const button = screen.getByTestId("button");
    expect(button).toHaveTextContent("Search");
  });

  it("Matches button snapshot", () => {
    const tree = renderer.create(<Button text="Search" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
