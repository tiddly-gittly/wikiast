import type { IDomParseTreeNode } from 'tiddlywiki';

import type { IContext, IWithParent } from '../..';
import { a } from './a';
import { blockquote } from './blockquote';
import { div } from './div';
import { headings } from './h1';
import { li } from './li';
import { marks } from './marks';
import { p } from './p';
import { tableTags } from './table';
import { ul } from './ul';
export const elementBuilders = { a, p, div, ul, ol: ul, li, blockquote, ...marks, ...headings, ...tableTags };

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function element(context: IContext, node: IDomParseTreeNode & IWithParent): string[] {
  const { tag } = node as IDomParseTreeNode & { tag: keyof typeof elementBuilders };
  const { builders } = context;
  if (typeof builders[tag] === 'function') {
    return builders[tag](context, node);
  }
  return builders.jsx(context, node);
}
