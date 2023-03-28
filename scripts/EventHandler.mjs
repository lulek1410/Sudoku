import HeaderManager from "./Header/HeaderManager.mjs";
import SudokuGridManager from "./SudokuBoard/SudokuGridManager.mjs";
import PencilTool from "./ToolsButtons/PencilTool.mjs";

export default class EventHandler {
  constructor() {
    const $startButton = $("start-button");
    this.#sudokuGridManager = new SudokuGridManager(this.#$cells);
    this.#headerManager = new HeaderManager($startButton);
    this.#listenForHeaderInteractions($startButton);
  }

  #listenForGridInteractions() {
    const selectCellCallback = this.#sudokuGridManager.selectCell.bind(
      this.#sudokuGridManager
    );
    this.#$cells.each(function () {
      $(this).on("click", selectCellCallback);
    });

    const fillCellWitInputCallback =
      this.#sudokuGridManager.fillCellWithInput.bind(this.#sudokuGridManager);
    $(document).on("keyup", fillCellWitInputCallback);
  }

  #disableGridInteractions() {
    this.#$cells.each(function () {
      $(this).off("click");
    });
    $(document).off("keyup");
  }

  #listenForHeaderInteractions(startButton) {
    startButton.on("click", this);
    const difficultyChangeCallback = this.#headerManager.changeDifficulty.bind(
      this.#headerManager
    );
    const startButtonCallback = this.#startCallback.bind(this);
    $("#left-arrow-button").on("click", difficultyChangeCallback);
    $("#right-arrow-button").on("click", difficultyChangeCallback);
    $("#start-button").on("click", startButtonCallback);
  }

  #listenForToolsInteractions() {
    $("#check-button");
    $("#pencil-button").on("click", function () {
      PencilTool.pencilClicked();
    });
    $("#ereaser-button");
  }

  #disableToolsInteractions() {
    $("#pencil-button").off("click");
  }

  #startCallback() {
    const startButton = $("#start-button");
    if (!this.#gameStarted) {
      this.#sudokuGridManager.startGame();
      this.#headerManager.handleGameStart();
      this.#listenForGridInteractions();
      this.#listenForToolsInteractions();
      this.#gameStarted = true;
    } else {
      this.#headerManager.handleGameStop();
      this.#disableGridInteractions();
      this.#gameStarted = false;
    }
  }

  #$cells = $(".cell");
  #gameStarted = false;
  #sudokuGridManager;
  #headerManager;
}
