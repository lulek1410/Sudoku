const mockStartGame = jest.fn();
const mockSelectCell = jest.fn();
const mockFillCellWithInput = jest.fn();
const SudokuGridManager = jest.fn().mockImplementation(() => {
  return {
    startGame: mockStartGame,
    selectCell: mockSelectCell,
    fillCellWithInput: mockFillCellWithInput,
  };
});
