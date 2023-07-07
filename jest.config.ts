import { Config, createConfig } from 'umi/test';

export default {
  ...createConfig(),
  globals: {
    prefixClx: 'x-comp',
  },
  testEnvironment: 'jsdom',
  testMatch: [
    '<rootDir>/src/**/*.test.{ts,tsx}',
    '<rootDir>/utils/**/*.test.{ts,tsx}',
  ],
  setupFiles: ['<rootDir>/jest.setup.js'],
  transformIgnorePatterns: ['/node_modules/(?!(lodash-es))'],
  collectCoverageFrom: [
    '**/src/**/*.{ts,tsx}',
    '**/utils/**/*.{ts,tsx}',
    '!**/node_modules/**',
  ],
  modulePathIgnorePatterns: ['<rootDir>/node_modules.*/react'],
  moduleNameMapper: {
    '@/icon/iconfont': '<rootDir>/test/__mocks__/styleMock.js',
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.(jpg|png|svg)$': '<rootDir>/test/__mocks__/fileMock.js',
    '\\.(css|less|scss)$': '<rootDir>/test/__mocks__/styleMock.js',
  },
  testPathIgnorePatterns: ['\\.js$'],
} as Config.InitialOptions;
