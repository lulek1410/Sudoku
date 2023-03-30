export default class MessageDisplayer {
  static displayMessage(numberOfEmptyCells, numberOfMistakes) {
    let message;
    if (numberOfEmptyCells !== 0) {
      message = `You did not fill ${numberOfEmptyCells} cells!`;
    } else if (numberOfMistakes !== 0) {
      message = `You made ${numberOfMistakes} mistakes!`;
    } else {
      message = "You won! Congratulations!";
    }
    $("#info").text(message);
  }

  static resetInfo() {
    $("#info").text("");
  }
}
