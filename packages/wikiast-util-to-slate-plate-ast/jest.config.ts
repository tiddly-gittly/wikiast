import type { JestConfigWithTsJest } from 'ts-jest';
import base from '../../jest.config';

const jestConfig: JestConfigWithTsJest = {
  ...base,
};

export default jestConfig;
