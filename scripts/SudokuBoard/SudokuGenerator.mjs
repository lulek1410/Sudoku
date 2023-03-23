import BoxIndexCalculator from "./BoxIndexCalculator.mjs";
import Constants from "../common/Constants.mjs";

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
        let number = 0;
        while (true) {
          number = Math.floor(Math.random() * Constants.gridSize + 1);
          if (this.#unUsedInBox(rowStart, colStart, number)) {
            break;
          }
        }
        this.#sudoku[rowStart + i][colStart + j] = number;
      }
    }
  }

  #unUsedInBox(rowStart, colStart, num) {
    for (let i = 0; i < Constants.boxSize; i++) {
      for (let j = 0; j < Constants.boxSize; j++) {
        if (this.#sudoku[rowStart + i][colStart + j] == num) {
          return false;
        }
      }
    }
    return true;
  }

  #fillRemaining(row, column) {
    if (row === Constants.gridSize - 1 && column === Constants.gridSize) {
      return true;
    }

    if (column === Constants.gridSize) {
      row += 1;
      column = 0;
    }

    if (this.#sudoku[row][column] !== 0) {
      return this.#fillRemaining(row, column + 1);
    }

    for (let num = 1; num <= Constants.gridSize; num++) {
      if (this.#isValid(row, column, num)) {
        this.#sudoku[row][column] = num;
        if (this.#fillRemaining(row, column + 1)) {
          return true;
        }
        this.#sudoku[row][column] = 0;
      }
    }
    return false;
  }

  #isValid(row, column, number) {
    return (
      this.#unUsedInColumn(column, number) &&
      this.#unUsedInRow(row, number) &&
      this.#unUsedInBox(
        BoxIndexCalculator.startIndex(row),
        BoxIndexCalculator.startIndex(column),
        number
      )
    );
  }

  #unUsedInRow(row, num) {
    for (let j = 0; j < Constants.gridSize; j++) {
      if (this.#sudoku[row][j] === num) {
        return false;
      }
    }
    return true;
  }

  #unUsedInColumn(column, num) {
    for (let i = 0; i < Constants.gridSize; i++) {
      if (this.#sudoku[i][column] === num) {
        return false;
      }
    }
    return true;
  }

  #sudoku = [];
}
