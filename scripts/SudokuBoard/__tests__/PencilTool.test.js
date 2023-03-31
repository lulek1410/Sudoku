import PencilTool from "../PencilTool.mjs";
import * as fs from "fs";
import * as path from "path";

describe("PencilToolTest", () => {
  const html = fs.readFileSync(path.resolve("./html/index.html"), "utf8");
  document.body.innerHTML = html;
  const $pencilButton = $("#pencil-button");

  test("pencilClicked", () => {
    console.log(PencilTool.pencilButton == $pencilButton);
    expect(PencilTool.isPencilActive()).toBe(false);
    PencilTool.pencilClicked();
    expect($pencilButton.hasClass("button-clicked")).toBe(true);
    expect(PencilTool.isPencilActive()).toBe(true);
    PencilTool.pencilClicked();
    expect($pencilButton.hasClass("button-clicked")).toBe(false);
    expect(PencilTool.isPencilActive()).toBe(false);
  });

  test("resetPencilButton", () => {
    PencilTool.pencilClicked();
    expect($pencilButton.hasClass("button-clicked")).toBe(true);
    PencilTool.resetPencilButton();
    expect($pencilButton.hasClass("button-clicked")).toBe(false);
  });
});
