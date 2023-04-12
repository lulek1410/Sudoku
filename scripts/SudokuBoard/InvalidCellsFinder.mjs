import Constants from "../common/Constants.mjs";
import CellValidityChecker from "./CellValidityChecker.mjs";

export default function findInvalidCells(sudoku) {
  const cellChecker = new CellValidityChecker(sudoku);
  const mistakeCells = [];
  const emptyCells = [];
  for (let i = 0; i < Constants.gridSize; i++) {
    for (let j = 0; j < Constants.gridSize; j++) {
      if (!sudoku[i][j]) {
        emptyCells.push([i, j]);
      } else if (!cellChecker.isCellValid(i, j, sudoku[i][j])) {
        mistakeCells.push([i, j]);
      }
    }
  }
  return { mistakeCells: mistakeCells, emptyCells: emptyCells };
}
