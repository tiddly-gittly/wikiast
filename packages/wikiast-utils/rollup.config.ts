import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import type { Options as SwcOptions } from '@swc/core';
import fs from 'fs';
import dts from 'rollup-plugin-dts';
import { defineRollupSwcOption, swc } from 'rollup-plugin-swc3';
import 'rollup';

const swcrc = JSON.parse(fs.readFileSync('../../.swcrc', 'utf8')) as SwcOptions;

export default [{
  input: 'src/index.ts',
  output: {
    dir: 'dist',
    entryFileNames: '[name].mjs',
    format: 'es',
  },
  plugins: [
    swc(defineRollupSwcOption({
      ...swcrc,
    })),
    json(),
    commonjs(),
    nodeResolve({ preferBuiltins: true }),
  ],
}, {
  input: 'src/index.ts',
  output: {
    dir: 'dist',
    format: 'es',
  },
  plugins: [
    json(),
    dts(),
  ],
}];
