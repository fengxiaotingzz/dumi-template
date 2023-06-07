import { Config, createConfig } from 'umi/test';

export default {
  ...createConfig(),
  testEnvironment: 'jsdom',
  testMatch: [
    '<rootDir>/src/**/*.test.{ts,tsx}',
    '<rootDir>/utils/**/*.test.{ts,tsx}',
  ],
  transformIgnorePatterns: ['/node_modules/'],
  collectCoverageFrom: [
    '**/src/**/*.{ts,tsx}',
    '**/utils/**/*.{ts,tsx}',
    '!**/node_modules/**',
  ],
  // collectCoverage: true,
} as Config.InitialOptions;
