export default class PencilTool {
  static pencilClicked() {
    console.log("click");
    const pencilButton = $("#pencil-button");
    this.#pencilActive = !this.#pencilActive;
    if (this.isPencilActive()) {
      pencilButton.addClass("button-active");
    } else {
      pencilButton.removeClass("button-active");
    }
  }

  static resetPencilButton() {
    const pencilButton = $("#pencil-button");
    pencilButton.removeClass("button-active");
    this.#pencilActive = false;
  }

  static isPencilActive() {
    return this.#pencilActive;
  }

  static #pencilActive = false;
}
