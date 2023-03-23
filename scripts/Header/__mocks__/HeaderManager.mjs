const mockHandleGameStart = jest.fn();
const mockChangeDifficulty = jest.fn();
const HeaderManager = jest.fn().mockImplementation(() => {
  return {
    handleGameStart: mockHandleGameStart,
    changeDifficulty: mockChangeDifficulty,
  };
});
