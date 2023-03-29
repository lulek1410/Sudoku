import PencilTool from "../PencilTool.mjs";
import * as fs from "fs";
import * as path from "path";

describe("PencilToolTest", () => {
  const html = fs.readFileSync(path.resolve("./html/sudoku.html"), "utf8");
  document.body.innerHTML = html;
  const pencilButton = $("#pencil-button");

  test("pencilClicked", () => {
    console.log(PencilTool.pencilButton == pencilButton);
    expect(PencilTool.isPencilActive()).toBe(false);
    PencilTool.pencilClicked();
    expect(pencilButton.hasClass("button-active")).toBe(true);
    expect(PencilTool.isPencilActive()).toBe(true);
    PencilTool.pencilClicked();
    expect(pencilButton.hasClass("button-active")).toBe(false);
    expect(PencilTool.isPencilActive()).toBe(false);
  });

  test("resetPencilButton", () => {
    PencilTool.pencilClicked();
    expect(pencilButton.hasClass("button-active")).toBe(true);
    PencilTool.resetPencilButton();
    expect(pencilButton.hasClass("button-active")).toBe(false);
  });
});
