const mockStartTimer = jest.fn();
const mockStopTimer = jest.fn();
const Timer = {
  startTimer: mockStartTimer,
  stopTimer: mockStopTimer,
};

export default Timer;
