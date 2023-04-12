import Timer from "./Timer.mjs";

export default class HeaderManager {
  handleGameStart() {
    Timer.startTimer();
    $("#start-button").text("Stop");
  }

  handleGamePause() {
    Timer.pauseTimer();
  }

  handleGameResume() {
    Timer.startTimer();
  }

  handleGameStop() {
    $("#start-button").text("Start");
    Timer.stopTimer();
  }

  changeDifficulty(event) {
    let difficultyChange = 1;
    let animationClass = "fadeInRight";
    if (event.target.classList.contains("fa-chevron-left")) {
      animationClass = "fadeInLeft";
      difficultyChange = -1;
    }
    const difficultyLevels = ["Easy", "Medium", "Hard"];
    const $difficultyLevel = $("#difficulty-level");
    let curretnIndex = difficultyLevels.indexOf($difficultyLevel.text());
    curretnIndex += difficultyChange;
    if (curretnIndex < 0) {
      curretnIndex = difficultyLevels.length - 1;
    } else if (curretnIndex >= difficultyLevels.length) {
      curretnIndex = 0;
    }
    $difficultyLevel.text(difficultyLevels[curretnIndex]);
    $difficultyLevel.addClass(animationClass);
    setTimeout(() => {
      $difficultyLevel.removeClass(animationClass);
    }, 100);
  }
}
