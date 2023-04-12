import BoxIndexCalculator from "./BoxIndexCalculator.mjs";
import Constants from "../common/Constants.mjs";
import SudokuGenerator from "./SudokuGenerator.mjs";
import PencilTool from "./PencilTool.mjs";
import MessageDisplayer from "../Header/MessageDisplyer.mjs";
import findInvalidCells from "./InvalidCellsFinder.mjs";

export default class SudokuGridManager {
  constructor(cells) {
    this.#initializeGridCells(cells);
  }

  startGame(difficulty) {
    this.#initializeGridValues();
    try {
      this.#makeCellsUneditable(difficulty);
    } catch (error) {
      this.#makeCellsUneditable("Easy");
    }
    this.#displayUneditableCellsValue();
  }

  endGame() {
    this.#removeSelectedCellClass();
    this.#removeImportantCellClass();
    this.#$selectedCell = undefined;
    this.#importantCells = undefined;
    for (let i = 0; i < Constants.gridSize; ++i) {
      for (let j = 0; j < Constants.gridSize; ++j) {
        const cell = this.#grid[i][j].element;
        this.#removeCellsClasses(
          ["pencil-grid", "invalid", "uneditable"],
          cell
        );
        this.#setCellText(cell, "");
      }
    }
  }

  selectCell(event) {
    const $target = $(event.target);
    const $cell = $target.parent().hasClass("cell")
      ? $target.parent()
      : $target;
    if (this.#isCellEditable($cell)) {
      if (this.#$selectedCell) {
        this.#removeSelectedCellClass();
      }
      this.#$selectedCell = $cell;
      this.#markImportantCells();
      this.#$selectedCell.addClass("selected");
    }
  }

  fillCellWithInput(event) {
    const key = event.key;
    const pencilActive = PencilTool.isPencilActive();
    if (!this.#$selectedCell) {
      return;
    }
    if (this.#isCellEditable(this.#$selectedCell)) {
      if (key > 0 && key <= 9) {
        this.#removeCellsClasses(["invalid"]);
        if (pencilActive) {
          if (!this.#$selectedCell.hasClass("pencil-grid")) {
            this.#setCellText(this.#$selectedCell, "");
          }
          this.#$selectedCell.addClass("pencil-grid");
          this.#changeSelectedCellsText(key, key - 1);
        } else {
          this.#removeCellsClasses(["pencil-grid", "invalid"]);
          this.removeSelectedCellText();
          this.#changeSelectedCellsText(key);
        }
      } else if (key === "Backspace" && !pencilActive) {
        this.#removeCellsClasses(["pencil-grid", "invalid"]);
        this.removeSelectedCellText();
        this.#setCellText(this.#$selectedCell, "");
      }
    }
  }

  isSudokuValid() {
    const sudoku = this.#grid.map((row) => {
      return row.map((cell) => {
        const element = cell.element;
        const elementText = this.#getCellText(element);
        if (element.hasClass("pencil-grid") || elementText === "") {
          return 0;
        }
        return +elementText;
      });
    });
    let { mistakeCells, emptyCells } = findInvalidCells(sudoku);
    this.#handleSudokuCheck(emptyCells, mistakeCells);
    if (emptyCells.length !== 0 || mistakeCells.length !== 0) {
      return false;
    }
    return true;
  }

  removeSelectedCellText() {
    this.#removeCellsClasses(["pencil-grid", "invalid"]);
    this.#$selectedCell.children().each(function () {
      $(this).text("");
    });
  }

  #changeSelectedCellsText(key, childNumber = 4) {
    if (this.#getCellText(this.#$selectedCell, childNumber) === "") {
      this.#setCellText(this.#$selectedCell, key, childNumber);
    } else {
      this.#setCellText(this.#$selectedCell, "", childNumber);
    }
  }

  #removeCellsClasses(classes, cell = this.#$selectedCell) {
    for (const classToRemove of classes) {
      cell.removeClass(classToRemove);
    }
  }

  #handleSudokuCheck(emptyCells, mistakeCells) {
    const numOfEmptyCells = emptyCells.length;
    const numOfMistakes = mistakeCells.length;
    if (numOfEmptyCells != 0) {
      this.#makeCellsInvalid(emptyCells);
    } else if (numOfMistakes !== 0) {
      this.#makeCellsInvalid(mistakeCells);
    }
    MessageDisplayer.displayMessage(numOfEmptyCells, numOfMistakes);
  }

  #getCellText(cell, childNumber = 4) {
    return cell.children().eq(childNumber).text();
  }

  #makeCellsInvalid(cellsPositions) {
    cellsPositions.forEach((cellPosition) => {
      const element = this.#grid[cellPosition[0]][cellPosition[1]].element;
      if (this.#elementIsEditable(element)) {
        element.addClass("invalid");
      }
    });
  }

  #markImportantCells() {
    this.#removeImportantCellClass();
    this.#importantCells = this.#getImportantCells(this.#$selectedCell);
    this.#addImportantCellClass();
  }

  #addImportantCellClass() {
    for (const cell of this.#importantCells) {
      $(cell).addClass("important");
    }
  }

  #removeImportantCellClass() {
    if (this.#importantCells) {
      for (const cell of this.#importantCells) {
        $(cell).removeClass("important");
      }
    }
  }

  #removeSelectedCellClass() {
    if (this.#$selectedCell) {
      this.#$selectedCell.removeClass("selected");
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

  #isCellEditable(cell) {
    const position = this.#findCellPosition(cell);
    return this.#elementIsEditable(
      this.#grid[position[0]][position[1]].element
    );
  }

  #elementIsEditable(element) {
    return !element.hasClass("uneditable");
  }

  #findCellPosition(cell) {
    for (let i = 0; i < Constants.gridSize; ++i) {
      for (let j = 0; j < Constants.gridSize; ++j) {
        if (this.#grid[i][j].element.get(0) === cell.get(0)) {
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
        throw new Error(`Difficulty setting not recognised : ${difficulty}`);
    }
    let count = 0;
    while (count !== numOfUneditableCells) {
      let i = Math.floor(Math.random() * Constants.gridSize);
      let j = Math.floor(Math.random() * Constants.gridSize);
      const element = this.#grid[i][j].element;
      if (this.#elementIsEditable(element)) {
        ++count;
        element.addClass("uneditable");
      }
    }
  }

  #displayUneditableCellsValue() {
    for (let i = 0; i < Constants.gridSize; ++i) {
      for (let j = 0; j < Constants.gridSize; ++j) {
        const cell = this.#grid[i][j];
        const element = cell.element;
        if (!this.#elementIsEditable(element)) {
          this.#setCellText(element, cell.value);
        }
      }
    }
  }

  #setCellText(cell, text, childNumber = 4) {
    cell.children().eq(childNumber).text(text);
  }

  #grid;
  #$selectedCell;
  #importantCells;
  #sudokuGenerator = new SudokuGenerator();
}
