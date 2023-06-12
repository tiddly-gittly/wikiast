import path from 'path';
import type { JestConfigWithTsJest } from 'ts-jest';

const jestConfig: JestConfigWithTsJest = {
  preset: 'ts-jest/presets/js-with-ts-esm',
  transform: {
    '\\.[jt]sx?$': ['ts-jest', {
      useESM: true,
      isolatedModules: true,
    }],
  },
  testEnvironment: 'node',
  setupFilesAfterEnv: [path.resolve(__dirname, './test/jest.setup.ts')],
  extensionsToTreatAsEsm: ['.ts'],
};

export default jestConfig;
