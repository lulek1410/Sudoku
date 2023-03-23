const mockHandleGameStart = jest.fn();
const mockChangeDifficulty = jest.fn();
const mockHandleGameStop = jest.fn();
const HeaderManager = jest.fn().mockImplementation(() => {
  return {
    handleGameStart: mockHandleGameStart,
    handleGameStop: mockHandleGameStop,
    changeDifficulty: mockChangeDifficulty,
  };
});

export default HeaderManager;
