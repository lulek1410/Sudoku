import SudokuGridManager from "../SudokuGridManager.mjs";
import * as fs from "fs";
import * as path from "path";

import BoxIndexCalculator from "../BoxIndexCalculator.mjs";
import SudokuGenerator from "../SudokuGenerator.mjs";
import PencilTool from "../PencilTool.mjs";
import MessageDisplayer from "../../Header/MessageDisplyer.mjs";
import findInvalidCells from "../InvalidCellsFinder.mjs";

jest.mock("../SudokuGenerator");
jest.mock("../BoxIndexCalculator");
jest.mock("../PencilTool");
jest.mock("../../Header/MessageDisplyer.mjs");
jest.mock("../InvalidCellsFinder.mjs");

describe("SudokuGridManagerTest", () => {
  const html = fs.readFileSync(path.resolve("./html/index.html"), "utf8");
  document.body.innerHTML = html;

  const $cells = $(".cell");
  let sut;
  let sudoku = [
    [4, 5, 6, 2, 1, 3, 7, 9, 8],
    [7, 3, 8, 4, 9, 5, 1, 6, 2],
    [1, 9, 2, 6, 8, 7, 3, 4, 5],
    [2, 6, 9, 1, 7, 4, 5, 8, 3],
    [3, 4, 1, 8, 5, 9, 2, 7, 6],
    [5, 8, 7, 3, 6, 2, 9, 1, 4],
    [8, 7, 4, 5, 2, 1, 6, 3, 9],
    [9, 2, 3, 7, 4, 6, 8, 5, 1],
    [6, 1, 5, 9, 3, 8, 4, 2, 7],
  ];
  const generator = new SudokuGenerator();
  const $testCell = $cells.eq(12);
  let $significantCells = [
    $cells.eq(9),
    $cells.eq(10),
    $cells.eq(11),
    $cells.eq(13),
    $cells.eq(14),
    $cells.eq(15),
    $cells.eq(16),
    $cells.eq(17),
    $cells.eq(3),
    $cells.eq(21),
    $cells.eq(30),
    $cells.eq(39),
    $cells.eq(48),
    $cells.eq(57),
    $cells.eq(66),
    $cells.eq(75),
    $cells.eq(4),
    $cells.eq(5),
    $cells.eq(22),
    $cells.eq(23),
  ];

  beforeEach(() => {
    SudokuGenerator.mockClear();
    PencilTool.isPencilActive.mockClear();
    BoxIndexCalculator.startIndex.mockClear();
    BoxIndexCalculator.endIndex.mockClear();
    findInvalidCells.mockClear();
    sut = new SudokuGridManager($cells);
    expect(SudokuGenerator).toBeCalledTimes(1);
    mockIsPencilActiveReturnValue(false);
    for (const cell of $cells) {
      $(cell).removeClass("selected");
      $(cell).removeClass("important");
      $(cell).removeClass("uneditable");
      $(cell).removeClass("invalid");
      $(cell).removeClass("pencil-grid");
      $(cell)
        .children()
        .each(function () {
          $(this).text("");
        });
    }
  });

  function expectIsPenActive(cardinality = 1) {
    expect(PencilTool.isPencilActive).toBeCalledTimes(cardinality);
  }

  function invokeFillCellWithInput(inputKey) {
    sut.fillCellWithInput({ key: inputKey });
  }

  function invokeSelectCell(cellToSelect = $testCell) {
    sut.selectCell({ target: cellToSelect });
  }

  function mockReturnValues(func, values) {
    for (const value of values) {
      func.mockReturnValueOnce(value);
    }
  }

  function mockIsPencilActiveReturnValue(returnValue) {
    PencilTool.isPencilActive.mockReturnValue(returnValue);
  }

  function expectTextInTestCellsSubcell(expected, subcell = 4) {
    expect($testCell.children().eq(subcell).text()).toBe(expected);
  }

  function countCellsWithClass(className) {
    let count = 0;
    $cells.each(function () {
      if ($(this).hasClass(className)) {
        ++count;
      }
    });
    return count;
  }

  function mockSudokuGeneratorReturnValue() {
    generator.generateSudoku.mockReturnValueOnce(sudoku);
  }

  function mockFindInvalidCellsReturn(mistakeCells, emptyCells) {
    findInvalidCells.mockReturnValueOnce({
      mistakeCells: mistakeCells,
      emptyCells: emptyCells,
    });
  }

  describe("selectCell", () => {
    function checkSignificantCells(expected) {
      for (const cell of $significantCells) {
        expect(cell.hasClass("important")).toBe(expected);
      }
    }

    function expectSellectedCellProperties(expected, selectedCell = $testCell) {
      expect($(selectedCell).hasClass("selected")).toBe(expected);
    }

    function expectToBeCalledWith(func, values) {
      for (const value of values) {
        expect(func).toBeCalledWith(value);
      }
      expect(func).toBeCalledTimes(values.length);
    }

    test("cell selects", () => {
      expectSellectedCellProperties(false);
      checkSignificantCells(false);
      mockReturnValues(BoxIndexCalculator.startIndex, [0, 3]);
      mockReturnValues(BoxIndexCalculator.endIndex, [2, 5]);
      invokeSelectCell();
      expectToBeCalledWith(BoxIndexCalculator.startIndex, [1, 3]);
      expectToBeCalledWith(BoxIndexCalculator.endIndex, [1, 3]);
      expect(BoxIndexCalculator.startIndex).toBeCalledTimes(2);
      expect(BoxIndexCalculator.endIndex).toBeCalledTimes(2);
      checkSignificantCells(true);
      expectSellectedCellProperties(true);
    });

    test("cell deselect if another selects", () => {
      mockReturnValues(BoxIndexCalculator.startIndex, [0, 3, 3, 6]);
      mockReturnValues(BoxIndexCalculator.endIndex, [2, 5, 5, 8]);
      invokeSelectCell();
      const secondCell = $cells[35];
      invokeSelectCell(secondCell);
      expectSellectedCellProperties(false, $testCell);
      expectSellectedCellProperties(true, secondCell);
      $significantCells.splice(7, 1); //remove cells.eq(17)
      $significantCells.splice(9, 1); //remove cells.eq(30)
      checkSignificantCells(false);
    });
  });

  describe("fillCellWithInput", () => {
    test("do nothing when no cell selected", () => {
      invokeFillCellWithInput("4");
      expectIsPenActive();
    });

    test("numerical input", () => {
      invokeSelectCell();
      invokeFillCellWithInput("5");
      expectIsPenActive();
      expectTextInTestCellsSubcell("5");
    });

    test("input other than numerical does not chang cells text", () => {
      invokeSelectCell();
      invokeFillCellWithInput("Control");
      expectTextInTestCellsSubcell("");
      invokeFillCellWithInput("Enter");
      expectTextInTestCellsSubcell("");
      invokeFillCellWithInput("a");
      expectIsPenActive(3);
      expectTextInTestCellsSubcell("");
    });

    test("remove inputed value when backspace used", () => {
      invokeSelectCell();
      invokeFillCellWithInput("8");
      expectTextInTestCellsSubcell("8");
      invokeFillCellWithInput("Backspace");
      expectIsPenActive(2);
      expectTextInTestCellsSubcell("");
    });

    test("input with pencil tool active", () => {
      mockIsPencilActiveReturnValue(true);
      invokeSelectCell();
      invokeFillCellWithInput("1");
      expectTextInTestCellsSubcell("1", 0);
      invokeFillCellWithInput("7");
      expectTextInTestCellsSubcell("7", 6);
      invokeFillCellWithInput("9");
      expectTextInTestCellsSubcell("9", 8);
      expectIsPenActive(3);
    });

    test("input on cell with pencil notes when pencil not active", () => {
      mockIsPencilActiveReturnValue(true);
      invokeSelectCell();
      invokeFillCellWithInput("1");
      invokeFillCellWithInput("7");
      invokeFillCellWithInput("9");
      mockIsPencilActiveReturnValue(false);
      invokeFillCellWithInput("5");
      expectTextInTestCellsSubcell("", 0);
      expectTextInTestCellsSubcell("", 6);
      expectTextInTestCellsSubcell("", 8);
      expectTextInTestCellsSubcell("5", 4);
    });
  });

  describe("removeSelectedCellText", () => {
    test("remove text without pencil inactive", () => {
      invokeSelectCell();
      invokeFillCellWithInput("5");
      expectIsPenActive();
      sut.removeSelectedCellText();
      expectTextInTestCellsSubcell("");
    });

    test("subcells text (pencil-grid)", () => {
      mockIsPencilActiveReturnValue(true);
      invokeSelectCell();
      invokeFillCellWithInput("1");
      invokeFillCellWithInput("7");
      invokeFillCellWithInput("9");
      expectIsPenActive(3);
      sut.removeSelectedCellText();
      expectTextInTestCellsSubcell("", 0);
      expectTextInTestCellsSubcell("", 6);
      expectTextInTestCellsSubcell("", 8);
    });
  });

  describe("startGame", () => {
    test("fill grid with values and disply some of them based on difficulty", () => {
      mockSudokuGeneratorReturnValue();
      sut.startGame("Hard");
      const uneditableCells = countCellsWithClass("uneditable");
      expect(uneditableCells).toBe(20);
    });
  });

  describe("endGame", () => {
    function selectEditableCell() {
      for (let i = 0; i < 9; ++i) {
        for (let j = 0; j < 9; ++j) {
          const $cell = $cells.eq(i * 9 + j);
          if ($cell.children().eq(4).text() === "") {
            invokeSelectCell($cell);
            return;
          }
        }
      }
    }

    test("reset every cell", () => {
      mockIsPencilActiveReturnValue(true);
      mockSudokuGeneratorReturnValue();
      sut.startGame("Easy");
      mockFindInvalidCellsReturn(
        [],
        [
          [0, 1],
          [4, 6],
          [7, 3],
        ]
      );
      sut.isSudokuValid();
      selectEditableCell();
      invokeFillCellWithInput(2);
      sut.endGame();
      const uneditableCells = countCellsWithClass("uneditable");
      expect(uneditableCells).toBe(0);
      const invalidCells = countCellsWithClass("invalid");
      expect(invalidCells).toBe(0);
      const importantCells = countCellsWithClass("important");
      expect(importantCells).toBe(0);
      const pencilGridCells = countCellsWithClass("pencil-grid");
      expect(pencilGridCells).toBe(0);
      const selectedCells = countCellsWithClass("selected");
      expect(selectedCells).toBe(0);
    });
  });

  describe("checkSudoku", () => {
    function fillGrid(values) {
      for (let i = 0; i < 9; ++i) {
        for (let j = 0; j < 9; ++j) {
          const $cell = $cells.eq(i * 9 + j);
          if ($cell.children().eq(4).text() === "") {
            invokeSelectCell($cell);
            invokeFillCellWithInput(values[i][j]);
          }
        }
      }
    }

    function testCheckSudoku(
      numberOfEmptyCells,
      numberOfInvalidCells,
      expected
    ) {
      expect(sut.isSudokuValid()).toBe(expected);
      expect(findInvalidCells).toBeCalledTimes(1);
      expect(MessageDisplayer.displayMessage).toBeCalledTimes(1);
      expect(MessageDisplayer.displayMessage).toBeCalledWith(
        numberOfEmptyCells,
        numberOfInvalidCells
      );
    }

    beforeEach(() => {
      sudoku = [
        [4, 5, 6, 2, 1, 3, 7, 9, 8],
        [7, 3, 8, 4, 9, 5, 1, 6, 2],
        [1, 9, 2, 6, 8, 7, 3, 4, 5],
        [2, 6, 9, 1, 7, 4, 5, 8, 3],
        [3, 4, 1, 8, 5, 9, 2, 7, 6],
        [5, 8, 7, 3, 6, 2, 9, 1, 4],
        [8, 7, 4, 5, 2, 1, 6, 3, 9],
        [9, 2, 3, 7, 4, 6, 8, 5, 1],
        [6, 1, 5, 9, 3, 8, 4, 2, 7],
      ];
      MessageDisplayer.displayMessage.mockClear();
      mockSudokuGeneratorReturnValue();
    });

    test("sudoku filled properly", () => {
      mockFindInvalidCellsReturn([], []);
      sut.startGame("Easy");
      fillGrid(sudoku);
      testCheckSudoku(0, 0, true);
      expect(findInvalidCells).toBeCalledWith(sudoku);
    });

    test("sudoku not filled entirely", () => {
      mockFindInvalidCellsReturn([], [[1, 2]]);
      sut.startGame("Easy");
      testCheckSudoku(1, 0, false);
    });

    test("cells with pencil notes count as not filled", () => {
      mockIsPencilActiveReturnValue(false);
      fillGrid(sudoku);
      mockIsPencilActiveReturnValue(true);
      invokeSelectCell($cells.eq(4 * 9 + 8)); // [4, 8]
      invokeFillCellWithInput(3);
      invokeSelectCell($cells.eq(9 + 1)); // [1, 1]
      invokeFillCellWithInput(3);
      mockFindInvalidCellsReturn(
        [],
        [
          [4, 8],
          [1, 1],
        ]
      );
      sudoku = [
        [4, 5, 6, 2, 1, 3, 7, 9, 8],
        [7, 0, 8, 4, 9, 5, 1, 6, 2],
        [1, 9, 2, 6, 8, 7, 3, 4, 5],
        [2, 6, 9, 1, 7, 4, 5, 8, 3],
        [3, 4, 1, 8, 5, 9, 2, 7, 0],
        [5, 8, 7, 3, 6, 2, 9, 1, 4],
        [8, 7, 4, 5, 2, 1, 6, 3, 9],
        [9, 2, 3, 7, 4, 6, 8, 5, 1],
        [6, 1, 5, 9, 3, 8, 4, 2, 7],
      ];
      sut.startGame("Easy");
      testCheckSudoku(2, 0, false);
      expect(findInvalidCells).toBeCalledWith(sudoku);
    });

    test("sudoku filled with mistakes", () => {
      mockFindInvalidCellsReturn(
        [
          [0, 0],
          [2, 2],
          [4, 6],
        ],
        []
      );
      sut.startGame("Easy");
      testCheckSudoku(0, 3, false);
    });
  });
});
