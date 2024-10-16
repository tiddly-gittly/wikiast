import type { TNode } from '@udecode/slate';
import type { IDomParseTreeNode } from 'tiddlywiki';
import { IContext } from '..';
import { convertNodes } from '../traverse';

export function parseblock(context: IContext, node: IDomParseTreeNode): TNode {
  // DEBUG: console node
  console.warn(`node`, JSON.stringify(node, null, '  '));
  return {
    type: 'p',
    children: convertNodes(context, node.children),
  } as TNode;
}
