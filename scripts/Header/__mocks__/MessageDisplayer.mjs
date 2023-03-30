const mockDisplayMessage = jest.fn();
const mockResetInfo = jest.fn();
const MessageDisplayer = {
  displayMessage: mockDisplayMessage,
  resetInfo: mockResetInfo,
};

export default MessageDisplayer;
