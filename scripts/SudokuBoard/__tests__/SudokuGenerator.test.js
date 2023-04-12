import SudokuGenerator from "../SudokuGenerator.mjs";
import CellValidityChecker from "../CellValidityChecker.mjs";

jest.mock("../CellValidityChecker.mjs");

describe("SudokuGeneratorTest", () => {
  const cellValidityChecker = CellValidityChecker();
  // Code coverage test as sudoku board generation cant be tested
  // due to randomness in its result which will lead to unstability of the test
  test("generateSudoku", () => {
    const sut = new SudokuGenerator();
    cellValidityChecker.isCellValid.mockReturnValue(true);
    sut.generateSudoku();
  });
});
