import BoxIndexCalculator from "./BoxIndexCalculator.mjs";
import Constants from "../common/Constants.mjs";
import SudokuGenerator from "./SudokuGenerator.mjs";
import PencilTool from "./PencilTool.mjs";
import MessageDisplayer from "../Header/MessageDisplyer.mjs";

export default class SudokuGridManager {
  constructor(cells) {
    this.#initializeGridCells(cells);
  }

  startGame(difficulty) {
    this.#resetCells();
    this.#initializeGridValues();
    try {
      this.#makeCellsUneditable(difficulty);
    } catch (error) {
      this.#makeCellsUneditable("Easy");
    }
    this.#displayUneditableCellsValue();
  }

  selectCell(event) {
    const target = $(event.target);
    const cell = target.parent().hasClass("cell") ? target.parent() : target;
    if (this.#isCellEditable(cell)) {
      if (this.#selectedCell) {
        this.#selectedCell.removeClass("selected");
      }

      this.#selectedCell = cell;
      this.#markImportantCells();
      this.#selectedCell.addClass("selected");
    }
  }

  fillCellWithInput(event) {
    const key = event.key;
    const pencilActive = PencilTool.isPencilActive();
    if (!this.#selectedCell) {
      return;
    }
    if (this.#isCellEditable(this.#selectedCell)) {
      if (key > 0 && key <= 9) {
        this.#removeInvalidClass();
        if (pencilActive) {
          console.log(pencilActive);
          if (!this.#selectedCell.hasClass("pencil-grid")) {
            this.#setCellText(this.#selectedCell, "");
          }
          this.#selectedCell.addClass("pencil-grid");
          if (
            this.#selectedCell
              .children()
              .eq(key - 1)
              .text() == ""
          ) {
            this.#setCellText(this.#selectedCell, key, key - 1);
          } else {
            this.#setCellText(this.#selectedCell, "", key - 1);
          }
        } else {
          this.#removePencilGridClass();
          this.removeSelectedCellText();
          this.#setCellText(this.#selectedCell, key);
        }
      } else if (key === "Backspace" && !pencilActive) {
        this.#removePencilGridClass();
        this.#removeInvalidClass();
        this.#setCellText(this.#selectedCell, "");
      }
    }
  }

  checkSudoku() {
    let mistakeCells = [];
    let emptyCells = [];
    for (let i = 0; i < Constants.gridSize; ++i) {
      for (let j = 0; j < Constants.gridSize; ++j) {
        const cell = this.#grid[i][j];
        const element = cell.element;
        const elementContent = element.children().eq(4).text();
        if (elementContent === "" || element.hasClass("pencil-grid")) {
          emptyCells.push(element);
        } else if (elementContent !== cell.value.toString()) {
          mistakeCells.push(element);
        }
      }
    }
    const numOfEmptyCells = emptyCells.length;
    const numOfMistakes = mistakeCells.length;
    if (numOfEmptyCells != 0) {
      this.#makeCellsInvalid(emptyCells);
    } else if (numOfMistakes !== 0) {
      this.#makeCellsInvalid(mistakeCells);
    }
    MessageDisplayer.displayMessage(numOfEmptyCells, numOfMistakes);
  }

  removeSelectedCellText() {
    this.#removePencilGridClass();
    this.#removeInvalidClass();
    this.#selectedCell.children().each(function () {
      $(this).text("");
    });
  }

  #removePencilGridClass(cell = this.#selectedCell) {
    cell.removeClass("pencil-grid");
  }

  #removeInvalidClass(cell = this.#selectedCell) {
    cell.removeClass("invalid");
  }

  #makeCellsInvalid(cellsArray) {
    cellsArray.forEach((cell) => {
      $(cell).addClass("invalid");
    });
  }

  #markImportantCells() {
    if (this.#importantCells) {
      this.#removeImportantCellClass();
    }
    this.#importantCells = this.#getImportantCells(this.#selectedCell);
    this.#addImportantCellClass();
  }

  #addImportantCellClass() {
    for (const cell of this.#importantCells) {
      $(cell).addClass("important");
    }
  }

  #removeImportantCellClass() {
    for (const cell of this.#importantCells) {
      $(cell).removeClass("important");
    }
  }

  #getImportantCells(cell) {
    const position = this.#findCellPosition(cell);
    const row = this.#grid[position[0]].map((obj) => obj.element);
    let column = [];
    this.#grid.forEach((arr) => {
      column = [arr[position[1]], ...column];
    });
    column = column.map((obj) => obj.element);
    let box = [];
    const start = {
      i: BoxIndexCalculator.startIndex(position[0]),
      j: BoxIndexCalculator.startIndex(position[1]),
    };
    const end = {
      i: BoxIndexCalculator.endIndex(position[0]),
      j: BoxIndexCalculator.endIndex(position[1]),
    };
    for (let i = start.i; i <= end.i; ++i) {
      for (let j = start.j; j <= end.j; ++j) {
        box = [this.#grid[i][j].element, ...box];
      }
    }
    return new Set([...row, ...column, ...box]);
  }

  #resetCells() {
    for (let i = 0; i < Constants.gridSize; ++i) {
      for (let j = 0; j < Constants.gridSize; ++j) {
        const cell = this.#grid[i][j].element;
        cell.removeClass("uneditable");
        this.#removeInvalidClass(cell);
        this.#removePencilGridClass(cell);
        this.#setCellText(cell, "");
      }
    }
  }

  #isCellEditable(cell) {
    const position = this.#findCellPosition(cell);
    return !this.#grid[position[0]][position[1]].element.hasClass("uneditable");
  }

  #findCellPosition(cell) {
    for (let i = 0; i < Constants.gridSize; ++i) {
      for (let j = 0; j < Constants.gridSize; ++j) {
        if (this.#grid[i][j].element.get(0) == cell.get(0)) {
          return [i, j];
        }
      }
    }
  }

  #initializeGridCells(cells) {
    let grid = [];
    let row = [];
    for (let i = 0; i < cells.length; ++i) {
      row = [
        ...row,
        {
          element: $(cells[i]),
          value: 0,
        },
      ];
      if (i % 9 == 8) {
        grid = [...grid, row];
        row = [];
      }
    }
    this.#grid = grid;
  }

  #initializeGridValues() {
    const values = this.#sudokuGenerator.generateSudoku();
    for (let i = 0; i < Constants.gridSize; ++i) {
      for (let j = 0; j < Constants.gridSize; ++j) {
        this.#grid[i][j].value = values[i][j];
      }
    }
  }

  #makeCellsUneditable(difficulty) {
    let numOfUneditableCells;
    switch (difficulty) {
      case "Easy":
        numOfUneditableCells = 40;
        break;
      case "Medium":
        numOfUneditableCells = 30;
        break;
      case "Hard":
        numOfUneditableCells = 20;
        break;
      default:
        throw new Error("Difficulty setting not recognised");
    }
    let count = 0;
    while (count !== numOfUneditableCells) {
      let i = Math.floor(Math.random() * Constants.gridSize);
      let j = Math.floor(Math.random() * Constants.gridSize);
      const cell = this.#grid[i][j].element;
      if (this.#isCellEditable(cell)) {
        ++count;
        cell.addClass("uneditable");
      }
    }
  }

  #displayUneditableCellsValue() {
    for (let i = 0; i < Constants.gridSize; ++i) {
      for (let j = 0; j < Constants.gridSize; ++j) {
        const cell = this.#grid[i][j];
        const element = cell.element;
        if (!this.#isCellEditable(element)) {
          this.#setCellText(element, cell.value);
        }
      }
    }
  }

  #setCellText(cell, text, childNumber = 4) {
    cell.children().eq(childNumber).text(text);
  }

  #grid;
  #selectedCell;
  #importantCells;
  #sudokuGenerator = new SudokuGenerator();
}
