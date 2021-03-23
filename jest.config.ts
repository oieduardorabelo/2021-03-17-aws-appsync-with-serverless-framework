export default {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['<rootDir>/__tests__/cases/**/*'],
  setupFilesAfterEnv: ['<rootDir>/__tests__/config/setup-files-after-env.ts'],
};
