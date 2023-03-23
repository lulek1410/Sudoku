import PencilTool from "../PencilTool.mjs";
import * as fs from "fs";
import * as path from "path";

describe("PencilToolTest", () => {
  const html = fs.readFileSync(path.resolve("./html/sudoku.html"), "utf8");
  document.body.innerHTML = html;

  // cant test css properties of #start-button as jest does not see the css styling unless its done
  // as inline
  test("pencilClicked", () => {
    expect(PencilTool.isPencilActive()).toBe(false);
    PencilTool.pencilClicked();
    expect(PencilTool.isPencilActive()).toBe(true);
    PencilTool.pencilClicked();
    expect(PencilTool.isPencilActive()).toBe(false);
  });
});
