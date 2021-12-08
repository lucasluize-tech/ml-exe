const addCommas = require("./addCommas");

describe("#addCommas", () => {
  test("it is a function", () => {
    expect(typeof addCommas).toBe("function");
  });

  it("Should add right commas when digits > 3", () => {
    expect(addCommas(1234)).toBe("1,234");
    expect(addCommas(1000000)).toBe("1,000,000");
    expect(addCommas(9876543210)).toBe("9,876,543,210");
  });

  it("Should return strings with no commas when digits < 4", () => {
    expect(addCommas(6)).toBe("6");
  });

  it("Should return negative numbers", () => {
    expect(addCommas(-10)).toBe("-10");
    expect(addCommas(-5678)).toBe("-5,678");
  });

  it("Should add decimals if exists", () => {
    expect(addCommas(12345.678)).toBe("12,345.678");
    expect(addCommas(-3141592.65)).toBe("-3,141,592.65");
  });
});
