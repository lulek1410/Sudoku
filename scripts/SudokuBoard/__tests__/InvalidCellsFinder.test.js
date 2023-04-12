import findInvalidCells from "../InvalidCellsFinder.mjs";
import CellValidityChecker from "../CellValidityChecker.mjs";

jest.mock("../CellValidityChecker");

describe("InvalidCellsFinder", () => {
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

  const cellValidityChecker = new CellValidityChecker();

  beforeEach(() => {
    CellValidityChecker.mockClear();
  });

  function mockIsCellValidReturnValue(expected, count = 81) {
    for (let i = 0; i < count; ++i) {
      cellValidityChecker.isCellValid.mockReturnValueOnce(expected);
    }
  }

  describe("findInvalidCells", () => {
    test("All cells valid", () => {
      mockIsCellValidReturnValue(true);
      expect(findInvalidCells(sudoku)).toStrictEqual({
        mistakeCells: [],
        emptyCells: [],
      });
      expect(CellValidityChecker).toBeCalledTimes(1);
      expect(CellValidityChecker).toBeCalledWith(sudoku);
    });

    test("Some cells are invalid", () => {
      mockIsCellValidReturnValue(true, 39);
      mockIsCellValidReturnValue(false, 2);
      mockIsCellValidReturnValue(true, 20);
      mockIsCellValidReturnValue(false, 1);
      mockIsCellValidReturnValue(true, 27);
      sudoku = [
        [4, 5, 6, 2, 1, 3, 7, 9, 8],
        [7, 0, 8, 4, 9, 5, 1, 6, 2],
        [1, 9, 2, 6, 8, 7, 3, 4, 5],
        [2, 6, 0, 1, 7, 4, 5, 8, 3],
        [3, 4, 1, 8, 5, 9, 2, 7, 6],
        [5, 8, 7, 3, 6, 2, 9, 1, 4],
        [8, 7, 4, 5, 2, 1, 6, 3, 9],
        [9, 2, 0, 7, 4, 6, 0, 5, 1],
        [6, 1, 5, 9, 3, 8, 4, 2, 7],
      ];
      expect(findInvalidCells(sudoku)).toStrictEqual({
        mistakeCells: [
          [4, 5],
          [4, 6],
          [7, 0],
        ],
        emptyCells: [
          [1, 1],
          [3, 2],
          [7, 2],
          [7, 6],
        ],
      });
      expect(CellValidityChecker).toBeCalledTimes(1);
      expect(CellValidityChecker).toBeCalledWith(sudoku);
    });
  });
});
