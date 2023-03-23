import HeaderManager from "../HeaderManager.mjs";
import * as fs from "fs";
import * as path from "path";

describe("HeaderManagerTest", () => {
  const html = fs.readFileSync(path.resolve("./html/sudoku.html"), "utf8");
  document.body.innerHTML = html;
  const sut = new HeaderManager();

  beforeEach(() => {
    $("#difficulty-level").text("Easy");
  });

  test("handleGameStart", () => {});
  test.each([
    {
      buttonName: "#left-arrow-button",
      className: "fa-chevron-left",
      expected: "Hard",
    },
    {
      buttonName: "#right-arrow-button",
      className: "fa-chevron-right",
      expected: "Medium",
    },
  ])("changeDifficulty", ({ buttonName, className, expected }) => {
    const leftArrow = $(buttonName)[0].classList;
    leftArrow.add(className);
    const event = {
      target: { classList: leftArrow },
    };
    sut.changeDifficulty(event);
    expect($("#difficulty-level").text()).toBe(expected);
  });
});
