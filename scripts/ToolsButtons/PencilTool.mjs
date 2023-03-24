export default class PencilTool {
  static pencilClicked() {
    let pencilButton = $("#pencil-button");
    this.#pencilActive = !this.#pencilActive;
    if (this.isPencilActive()) {
      pencilButton.css("backgroundColor", "rgb(127, 255, 212, 0.7)");
    } else {
      pencilButton.css("backgroundColor", "aquamarine");
    }
  }

  static isPencilActive() {
    return this.#pencilActive;
  }

  static #pencilActive = false;
}
