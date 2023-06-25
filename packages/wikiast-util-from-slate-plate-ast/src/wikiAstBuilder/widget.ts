import type { TElement } from '@udecode/slate';
import type { IParseTreeNode } from 'tiddlywiki';

import type { IBuilders } from '../builder';

export function widget(builders: IBuilders, node: TElement & { node: IParseTreeNode }): IParseTreeNode {
  return node.node;
}
