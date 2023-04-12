import Constants from "../common/Constants.mjs";
import CellValidityChecker from "./CellValidityChecker.mjs";

export default function findInvalidCells(sudoku) {
  const cellChecker = new CellValidityChecker(sudoku);
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
