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
  const html = fs.readFileSync(path.resolve("./html/index.html"), "utf8");
  document.body.innerHTML = html;
  const sudokuGridManager = new SudokuGridManager();
  const headerManager = new HeaderManager();
  const checkButton = $("#check-button");
  const pencilButton = $("#pencil-button");
  const ereaserButton = $("#ereaser-button");
  const cells = $(".cell");
  const numberButtons = $("#number-buttons > button");
  const startButton = $("#start-button");
  const leftArrowButton = $("#left-arrow-button");
  const rightArrowButton = $("#right-arrow-button");
  let sut;

  beforeEach(() => {
    checkButton.off("click");
    pencilButton.off("click");
    ereaserButton.off("click");
    cells.each(function () {
      $(this).off("click");
    });
    numberButtons.each(function () {
      $(this).off("click");
    });
    leftArrowButton.off("click");
    rightArrowButton.off("click");
    startButton.off("click");
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
    expect(SudokuGridManager).toBeCalledWith($(".cell"));
    expect(HeaderManager).toBeCalledTimes(1);
    expect(HeaderManager).toBeCalledWith();
  });

  describe("headerInteractions", () => {
    test("leftArrowButtonClick", () => {
      leftArrowButton.trigger("click");
      expect(headerManager.changeDifficulty).toBeCalledTimes(1);
    });

    test("rightAroowButtonClick", () => {
      rightArrowButton.trigger("click");
      expect(headerManager.changeDifficulty).toBeCalledTimes(1);
    });

    test("startButtonClickTwoTimes", () => {
      startButton.trigger("click");
      expect(headerManager.handleGameStart).toBeCalledTimes(1);
      expect(sudokuGridManager.startGame).toBeCalledTimes(1);
      startButton.trigger("click");
      expect(headerManager.handleGameStop).toBeCalledTimes(1);
      expect(sudokuGridManager.endGame).toBeCalledTimes(1);
      expect(PencilTool.resetPencilButton).toBeCalledTimes(1);
      expect(MessageDisplayer.resetInfo).toBeCalledTimes(1);
    });
  });

  describe("gridInteractions", () => {
    test("cellClick", () => {
      startButton.trigger("click");
      cells.eq(40).trigger("click");
      expect(sudokuGridManager.selectCell).toBeCalledTimes(1);
    });

    test("keyInput", () => {
      startButton.trigger("click");
      const event = $.Event("keyup");
      event.key = 6;
      $(document).trigger(event);
      expect(sudokuGridManager.fillCellWithInput).toBeCalledTimes(1);
      expect(sudokuGridManager.fillCellWithInput).toBeCalledWith(event);
    });

    test("disabled when game not started", () => {
      cells.eq(40).trigger("click");
      expect(sudokuGridManager.selectCell).toBeCalledTimes(0);
      $(document).trigger("keyup");
      expect(sudokuGridManager.fillCellWithInput).toBeCalledTimes(0);
    });
  });

  describe("numberButtonsInteractions", () => {
    test("triggerDocumentKeyUpEvent", () => {
      startButton.trigger("click");
      numberButtons.eq(2).trigger("click");
      expect(sudokuGridManager.fillCellWithInput).toBeCalledTimes(1);
    });
  });

  describe("toolsButtonsInteractions", () => {
    beforeEach(() => {
      startButton.trigger("click");
    });

    test("checkButton", () => {
      checkButton.trigger("click");
      expect(sudokuGridManager.isSudokuValid).toBeCalledTimes(1);
    });

    test("pencilButton", () => {
      pencilButton.trigger("click");
      expect(PencilTool.pencilClicked).toBeCalledTimes(1);
    });

    test("ereaserButton", () => {
      ereaserButton.trigger("click");
      expect(sudokuGridManager.removeSelectedCellText).toBeCalledTimes(1);
    });
  });
});
