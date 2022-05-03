import { render } from "@testing-library/react";
import Button from "../Button";
import renderer from "react-test-renderer";

describe("Render Button Atom Component", () => {
  it("Should be render without crashing", () => {
    const button = document.createElement("button");
    render(<Button />, button);
  });

  it("Should be render correctly", () => {
    const { getByTestId } = render(<Button text="Search" />);
    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(getByTestId("button")).toHaveTextContent("Search");
  });

  it("Matches button snapshot", () => {
    const buttonTree = renderer.create(<Button text="Search" />).toJSON();
    expect(buttonTree).toMatchSnapshot();
  });
});
