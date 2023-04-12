import BoxIndexCalculator from "../BoxIndexCalculator.mjs";
import CellValidityChecker from "../CellValidityChecker.mjs";

jest.mock("../BoxIndexCalculator");

describe("SudokuGridManagerTest", () => {
  beforeEach(() => {
    BoxIndexCalculator.startIndex.mockClear();
  });
  const sudokuValid = [
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

  const sudokuInvalidBox = [
    [4, 5, 6, 2, 1, 6, 7, 9, 8],
    [7, 3, 8, 4, 9, 5, 1, 6, 2],
    [1, 9, 2, 6, 8, 7, 3, 4, 5],
    [2, 6, 9, 1, 7, 4, 5, 8, 3],
    [3, 4, 1, 8, 5, 9, 2, 7, 6],
    [5, 8, 7, 3, 6, 2, 9, 1, 4],
    [8, 7, 4, 5, 2, 1, 6, 3, 9],
    [9, 2, 3, 7, 4, 6, 8, 5, 1],
    [6, 1, 5, 9, 3, 8, 4, 2, 7],
  ];

  const sudokuInvalidRow = [
    [4, 5, 6, 2, 1, 3, 7, 9, 8],
    [7, 3, 8, 4, 9, 5, 1, 6, 2],
    [1, 9, 2, 6, 8, 7, 3, 4, 5],
    [2, 6, 9, 1, 7, 4, 5, 8, 3],
    [3, 4, 1, 8, 5, 9, 2, 7, 6],
    [5, 8, 7, 3, 6, 2, 9, 1, 4],
    [4, 7, 4, 5, 2, 1, 6, 3, 9],
    [9, 2, 3, 7, 4, 6, 8, 5, 1],
    [6, 1, 5, 9, 3, 8, 4, 2, 7],
  ];

  const sudokuInvalidColumn = [
    [4, 5, 6, 2, 1, 3, 7, 9, 8],
    [7, 3, 8, 4, 9, 5, 1, 6, 2],
    [1, 9, 2, 6, 8, 7, 3, 4, 5],
    [2, 6, 9, 1, 7, 4, 5, 8, 3],
    [3, 4, 1, 8, 5, 9, 2, 7, 6],
    [5, 8, 7, 3, 6, 2, 9, 1, 4],
    [8, 7, 4, 5, 2, 1, 6, 3, 9],
    [9, 2, 3, 7, 4, 6, 8, 5, 1],
    [6, 1, 5, 9, 3, 8, 4, 7, 7],
  ];

  const sut = new CellValidityChecker();

  describe("isCellValid", () => {
    test.each([
      { sudoku: sudokuValid, position: { row: 1, col: 5 }, expected: true },
      {
        sudoku: sudokuInvalidBox,
        position: { row: 2, col: 3 },
        expected: false,
      },
    ])("cell is valid", ({ sudoku, position, expected }) => {
      BoxIndexCalculator.startIndex.mockReturnValueOnce(0);
      BoxIndexCalculator.startIndex.mockReturnValueOnce(3);
      expect(sut.isCellValid(sudoku, position)).toBe(expected);
      expect(BoxIndexCalculator.startIndex).toBeCalledTimes(2);
      expect(BoxIndexCalculator.startIndex).toBeCalledWith(position.row);
      expect(BoxIndexCalculator.startIndex).toBeCalledWith(position.col);
    });

    test.each([
      { sudoku: sudokuInvalidRow, position: { row: 6, col: 2 } },
      { sudoku: sudokuInvalidColumn, position: { row: 4, col: 7 } },
    ])("cell not valid - row/column", ({ sudoku, position }) => {
      BoxIndexCalculator.startIndex.mockReturnValueOnce(6);
      BoxIndexCalculator.startIndex.mockReturnValueOnce(0);
      expect(sut.isCellValid(sudoku, position)).toBe(false);
      expect(BoxIndexCalculator.startIndex).toBeCalledTimes(0);
    });
  });
});
