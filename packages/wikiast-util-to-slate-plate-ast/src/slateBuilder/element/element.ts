/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { TNode } from '@udecode/slate';
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
  const result = {
    type: tag,
    children: convertNodes(context, children),
  } as TNode;
  if (node.rule) {
    result.rule = node.rule;
  }
  return result;
}
