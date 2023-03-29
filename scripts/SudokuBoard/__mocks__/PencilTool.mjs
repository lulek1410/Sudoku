const mockPencilClicked = jest.fn();
const mockIsPencilActive = jest.fn();
const mockResetPencilButton = jest.fn();
const PencilTool = {
  pencilClicked: mockPencilClicked,
  isPencilActive: mockIsPencilActive,
  resetPencilButton: mockResetPencilButton,
};

export default PencilTool;
