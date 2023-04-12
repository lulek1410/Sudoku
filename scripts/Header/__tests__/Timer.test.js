import * as fs from "fs";
import * as path from "path";
import Timer from "../Timer.mjs";

describe("TimerTest", () => {
  const html = fs.readFileSync(path.resolve("./html/index.html"), "utf8");
  document.body.innerHTML = html;
  jest.useFakeTimers();
  jest.spyOn(global, "setInterval");
  jest.spyOn(global, "clearInterval");

  beforeEach(() => {
    Timer.stopTimer();
    clearInterval.mockClear();
    setInterval.mockClear();
  });

  test("startTimer", () => {
    Timer.startTimer();
    jest.advanceTimersByTime(73000);
    expect(setInterval).toBeCalledTimes(1);
    expect($("#timer").text()).toBe("01:13");
  });

  test("stopTimer", () => {
    Timer.startTimer();
    jest.advanceTimersByTime(73000);
    Timer.stopTimer();
    expect(clearInterval).toBeCalledTimes(1);
  });

  test("pauseTimer", () => {
    Timer.startTimer();
    jest.advanceTimersByTime(13000);
    expect($("#timer").text()).toBe("00:13");
    Timer.pauseTimer();
    expect(clearInterval).toBeCalledTimes(1);
    jest.advanceTimersByTime(23000);
    expect($("#timer").text()).toBe("00:13");
    Timer.startTimer();
    jest.advanceTimersByTime(13000);
    expect($("#timer").text()).toBe("00:26");
  });
});
