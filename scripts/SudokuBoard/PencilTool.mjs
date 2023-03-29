export default class PencilTool {
  static pencilClicked() {
    console.log("click");
    let pencilButton = $("#pencil-button");
    this.#pencilActive = !this.#pencilActive;
    if (this.isPencilActive()) {
      console.log("change color");
      pencilButton.addClass("button-active");
    } else {
      pencilButton.removeClass("button-active");
    }
  }

  static isPencilActive() {
    return this.#pencilActive;
  }

  static #pencilActive = false;
}
