import BoxIndexCalculator from "./BoxIndexCalculator.mjs";
import Constants from "../common/Constants.mjs";
import CellValidityChecker from "./CellValidityChecker.mjs";

export default class SudokuGenerator {
  generateSudoku() {
    this.#initializeValues();
    this.#fillDiagonalBoxes();
    this.#fillRemaining(0, Constants.boxSize);
    return this.#sudoku;
  }

  #initializeValues() {
    this.#sudoku = [];
    for (let i = 0; i < Constants.gridSize; ++i) {
      const row = Array(Constants.gridSize);
      for (let i = 0; i < Constants.gridSize; ++i) {
        row[i] = 0;
      }
      this.#sudoku = [row, ...this.#sudoku];
    }
  }

  #fillDiagonalBoxes() {
    for (let i = 0; i < Constants.gridSize; i += Constants.boxSize) {
      this.#fillBox(i, i);
    }
  }

  #fillBox(rowStart, colStart) {
    for (let i = 0; i < Constants.boxSize; ++i) {
      for (let j = 0; j < Constants.boxSize; ++j) {
        let num = 0;
        const position = { row: rowStart + i, col: colStart + j };
        while (true) {
          num = Math.floor(Math.random() * Constants.gridSize + 1);
          if (
            this.#cellValidityChecker.isCellValid(this.#sudoku, position, num)
          ) {
            break;
          }
        }
        this.#sudoku[position.row][position.col] = num;
      }
    }
  }

  #fillRemaining(row, column) {
    if (row === Constants.gridSize - 1 && column === Constants.gridSize) {
      return true;
    }

    if (column === Constants.gridSize) {
      row += 1;
      column = 0;
    }

    const position = { row: row, col: column };
    if (this.#sudoku[position.row][position.col] !== 0) {
      return this.#fillRemaining(position.row, position.col + 1);
    }
    for (let num = 1; num <= Constants.gridSize; num++) {
      if (this.#cellValidityChecker.isCellValid(this.#sudoku, position, num)) {
        this.#sudoku[position.row][position.col] = num;
        if (this.#fillRemaining(position.row, position.col + 1)) {
          return true;
        }
        this.#sudoku[position.row][position.col] = 0;
      }
    }
    return false;
  }

  #sudoku = [];
  #cellValidityChecker = new CellValidityChecker();
}
