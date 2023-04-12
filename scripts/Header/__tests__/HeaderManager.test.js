import HeaderManager from "../HeaderManager.mjs";
import * as fs from "fs";
import * as path from "path";
import Timer from "../Timer.mjs";

jest.mock("../Timer.mjs");

describe("HeaderManagerTest", () => {
  const html = fs.readFileSync(path.resolve("./html/index.html"), "utf8");
  document.body.innerHTML = html;
  const sut = new HeaderManager();

  beforeEach(() => {
    sut.handleGameStop();
    Timer.startTimer.mockClear();
    Timer.pauseTimer.mockClear();
    Timer.stopTimer.mockClear();
    $("#difficulty-level").text("Easy");
  });

  test("handleGameStart", () => {
    expect($("#start-button").text()).toBe("Start");
    sut.handleGameStart();
    expect(Timer.startTimer).toBeCalledTimes(1);
    expect($("#start-button").text()).toBe("Stop");
  });

  test("handleGamePause", () => {
    sut.handleGamePause();
    expect(Timer.pauseTimer).toBeCalledTimes(1);
  });

  test("handleGameResume", () => {
    sut.handleGameResume();
    expect(Timer.startTimer).toBeCalledTimes(1);
  });

  test("handleGameEnd", () => {
    sut.handleGameStart();
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
