const mockIsCellValid = jest.fn();
const SudokuCellValidityChecker = jest.fn().mockImplementation(() => {
  return {
    isCellValid: mockIsCellValid,
  };
});

export default SudokuCellValidityChecker;
