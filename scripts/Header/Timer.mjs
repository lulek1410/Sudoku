export default class Timer {
  static startTimer() {
    let start = Date.now();
    let seconds = "";
    let minutes = "";
    const updateTime = (count) => {
      return count < 10 ? "0" + count : "" + count;
    };
    this.#timer = setInterval(() => {
      const elapsed = Date.now() - start;
      const elapsedMinutes = Math.floor(elapsed / 60000);
      seconds = updateTime(Math.floor(elapsed / 1000) - elapsedMinutes * 60);
      minutes = updateTime(elapsedMinutes);
      $("#timer").text(`${minutes}:${seconds}`);
    }, 100);
  }

  static stopTimer() {
    clearInterval(this.#timer);
  }

  static #timer;
}
