export default class PencilTool {
  static pencilClicked() {
    console.log("click");
    const $pencilButton = $("#pencil-button");
    this.#pencilActive = !this.#pencilActive;
    if (this.isPencilActive()) {
      $pencilButton.addClass("button-clicked");
    } else {
      $pencilButton.removeClass("button-clicked");
    }
  }

  static resetPencilButton() {
    $("#pencil-button").removeClass("button-clicked");
    this.#pencilActive = false;
  }

  static isPencilActive() {
    return this.#pencilActive;
  }

  static #pencilActive = false;
}
