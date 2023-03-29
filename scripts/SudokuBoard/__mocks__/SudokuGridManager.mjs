const mockStartGame = jest.fn();
const mockSelectCell = jest.fn();
const mockFillCellWithInput = jest.fn();
const mockCheckSudoku = jest.fn();
const mockEndGame = jest.fn();
const mockRemoveSelectedCellText = jest.fn();
const SudokuGridManager = jest.fn().mockImplementation(() => {
  return {
    startGame: mockStartGame,
    endGame: mockEndGame,
    selectCell: mockSelectCell,
    fillCellWithInput: mockFillCellWithInput,
    checkSudoku: mockCheckSudoku,
    removeSelectedCellText: mockRemoveSelectedCellText,
  };
});

export default SudokuGridManager;
