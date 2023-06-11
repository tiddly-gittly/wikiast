/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
const esbuild = require('esbuild');
const { readJsonSync } = require('fs-extra');
const browserslist = require('browserslist');
const { esbuildPluginBrowserslist, resolveToEsbuildTarget } = require('esbuild-plugin-browserslist');
const importPlugin = require('esbuild-dynamic-import-plugin');
const fs = require('fs-extra');
const path = require('path');

export const config = {
  entryPoints: ['./src/index.ts'],
  bundle: true,
  minify: true,
  outdir: `./dist`,
  sourcemap: process.env.CI ? false : 'inline',
  format: 'cjs',
  treeShaking: true,
  platform: 'browser',
  external: [],
  plugins: [
    esbuildPluginBrowserslist(browserslist('last 2 versions, not dead'), {
      printUnknownTargets: false,
    }),
    importPlugin({
      options: [
        {
          libraryName: 'lodash',
          libraryDirectory: '',
          camel2DashComponentName: false, // default: true
        },
      ],
    }),
  ],
};
