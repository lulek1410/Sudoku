const mockIsCellValid = jest.fn();
const CellValidityChecker = jest.fn().mockImplementation(() => {
  return {
    isCellValid: mockIsCellValid,
  };
});

export default CellValidityChecker;
