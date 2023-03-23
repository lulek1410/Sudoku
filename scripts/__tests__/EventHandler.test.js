import EventHandler from "../EventHandler.mjs";
import SudokuGridManager from "../SudokuBoard/SudokuGridManager.mjs";
import HeaderManager from "../Header/HeaderManager.mjs";
import * as fs from "fs";
import * as path from "path";

jest.mock("../SudokuBoard/SudokuGridManager.mjs");
jest.mock("../Header/HeaderManager.mjs");

describe("EventHandlerTest", () => {
  const html = fs.readFileSync(path.resolve("./html/sudoku.html"), "utf8");
  document.body.innerHTML = html;
  const sudokuGridManager = new SudokuGridManager();
  const headerManager = new HeaderManager();

  beforeEach(() => {
    SudokuGridManager.mockClear();
    HeaderManager.mockClear();
    headerManager.changeDifficulty.mockClear();
    headerManager.handleGameStart.mockClear();
    sudokuGridManager.startGame.mockClear();
    sudokuGridManager.fillCellWithInput.mockClear();
    sudokuGridManager.selectCell.mockClear();
  });

  test("construct", () => {
    const sut = new EventHandler();
    expect(SudokuGridManager).toBeCalledTimes(1);
    expect(SudokuGridManager).toBeCalledWith($(".row>div"));
    expect(HeaderManager).toBeCalledTimes(1);
    expect(HeaderManager).toBeCalledWith($("start-button"));
  });

  describe("headerInteractions", () => {
    test("leftArrowButtonClick", () => {
      $("#left-arrow-button").trigger("click");
      expect(headerManager.changeDifficulty).toBeCalledTimes(1);
    });

    test("rightAroowButtonClick", () => {
      $("#right-arrow-button").trigger("click");
      expect(headerManager.changeDifficulty).toBeCalledTimes(1);
    });

    test("startButtonClick", () => {
      $("#start-button").trigger("click");
      expect(headerManager.handleGameStart).toBeCalledTimes(1);
      expect(sudokuGridManager.startGame).toBeCalledTimes(1);
      $("#start-button").trigger("click");
      expect(headerManager.handleGameStop).toBeCalledTimes(1);
    });
  });

  describe("gridInteractions", () => {
    beforeAll(() => {
      $("#start-button").trigger("click");
    });

    test("cellClick", () => {
      $(".row>div").eq(40).trigger("click");
      expect(sudokuGridManager.selectCell).toBeCalledTimes(1);
    });

    test("keyInput", () => {
      $(document).trigger("keyup");
      expect(sudokuGridManager.fillCellWithInput).toBeCalledTimes(1);
    });

    test("disabled when game not started", () => {
      $("#start-button").trigger("click");
      $(".row>div").eq(40).trigger("click");
      expect(sudokuGridManager.selectCell).toBeCalledTimes(0);
      $(document).trigger("keyup");
      expect(sudokuGridManager.fillCellWithInput).toBeCalledTimes(0);
    });
  });
});
