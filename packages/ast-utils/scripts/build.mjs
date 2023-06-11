/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import esbuild from 'esbuild';
import fs from 'fs-extra';
import path from 'path';
import { config } from '../esbuild.config.mjs';

await esbuild.build(config);