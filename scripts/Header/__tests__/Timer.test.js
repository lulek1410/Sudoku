import * as fs from "fs";
import * as path from "path";
import Timer from "../Timer.mjs";

describe("TimerTest", () => {
  const html = fs.readFileSync(path.resolve("./index.html"), "utf8");
  document.body.innerHTML = html;
  jest.useFakeTimers();
  jest.spyOn(global, "setInterval");
  jest.spyOn(global, "clearInterval");

  test("startTimer", () => {
    Timer.startTimer();
    jest.advanceTimersByTime(73000);
    expect(setInterval).toBeCalledTimes(1);
    expect($("#timer").text()).toBe("01:13");
  });

  test("stopTimer", () => {
    Timer.stopTimer();
    expect(clearInterval).toBeCalledTimes(1);
  });
});
