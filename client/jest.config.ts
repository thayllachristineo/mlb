/** @type {import('jest').Config} */

export default {
  verbose: true,
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx?$': ['ts-jest', { isolatedModules: true }],
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  moduleNameMapper: {
    '^@components/(.+)': '<rootDir>/src/components/$1',
    '^@contexts/(.+)': '<rootDir>/src/contexts/$1',
    '^@hooks/(.+)': '<rootDir>/src/hooks/$1',
    '^@pages/(.+)': '<rootDir>/src/pages/$1',
    '^@services/(.+)': '<rootDir>/src/services/$1',
    '^@styles/(.+)': '<rootDir>/src/styles/$1',
    '^@utils/(.+)': '<rootDir>/src/utils/$1',
  },
  moduleDirectories: ['node_modules', 'src'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};
