const mockHandleGameStart = jest.fn();
const mockChangeDifficulty = jest.fn();
const mockHandleGameStop = jest.fn();
const mockHandleGamePause = jest.fn();
const mockHandleGameResume = jest.fn();
const HeaderManager = jest.fn().mockImplementation(() => {
  return {
    handleGameStart: mockHandleGameStart,
    handleGamePause: mockHandleGamePause,
    handleGameResume: mockHandleGameResume,
    handleGameStop: mockHandleGameStop,
    changeDifficulty: mockChangeDifficulty,
  };
});

export default HeaderManager;
