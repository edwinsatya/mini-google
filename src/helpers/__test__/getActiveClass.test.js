import { getActiveClass } from "../getActiveClass";

describe("Get Active Class for Style", () => {
  it("Should return correct result with css active", () => {
    const typeCheck = "search";
    const type = "search";
    const activeStyle =
      "text-blue-500 border-b-blue-600 dark:text-blue-400 dark:border-b-blue-400";
    let activeClass = getActiveClass(typeCheck, type);
    expect(activeClass).toBe(activeStyle);
  });

  it("Should return correct result with css non active", () => {
    const typeCheck = "search";
    const type = "image";
    const nonActiveStyle = "border-b-transparent";
    const nonActiveClass = getActiveClass(typeCheck, type);
    expect(nonActiveClass).toBe(nonActiveStyle);
  });
});
