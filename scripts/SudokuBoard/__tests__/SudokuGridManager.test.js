import SudokuGridManager from "../SudokuGridManager.mjs";
import BoxIndexCalculator from "../BoxIndexCalculator.mjs";
import SudokuGenerator from "../SudokuGenerator.mjs";
import * as fs from "fs";
import * as path from "path";

jest.mock("../SudokuGenerator");
jest.mock("../BoxIndexCalculator");

describe("SudokuGridManagerTest", () => {
  const html = fs.readFileSync(path.resolve("./html/sudoku.html"), "utf8");
  document.body.innerHTML = html;

  const cells = $(".row>div");
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
      $(cell).css("backgroundColor", "");
      $(cell).css("color", "");
      $(cell).css("fontWeight", "");
      $(cell).text("");
    }
  });

  describe("selectCell", () => {
    function checkSignificantCells(expected) {
      for (const cell of significantCells) {
        expect(cell.css("backgroundColor")).toBe(expected);
      }
    }

    function expectSellectedCellProperties(
      backgroundColor,
      color,
      fontWeight,
      selectedCell = testCell
    ) {
      expect($(selectedCell).css("backgroundColor")).toBe(backgroundColor);
      expect($(selectedCell).css("color")).toBe(color);
      expect($(selectedCell).css("fontWeight")).toBe(fontWeight);
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
      expectSellectedCellProperties("", "", "");
      checkSignificantCells("");
      mockReturnValues(BoxIndexCalculator.startIndex, [0, 3]);
      mockReturnValues(BoxIndexCalculator.endIndex, [2, 5]);
      let event = { target: testCell };
      sut.selectCell(event);
      expectToBeCalledWith(BoxIndexCalculator.startIndex, [1, 3]);
      expectToBeCalledWith(BoxIndexCalculator.endIndex, [1, 3]);
      expect(BoxIndexCalculator.startIndex).toBeCalledTimes(2);
      expect(BoxIndexCalculator.endIndex).toBeCalledTimes(2);
      checkSignificantCells("rgb(65, 65, 65)");
      expectSellectedCellProperties("aqua", "black", "400");
    });

    test("cell deselect if another selects", () => {
      mockReturnValues(BoxIndexCalculator.startIndex, [0, 3, 3, 6]);
      mockReturnValues(BoxIndexCalculator.endIndex, [2, 5, 5, 8]);
      let event = { target: testCell };
      sut.selectCell(event);
      const secondCell = cells[35];
      event.target = secondCell;
      sut.selectCell(event);
      expectSellectedCellProperties("", "white", "300", testCell);
      expectSellectedCellProperties("aqua", "black", "400", secondCell);
      significantCells.splice(7, 1); //remove cells.eq(17)
      significantCells.splice(9, 1); //remove cells.eq(30)
      checkSignificantCells("");
    });
  });

  describe("fillCellWithInput", () => {
    test("do nothing when no cell selected", () => {
      sut.fillCellWithInput("4");
    });

    test("numerical input", () => {
      let event = { target: testCell };
      sut.selectCell(event);
      event.key = "5";
      sut.fillCellWithInput(event);
      expect(testCell.text()).toBe("5");
    });

    test("input other than numerical does not chang cells text", () => {
      let event = { target: testCell };
      sut.selectCell(event);
      sut.fillCellWithInput("Control");
      expect(testCell.text()).toBe("");
      sut.fillCellWithInput("Enter");
      expect(testCell.text()).toBe("");
      sut.fillCellWithInput("a");
      expect(testCell.text()).toBe("");
    });

    test("remove inputed value when backspace used", () => {
      let event = { target: testCell, key: "8" };
      sut.selectCell(event);
      sut.fillCellWithInput(event);
      expect(testCell.text()).toBe("8");
      event.key = "Backspace";
      sut.fillCellWithInput(event);
      expect(testCell.text()).toBe("");
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
        if ($(this).text() != "") {
          ++uneditableCells;
        }
      });
      expect(uneditableCells).toBe(40);
    });
  });
});
