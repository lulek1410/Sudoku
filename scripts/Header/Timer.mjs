export default class Timer {
  static startTimer() {
    let start = Date.now() - this.#elapsedTime;
    let seconds = "";
    let minutes = "";
    const updateTime = (count) => {
      return count < 10 ? "0" + count : "" + count;
    };
    this.#timer = setInterval(() => {
      this.#elapsedTime = Date.now() - start;
      const elapsedMinutes = Math.floor(this.#elapsedTime / 60000);
      seconds = updateTime(
        Math.floor(this.#elapsedTime / 1000) - elapsedMinutes * 60
      );
      minutes = updateTime(elapsedMinutes);
      $("#timer").text(`${minutes}:${seconds}`);
    }, 100);
  }

  static pauseTimer() {
    clearInterval(this.#timer);
  }

  static stopTimer() {
    clearInterval(this.#timer);
    this.#elapsedTime = 0;
  }

  static #elapsedTime = 0;
  static #timer;
}
