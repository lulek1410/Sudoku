const mockStartTimer = jest.fn();
const mockStopTimer = jest.fn();
const mockPauseTimer = jest.fn();
const Timer = {
  startTimer: mockStartTimer,
  stopTimer: mockStopTimer,
  pauseTimer: mockPauseTimer,
};

export default Timer;
