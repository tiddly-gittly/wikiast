import type { TEditor, TElement, TNode, TText, Value } from '@udecode/slate';
import type { IParseTreeNode } from 'tiddlywiki';
import { builders } from './builder';
import { convertNodes } from './traverse';

export function wikiAstFromSlateAst(input: TNode[] | TEditor<Value> | TElement | TText | Array<TEditor<Value> | TElement | TText>): IParseTreeNode[] {
  return convertNodes(builders, Array.isArray(input) ? input : [input]);
}
