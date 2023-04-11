import Constants from "../common/Constants.mjs";
import SudokuCellValidityChecker from "./SudokuCellValidityChecker.mjs";

export default function findInvalidCells(sudoku) {
  const cellChecker = new SudokuCellValidityChecker(sudoku);
  const invalidCellsPosition = [];
  for (let i = 0; i < Constants.gridSize; i++) {
    for (let j = 0; j < Constants.gridSize; j++) {
      if (!cellChecker.isCellValid(i, j, sudoku[i][j])) {
        invalidCellsPosition.push([i, j]);
      }
    }
  }
  return invalidCellsPosition;
}
