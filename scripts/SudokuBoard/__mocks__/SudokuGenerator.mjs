export const mockGenerateSudoku = jest.fn();
const SudokuGenerator = jest.fn().mockImplementation(() => {
  return { generateSudoku: mockGenerateSudoku };
});
export default SudokuGenerator;
