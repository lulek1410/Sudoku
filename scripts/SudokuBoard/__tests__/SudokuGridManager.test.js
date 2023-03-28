import SudokuGridManager from "../SudokuGridManager.mjs";
import BoxIndexCalculator from "../BoxIndexCalculator.mjs";
import SudokuGenerator from "../SudokuGenerator.mjs";
import PencilTool from "../../ToolsButtons/PencilTool.mjs";
import * as fs from "fs";
import * as path from "path";

jest.mock("../SudokuGenerator");
jest.mock("../BoxIndexCalculator");
jest.mock("../../ToolsButtons/PencilTool");

describe("SudokuGridManagerTest", () => {
  const html = fs.readFileSync(path.resolve("./html/sudoku.html"), "utf8");
  document.body.innerHTML = html;

  const cells = $(".cell");
  let sut;
  const testCell = cells.eq(12);
  let significantCells = [
    cells.eq(9),
    cells.eq(10),
    cells.eq(11),
    cells.eq(13),
    cells.eq(14),
    cells.eq(15),
    cells.eq(16),
    cells.eq(17),
    cells.eq(3),
    cells.eq(21),
    cells.eq(30),
    cells.eq(39),
    cells.eq(48),
    cells.eq(57),
    cells.eq(66),
    cells.eq(75),
    cells.eq(4),
    cells.eq(5),
    cells.eq(22),
    cells.eq(23),
  ];

  beforeEach(() => {
    SudokuGenerator.mockClear();
    sut = new SudokuGridManager(cells);
    expect(SudokuGenerator).toBeCalledTimes(1);
    for (const cell of cells) {
      PencilTool.isPencilActive.mockClear();
      $(cell).removeClass("selected");
      $(cell).removeClass("important");
      $(cell).removeClass("uneditable");
      $(cell)
        .children()
        .each(function () {
          $(this).text("");
        });
    }
  });

  describe("selectCell", () => {
    function checkSignificantCells(expected) {
      for (const cell of significantCells) {
        expect(cell.hasClass("important")).toBe(expected);
      }
    }

    function expectSellectedCellProperties(expected, selectedCell = testCell) {
      expect($(selectedCell).hasClass("selected")).toBe(expected);
    }

    function expectToBeCalledWith(func, values) {
      for (const value of values) {
        expect(func).toBeCalledWith(value);
      }
      expect(func).toBeCalledTimes(values.length);
    }

    function mockReturnValues(func, values) {
      for (const value of values) {
        func.mockReturnValueOnce(value);
      }
    }

    test("cell selects", () => {
      expectSellectedCellProperties(false);
      checkSignificantCells(false);
      mockReturnValues(BoxIndexCalculator.startIndex, [0, 3]);
      mockReturnValues(BoxIndexCalculator.endIndex, [2, 5]);
      let event = { target: testCell };
      sut.selectCell(event);
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
      let event = { target: testCell };
      sut.selectCell(event);
      const secondCell = cells[35];
      event.target = secondCell;
      sut.selectCell(event);
      expectSellectedCellProperties(false, testCell);
      expectSellectedCellProperties(true, secondCell);
      significantCells.splice(7, 1); //remove cells.eq(17)
      significantCells.splice(9, 1); //remove cells.eq(30)
      checkSignificantCells(false);
    });
  });

  describe("fillCellWithInput", () => {
    function expectIsPenActive(cardinality = 1) {
      expect(PencilTool.isPencilActive).toBeCalledTimes(cardinality);
    }

    function expectTextInTestCellsSubcell(expected, subcell = 4) {
      expect(testCell.children().eq(subcell).text()).toBe(expected);
    }

    function invokeFillCellWithInput(inputKey) {
      let event = { key: inputKey };
      sut.fillCellWithInput(event);
    }

    function mockIsPencilActiveReturnValue(returnValue) {
      PencilTool.isPencilActive.mockReturnValue(returnValue);
    }

    test("do nothing when no cell selected", () => {
      invokeFillCellWithInput("4");
      expectIsPenActive();
    });

    test("numerical input", () => {
      mockIsPencilActiveReturnValue(false);
      let event = { target: testCell };
      sut.selectCell(event);
      invokeFillCellWithInput("5");
      expectIsPenActive();
      expectTextInTestCellsSubcell("5");
    });

    test("input other than numerical does not chang cells text", () => {
      mockIsPencilActiveReturnValue(false);
      let event = { target: testCell };
      sut.selectCell(event);
      invokeFillCellWithInput("Control");
      expectTextInTestCellsSubcell("");
      invokeFillCellWithInput("Enter");
      expectTextInTestCellsSubcell("");
      invokeFillCellWithInput("a");
      expectIsPenActive(3);
      expectTextInTestCellsSubcell("");
    });

    test("remove inputed value when backspace used", () => {
      mockIsPencilActiveReturnValue(false);
      let event = { target: testCell };
      sut.selectCell(event);
      invokeFillCellWithInput("8");
      expectTextInTestCellsSubcell("8");
      invokeFillCellWithInput("Backspace");
      expectIsPenActive(2);
      expectTextInTestCellsSubcell("");
    });

    test("input with pencil tool active", () => {
      mockIsPencilActiveReturnValue(true);
      let event = { target: testCell };
      sut.selectCell(event);
      invokeFillCellWithInput("1");
      expectTextInTestCellsSubcell("1", 0);
      invokeFillCellWithInput("7");
      expectTextInTestCellsSubcell("7", 6);
      invokeFillCellWithInput("9");
      expectTextInTestCellsSubcell("9", 8);
      expectIsPenActive(3);
    });
  });

  describe("startGame", () => {
    test("fill grid with values and disply some of them based on difficulty", () => {
      const generator = new SudokuGenerator();
      const sudoku = [
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
      ];
      generator.generateSudoku.mockReturnValueOnce(sudoku);
      sut.startGame("Easy");
      let uneditableCells = 0;
      cells.each(function () {
        if ($(this).hasClass("uneditable") != "") {
          ++uneditableCells;
        }
      });
      expect(uneditableCells).toBe(40);
    });
  });
});
