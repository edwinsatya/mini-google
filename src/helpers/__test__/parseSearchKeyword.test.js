import { parseSearchKeyword } from "../parseSearchKeyword";

describe("parseSearchKeyword", () => {
  it("parses ?q= param", () => {
    expect(parseSearchKeyword("?q=edwin+satya")).toBe("edwin satya");
  });

  it("parses legacy ?query= param", () => {
    expect(parseSearchKeyword("?query=elon+musk")).toBe("elon musk");
  });

  it("returns empty string when no query", () => {
    expect(parseSearchKeyword("")).toBe("");
  });
});
