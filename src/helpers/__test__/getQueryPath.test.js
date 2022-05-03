import { getQueryPath } from "../getQueryPath";

describe("Get Query Path Url", () => {
  it("Should return correct path url", () => {
    const type = "search";
    const keyword = "edwin satya";
    const queryPathUrl = getQueryPath(type, keyword);
    expect(queryPathUrl).toBe(`/${type}?q=edwin+satya`);
  });
});
