import HeaderManager from "../HeaderManager.mjs";
import * as fs from "fs";
import * as path from "path";
import Timer from "../Timer.mjs";

jest.mock("../Timer.mjs");

describe("HeaderManagerTest", () => {
  const html = fs.readFileSync(path.resolve("./index.html"), "utf8");
  document.body.innerHTML = html;
  const sut = new HeaderManager();

  beforeEach(() => {
    $("#difficulty-level").text("Easy");
  });

  test("handleGameStart", () => {
    expect($("#start-button").text()).toBe("Start");
    sut.handleGameStart();
    expect(Timer.startTimer).toBeCalledTimes(1);
    expect($("#start-button").text()).toBe("Stop");
  });

  test("handleGameEnd", () => {
    expect($("#start-button").text()).toBe("Stop");
    sut.handleGameStop();
    expect(Timer.stopTimer).toBeCalledTimes(1);
    expect($("#start-button").text()).toBe("Start");
  });

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
    const $arrowButton = $(buttonName)[0].classList;
    $arrowButton.add(className);
    sut.changeDifficulty({ target: { classList: $arrowButton } });
    expect($("#difficulty-level").text()).toBe(expected);
  });
});
