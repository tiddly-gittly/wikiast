import type { TElement } from '@udecode/plate-core';
import type { IParseTreeNode } from 'tiddlywiki';
import { convertNodes } from '../traverse';

import type { IBuilders } from '../builder';

export function set(builders: IBuilders, node: TElement & { node: IParseTreeNode }): IParseTreeNode {
  const children = convertNodes(builders, node.children);
  return { ...node.node, children };
}
