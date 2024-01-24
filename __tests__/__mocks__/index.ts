const spyOnLog = jest.spyOn(console, 'log').mockReturnValue();
const spyOnWarn = jest.spyOn(console, 'warn').mockReturnValue();

const navigation = {
  navigate: jest.fn(),
  goBack: jest.fn(),
};
export const mocks = {navigation, spyOnLog, spyOnWarn};
