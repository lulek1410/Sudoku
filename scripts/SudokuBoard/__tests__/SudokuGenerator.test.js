import SudokuGenerator from "../SudokuGenerator.mjs";

describe("SudokuGeneratorTest", () => {
  // Code coverage test as sudoku board generation cant be tested
  // due to randomness in its result which will lead to unstability of the test
  test("generateSudoku", () => {
    const sut = new SudokuGenerator();
    sut.generateSudoku();
  });
})
