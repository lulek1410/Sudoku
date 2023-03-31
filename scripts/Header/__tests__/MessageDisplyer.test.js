import MessageDisplayer from "../MessageDisplyer.mjs";
import * as fs from "fs";
import * as path from "path";

describe("MessageDisplauerTest", () => {
  const html = fs.readFileSync(path.resolve("./html/index.html"), "utf8");
  document.body.innerHTML = html;
  const $infoField = $("#info");

  beforeEach(() => {
    $infoField.text("");
  });

  test.each([
    {
      numberOfEmptyCells: 5,
      numberOfMistakes: 0,
      expected: "You did not fill 5 cells!",
    },
    {
      numberOfEmptyCells: 0,
      numberOfMistakes: 3,
      expected: "You made 3 mistakes!",
    },
    {
      numberOfEmptyCells: 0,
      numberOfMistakes: 0,
      expected: "You won! Congratulations!",
    },
  ])("displayMessage", ({ numberOfEmptyCells, numberOfMistakes, expected }) => {
    expect($infoField.text()).toBe("");
    MessageDisplayer.displayMessage(numberOfEmptyCells, numberOfMistakes);
    expect($infoField.text()).toBe(expected);
  });

  test("resetInfo", () => {
    MessageDisplayer.displayMessage(5, 0);
    expect($infoField.text()).not.toBe("");
    MessageDisplayer.resetInfo();
    expect($infoField.text()).toBe("");
  });
});
