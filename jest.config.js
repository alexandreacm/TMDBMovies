module.exports = {
  preset: 'react-native',
  setupFiles: [
    './__tests__/jest.setup.js',
    './node_modules/react-native-gesture-handler/jestSetup.js',
  ],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'node', 'json'],
  testMatch: ['**/__tests__/**/*.(test|spec).(js|tsx)'],
  testPathIgnorePatterns: [
    './node_modules',
    './android',
    './ios',
    '<rootDir>/__tests__/jest.setup.js',
  ],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?@?react-native|@react-native-community|@react-navigation)',
  ],
};
