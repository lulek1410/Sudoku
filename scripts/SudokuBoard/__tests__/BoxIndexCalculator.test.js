import BoxIndexCalculator from "../BoxIndexCalculator.mjs";

describe("BoxIndexCalculatorTest", () => {
  test.each`
    value | expected
    ${0}  | ${0}
    ${3}  | ${3}
    ${5}  | ${3}
    ${6}  | ${6}
  `("startIndex", ({ value, expected }) => {
    expect(BoxIndexCalculator.startIndex(value)).toBe(expected);
  });

  test.each`
    value | expected
    ${0}  | ${2}
    ${3}  | ${5}
    ${5}  | ${5}
    ${6}  | ${8}
  `("endIndex", ({ value, expected }) => {
    expect(BoxIndexCalculator.endIndex(value)).toBe(expected);
  });
});
