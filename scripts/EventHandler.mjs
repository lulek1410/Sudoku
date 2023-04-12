import HeaderManager from "./Header/HeaderManager.mjs";
import SudokuGridManager from "./SudokuBoard/SudokuGridManager.mjs";
import PencilTool from "./SudokuBoard/PencilTool.mjs";
import MessageDisplayer from "./Header/MessageDisplyer.mjs";

export default class EventHandler {
  constructor() {
    this.#sudokuGridManager = new SudokuGridManager(this.#$cells);
    this.#headerManager = new HeaderManager();
    this.#listenForHeaderInteractions(this.#$startButton);
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

  #listenForVisibilityChange() {
    const pauseCallback = this.#headerManager.handleGamePause;
    const resumeCallback = this.#headerManager.handleGameResume;
    $(document).on("visibilitychange", function (e) {
      if (e.target.visibilityState === "hidden") {
        pauseCallback();
      } else {
        resumeCallback();
      }
    });
  }

  #disableVisibilityChangeListener() {
    $(document).off("visibilitychange");
  }

  #listenForHeaderInteractions() {
    const startButtonCallback = this.#startCallback.bind(this);
    this.#$startButton.on("click", startButtonCallback);
    this.#listenForDifficultyChangeButtonsInteractions();
  }

  #listenForDifficultyChangeButtonsInteractions() {
    const difficultyChangeCallback = this.#headerManager.changeDifficulty.bind(
      this.#headerManager
    );
    this.#$leftArrowButton.on("click", difficultyChangeCallback);
    this.#$rightArrowButton.on("click", difficultyChangeCallback);
  }

  #disableDifficultyChangeButtonsInteractions() {
    this.#$leftArrowButton.off("click");
    this.#$rightArrowButton.off("click");
  }

  #listenForToolsInteractions() {
    const isSudokuValidCallback = this.#sudokuGridManager.isSudokuValid.bind(
      this.#sudokuGridManager
    );
    const stopGameCallback = this.#stopGame.bind(this);
    this.#$checkButton.on("click", function () {
      if (isSudokuValidCallback()) {
        stopGameCallback();
      }
    });
    this.#$pencilButton.on("click", function () {
      PencilTool.pencilClicked();
    });
    const ereaserButtonCallback =
      this.#sudokuGridManager.removeSelectedCellText.bind(
        this.#sudokuGridManager
      );
    this.#$ereaserButton.on("click", ereaserButtonCallback);
  }

  #listenForNumberButtonsInteractions() {
    this.#$numberButtons.each(function () {
      $(this).on("click", function (event) {
        const key = +$(event.target).text();
        const eventToTrigger = $.Event("keyup", { key: key });
        $(document).trigger(eventToTrigger);
      });
    });
  }

  #disabeNumberButtonsInteractions() {
    this.#$numberButtons.each(function () {
      $(this).off("click");
    });
  }

  #disableToolsInteractions() {
    this.#$checkButton.off("click");
    this.#$pencilButton.off("click");
    this.#$ereaserButton.off("click");
  }

  #startCallback() {
    if (!this.gameStarted) {
      this.#sudokuGridManager.startGame($("#difficulty-level").text());
      this.#headerManager.handleGameStart();
      this.#listenForGridInteractions();
      this.#listenForNumberButtonsInteractions();
      this.#listenForToolsInteractions();
      this.#listenForVisibilityChange();
      this.#disableDifficultyChangeButtonsInteractions();
      this.gameStarted = true;
    } else {
      this.#sudokuGridManager.endGame();
      MessageDisplayer.resetInfo();
      this.#listenForDifficultyChangeButtonsInteractions();
      this.#disableVisibilityChangeListener();
      this.#stopGame();
    }
  }

  #stopGame() {
    this.#headerManager.handleGameStop();
    PencilTool.resetPencilButton();
    this.#disableToolsInteractions();
    this.#disableGridInteractions();
    this.#disabeNumberButtonsInteractions();
    this.gameStarted = false;
  }

  #$checkButton = $("#check-button");
  #$pencilButton = $("#pencil-button");
  #$ereaserButton = $("#ereaser-button");
  #$leftArrowButton = $("#left-arrow-button");
  #$rightArrowButton = $("#right-arrow-button");
  #$cells = $(".cell");
  #$startButton = $("#start-button");
  #$numberButtons = $("#number-buttons > button");
  gameStarted = false;
  #sudokuGridManager;
  #headerManager;
}
