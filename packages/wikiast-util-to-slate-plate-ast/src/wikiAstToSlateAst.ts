import type { TNode } from '@udecode/plate-core';
import type { IParseTreeNode } from 'tiddlywiki';
import { initialContext } from './context';
import { convertNodes } from './traverse';

export function wikiAstToSlateAst(node: IParseTreeNode | IParseTreeNode[], options?: { idCreator?: () => string }): TNode[] {
  return convertNodes({ ...initialContext, ...options }, Array.isArray(node) ? node : [node]);
}
