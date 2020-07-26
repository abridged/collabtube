const Feed = require("../utils/Feed");

describe("test function", () => {
  test("passes when using an asymmetrical matcher", () => {
    expect([]).toEqual(expect.toBeArray());
  });

  test("test", () => {
    const c = Feed.test();
    expect(c).toContainEntry(["test", "hello"]);
  });
});
