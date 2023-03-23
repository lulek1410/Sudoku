import HeaderManager from "./Header/HeaderManager.mjs";
import Timer from "./Header/Timer.mjs";
import SudokuGridManager from "./SudokuBoard/SudokuGridManager.mjs";

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

  #startCallback() {
    const startButton = $("#start-button");
    if (startButton.text() == "Start") {
      Timer.startTimer();
      startButton.text("Stop");
      this.#listenForGridInteractions();
      this.#sudokuGridManager.startGame();
    } else if (startButton.text() == "Stop") {
      startButton.text("Start");
      Timer.stopTimer();
      this.#disableGridInteractions();
    }
  }

  #$cells = $(".row>div");
  #sudokuGridManager;
  #headerManager;
  #gameStarted = false;
}
