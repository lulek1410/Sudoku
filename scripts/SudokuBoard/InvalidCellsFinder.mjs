import Constants from "../common/Constants.mjs";
import CellValidityChecker from "./CellValidityChecker.mjs";

export default function findInvalidCells(sudoku) {
  //console.log(sudoku);
  const valueMatrix = sudoku.map((row) => {
    return row.map((element) => {
      return element.value;
    });
  });

  const cellChecker = new CellValidityChecker();
  const mistakeCells = [];
  const emptyCells = [];
  for (let i = 0; i < Constants.gridSize; i++) {
    for (let j = 0; j < Constants.gridSize; j++) {
      if (!sudoku[i][j].editable) {
        continue;
      }
      if (!valueMatrix[i][j]) {
        emptyCells.push([i, j]);
      } else if (
        !cellChecker.isCellValid(
          valueMatrix,
          { row: i, col: j },
          valueMatrix[i][j]
        )
      ) {
        mistakeCells.push([i, j]);
      }
    }
  }
  return { mistakeCells: mistakeCells, emptyCells: emptyCells };
}
