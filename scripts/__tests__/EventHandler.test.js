import EventHandler from "../EventHandler.mjs";
import SudokuGridManager from "../SudokuBoard/SudokuGridManager.mjs";
import HeaderManager from "../Header/HeaderManager.mjs";
import PencilTool from "../SudokuBoard/PencilTool.mjs";
import * as fs from "fs";
import * as path from "path";
import MessageDisplayer from "../Header/MessageDisplyer.mjs";

jest.mock("../SudokuBoard/SudokuGridManager.mjs");
jest.mock("../Header/HeaderManager.mjs");
jest.mock("../SudokuBoard/PencilTool.mjs");
jest.mock("../Header/MessageDisplyer.mjs");

describe("EventHandlerTest", () => {
  const html = fs.readFileSync(path.resolve("./html/sudoku.html"), "utf8");
  document.body.innerHTML = html;
  const sudokuGridManager = new SudokuGridManager();
  const headerManager = new HeaderManager();
  let sut;

  beforeEach(() => {
    $("#check-button").off("click");
    $("#pencil-button").off("click");
    $("#ereaser-button").off("click");
    $(".row>div").each(function () {
      $(this).off("click");
    });
    $("#number-buttons > button").each(function () {
      $(this).off("click");
    });
    $("start-button").on("click", this);
    $("#left-arrow-button").off("click");
    $("#right-arrow-button").off("click");
    $("#start-button").off("click");
    $(document).off("keyup");
    sut = new EventHandler();
    SudokuGridManager.mockClear();
    HeaderManager.mockClear();
    headerManager.changeDifficulty.mockClear();
    headerManager.handleGameStart.mockClear();
    sudokuGridManager.startGame.mockClear();
    sudokuGridManager.fillCellWithInput.mockClear();
    sudokuGridManager.selectCell.mockClear();
    sudokuGridManager.isSudokuValid.mockClear();
    sudokuGridManager.removeSelectedCellText.mockClear();
    PencilTool.pencilClicked.mockClear();
    PencilTool.resetPencilButton.mockClear();
    MessageDisplayer.resetInfo.mockClear();
  });

  test("construct", () => {
    new EventHandler();
    expect(SudokuGridManager).toBeCalledTimes(1);
    expect(SudokuGridManager).toBeCalledWith($(".row>div"));
    expect(HeaderManager).toBeCalledTimes(1);
    expect(HeaderManager).toBeCalledWith($("start-button"));
  });

  describe("headerInteractions", () => {
    beforeEach(() => {
      $("#start-button").trigger("click");
    });

    test("leftArrowButtonClick", () => {
      $("#left-arrow-button").trigger("click");
      expect(headerManager.changeDifficulty).toBeCalledTimes(1);
    });

    test("rightAroowButtonClick", () => {
      $("#right-arrow-button").trigger("click");
      expect(headerManager.changeDifficulty).toBeCalledTimes(1);
    });

    test("startButtonClickTwoTimes", () => {
      expect(headerManager.handleGameStart).toBeCalledTimes(1);
      expect(sudokuGridManager.startGame).toBeCalledTimes(1);
      $("#start-button").trigger("click");
      expect(headerManager.handleGameStop).toBeCalledTimes(1);
      expect(sudokuGridManager.endGame).toBeCalledTimes(1);
      expect(PencilTool.resetPencilButton).toBeCalledTimes(1);
      expect(MessageDisplayer.resetInfo).toBeCalledTimes(1);
    });
  });

  describe("gridInteractions", () => {
    test("cellClick", () => {
      $("#start-button").trigger("click");
      $(".row>div").eq(40).trigger("click");
      expect(sudokuGridManager.selectCell).toBeCalledTimes(1);
    });

    test("keyInput", () => {
      $("#start-button").trigger("click");
      const event = $.Event("keyup");
      event.key = 6;
      $(document).trigger(event);
      expect(sudokuGridManager.fillCellWithInput).toBeCalledTimes(1);
      expect(sudokuGridManager.fillCellWithInput).toBeCalledWith(event);
    });

    test("disabled when game not started", () => {
      $(".row>div").eq(40).trigger("click");
      expect(sudokuGridManager.selectCell).toBeCalledTimes(0);
      $(document).trigger("keyup");
      expect(sudokuGridManager.fillCellWithInput).toBeCalledTimes(0);
    });
  });

  describe("numberButtonsInteractions", () => {
    test("triggerDocumentKeyUpEvent", () => {
      $("#start-button").trigger("click");
      $("#number-buttons > button").eq(2).trigger("click");
      expect(sudokuGridManager.fillCellWithInput).toBeCalledTimes(1);
    });
  });

  describe("toolsButtonsInteractions", () => {
    beforeEach(() => {
      $("#start-button").trigger("click");
    });

    test("checkButton", () => {
      $("#check-button").trigger("click");
      expect(sudokuGridManager.isSudokuValid).toBeCalledTimes(1);
    });

    test("pencilButton", () => {
      $("#pencil-button").trigger("click");
      expect(PencilTool.pencilClicked).toBeCalledTimes(1);
    });

    test("ereaserButton", () => {
      $("#ereaser-button").trigger("click");
      expect(sudokuGridManager.removeSelectedCellText).toBeCalledTimes(1);
    });
  });
});
