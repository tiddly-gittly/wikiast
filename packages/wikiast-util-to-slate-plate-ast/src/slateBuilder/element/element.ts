/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { TNode } from '@udecode/plate-core';
import type { IDomParseTreeNode } from 'tiddlywiki';
import { IContext } from '../../context';
import { convertNodes } from '../../traverse';

import { blockquote } from './blockquote';
import { li } from './li';
import { marks } from './marks';
import { tbody, td } from './table';
import { ul } from './ul';

export const elementBuilders = { ul, ol: ul, li, blockquote, ...marks, tbody, td };
export type IElementBuilders = typeof elementBuilders;

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function element(context: IContext, node: IDomParseTreeNode): TNode | TNode[] {
  const { tag, children } = node;
  if (typeof elementBuilders[tag as keyof IElementBuilders] === 'function') {
    return elementBuilders[tag as keyof IElementBuilders](context, node);
  }
  return {
    type: tag,
    children: convertNodes(context, children),
  } as TNode;
}
