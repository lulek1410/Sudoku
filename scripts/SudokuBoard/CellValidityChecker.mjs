import BoxIndexCalculator from "./BoxIndexCalculator.mjs";
import Constants from "../common/Constants.mjs";

export default class CellValidityChecker {
  isCellValid(sudoku, position, number = sudoku[position.row][position.col]) {
    this.#sudoku = sudoku;
    return (
      this.#unUsedInColumn(position, number) &&
      this.#unUsedInRow(position, number) &&
      this.#unUsedInBox(position, number)
    );
  }

  #unUsedInBox(position, num) {
    const { row, col } = position;
    const rowStart = BoxIndexCalculator.startIndex(row);
    const colStart = BoxIndexCalculator.startIndex(col);
    for (let i = 0; i < Constants.boxSize; i++) {
      const inBoxPosRow = rowStart + i;
      if (inBoxPosRow !== row) {
        for (let j = 0; j < Constants.boxSize; j++) {
          const inBoxPosCol = colStart + j;
          if (
            inBoxPosCol !== col &&
            this.#sudoku[inBoxPosRow][inBoxPosCol] == num
          ) {
            return false;
          }
        }
      }
    }
    return true;
  }

  #unUsedInRow(position, num) {
    for (let j = 0; j < Constants.gridSize; j++) {
      if (j !== position.col && this.#sudoku[position.row][j] === num) {
        return false;
      }
    }
    return true;
  }

  #unUsedInColumn(position, num) {
    for (let i = 0; i < Constants.gridSize; i++) {
      if (i !== position.row && this.#sudoku[i][position.col] === num) {
        return false;
      }
    }
    return true;
  }

  #sudoku = null;
}
