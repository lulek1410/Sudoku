import Constants from "../common/Constants.mjs";

export default class BoxIndexCalculator {
  static startIndex(currentPosition) {
    return currentPosition - (currentPosition % Constants.boxSize);
  }

  static endIndex(currentPosition) {
    return currentPosition + 2 - (currentPosition % Constants.boxSize);
  }
}
